const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "127.0.0.1",
  use: "root",
  password: "an@2208",
  database: "adm"
});

app.post('/login', (req, res) =>{
    const sql = "SELECT * FROM usuario WHERE email = ? AND senha = ?";
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
})

