const express = require('express');

require('dotenv').config();


const authRoutes = require('./api/auth/auth.routes');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());

// ROTA DE TESTE
app.get('/', (req, res) => {
  res.send('Nexus Logístico API está no ar!');
});


app.use('/api/auth', authRoutes);


app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta http://localhost:${PORT}`);
});