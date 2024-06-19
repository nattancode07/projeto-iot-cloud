const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

// Configurar a conexão com o banco de dados
const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'an@2208',
  database: 'adm'
});

db.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conectado ao banco de dados');
  }
});

// Rota de login
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const query = 'SELECT * FROM usuario WHERE email = ? AND senha = ?';
  db.query(query, [email, password], (err, results) => {
    if (err) {
      console.error('Erro ao executar a consulta:', err);
      res.status(500).send('Erro ao conectar ao banco de dados');
    } else if (results.length > 0) {
      res.send({ message: 'Seja bem-vindo' });
    } else {
      res.status(401).send({ message: 'Usuário ou senha incorretos' });
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
