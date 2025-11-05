const jwt = require('jsonwebtoken');


const checkAuth = (req, res, next) => {
  try {

    const token = req.headers.authorization.split(' ')[1]; 

    if (!token) {
      return res.status(401).json({ error: 'Nenhum token fornecido. Acesso negado.' });
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);


    req.userData = {
      userId: decodedToken.id,
      organizationId: decodedToken.organizationId,
      role: decodedToken.role
    };


    next();

  } catch (error) {

    return res.status(403).json({ error: 'Token inválido ou expirado. Acesso negado.' });
  }
};

module.exports = checkAuth;