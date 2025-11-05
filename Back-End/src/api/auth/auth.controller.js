// src/api/auth/auth.controller.js
const db = require('../../config/database');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.registerUser = async (req, res) => {
  // 1. Extrair os dados do corpo da requisição
  const { organizationName, name, email, password } = req.body;

  // Validação básica
  if (!organizationName || !name || !email || !password) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
  }

  // 2. Usar 'try...catch' para lidar com possíveis erros (ex: e-mail duplicado)
  try {
    await db.query('BEGIN');

    // 3. Criar a organização primeiro
    const orgQuery = 'INSERT INTO organizations(name) VALUES($1) RETURNING id';
    const orgResult = await db.query(orgQuery, [organizationName]);
    const organizationId = orgResult.rows[0].id;

    // 4. Criptografar a senha do usuário
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    // 5. Criar o usuário, vinculando-o à organização recém-criada
    const userQuery = 'INSERT INTO users(organization_id, name, email, password_hash, role) VALUES($1, $2, $3, $4, $5) RETURNING id, email, name, role';
    const userResult = await db.query(userQuery, [organizationId, name, email, passwordHash, 'owner']);

    // FIM DA TRANSAÇÃO: Se tudo deu certo até aqui, salvamos as alterações.
    await db.query('COMMIT');

    // 6. Enviar uma resposta de sucesso
    res.status(201).json({
      message: 'Organização e usuário criados com sucesso!',
      user: userResult.rows[0],
    });

  } catch (error) {
    // EM CASO DE ERRO: Desfazemos qualquer alteração que tenha sido feita.
    await db.query('ROLLBACK');
    console.error('Erro no registro:', error);

    // Verificar se o erro é de e-mail duplicado
    if (error.code === '23505') { // Código de erro do PostgreSQL para violação de unicidade
        return res.status(409).json({ error: 'Este e-mail já está em uso.' });
    }

    res.status(500).json({ error: 'Erro interno do servidor.' });
  }

};

// Função para login de usuário

exports.loginUser = async (req, res) => {
  // 1. Extrair e-mail e senha do corpo da requisição
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'E-mail and password are required.' });
  }

  try {
    // 2. Encontrar o usuário no banco de dados pelo e-mail
    const userQuery = 'SELECT * FROM users WHERE email = $1';
    const { rows } = await db.query(userQuery, [email]);
    const user = rows[0];

    // Se o usuário não for encontrado...
    if (!user) {
      return res.status(401).json({ error: 'Credenciais inválidas.' }); // Usamos uma mensagem genérica por segurança
    }

    // 3. Comparar a senha fornecida com a senha criptografada no banco
    const isMatch = await bcrypt.compare(password, user.password_hash);

    // Se as senhas não baterem...
    if (!isMatch) {
      return res.status(401).json({ error: 'Credenciais inválidas.' });
    }

    // 4. Se tudo estiver correto, criar o "crachá" (JWT)
    const payload = {
      id: user.id,
      email: user.email,
      role: user.role,
      organizationId: user.organization_id,
    };

    // Assinar o token com nossa chave secreta e definir uma validade (ex: 1 dia)
    const token = jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    // 5. Enviar a resposta de sucesso com o token
    res.status(200).json({
      message: 'Login realizado com sucesso!',
      token: token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      }
    });

  } catch (error) {
    console.error('Erro no login:', error);
    res.status(500).json({ error: 'Erro interno do servidor.' });
  }
};