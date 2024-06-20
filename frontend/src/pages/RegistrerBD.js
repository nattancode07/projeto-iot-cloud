/*const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "an@2208",
  database: "adm"
});

app.post('/', (req, res) =>{
    const sql = "INSERT INTO adm.usuario(email,senha) VALUES('"+email+"','"+password+"')";
    const values = [
      req.body.email,
      req.body.password
    ]
    db.query(sql, [values], (err, data) => {
      if(err) return res.json("Falha no Login");
      return res.json(data);
    })
})

app.listen(8081, () => {
  console.log("Listening...");
})*/


const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "127.0.0.1:3306",
  user: "root",
  password: "an@2208",
  database: "adm"
});

// Conectar ao banco de dados
db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    throw err;
  }
  console.log('Conexão com o banco de dados MySQL estabelecida.');
});

// Rota POST para inserir usuário no banco de dados
app.post('/register', (req, res) => {
  const { email, password } = req.body;
  const sql = "INSERT INTO usuario (email, senha) VALUES (?, ?)";
  const values = [email, password];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Erro ao executar a consulta:', err);
      return res.status(500).json({ error: 'Erro interno no servidor.' });
    }
    console.log('Registro inserido com sucesso:', result);
    res.json({ message: 'Registro inserido com sucesso.' });
  });
});

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

