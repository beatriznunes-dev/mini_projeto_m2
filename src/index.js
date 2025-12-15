process.stdout.write('\uFEFF');

require('dotenv').config();
const express = require("express");
const sequelize = require('./database');
const tarefaRoutes = require('./routes/tarefaRoutes');

const app = express();
app.use(express.json());
app.use('/api', tarefaRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync({ force: false })
  .then(() => {
    console.log('Banco de dados sincronizado');
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch(error => {
    console.error('Erro ao sincronizar banco:', error);
  });
