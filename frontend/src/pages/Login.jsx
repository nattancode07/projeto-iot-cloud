import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { useNavigate } from 'react-router-dom'; // Correta importação de useNavigate
import './Login.css';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    /*tentativa de fazer coneção n° 1*/
   // try {
    //  Connection con = DriverManager.getConnection("jdbc:mysql://127.0.0.1:3306/adm", "root", "an@2208");
    //  Statement stmt = con.createStatement();
      
    //  ResultSet rs = stmt.executeQuery("SELECT * FROM usuario WHERE email='"+email+"' AND senha='"+password+"'");
    //  if(rs.next()) {
    //    JOptionPane.showMessageDialog(null, "Seja bem-vindo");
  //  } else{
    //    JOptionPane.showMessageDialog(null, "Usuário ou senha incorretos");
   // }
    //} catch (Execption e) {
    //  System.out.println(e); /* a letra e irá retornar se o código estiver funcionando */
    // } 
  };

  return (
    <div className='div-geral-login'>
      <div className= "div-login">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Email" 
            required 
          />
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Senha" 
            required 
          />
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
    
  );
};

export default Login;
