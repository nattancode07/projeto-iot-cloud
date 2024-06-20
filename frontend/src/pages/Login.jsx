/*import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { useNavigate } from 'react-router-dom'; // Correta importação de useNavigate
import axios from 'axios';
import './Login.css';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    

    try {
      const response = await axios.post('http://localhost:3001/login', {email, password});
      console.log('Resposta do servidor:', response);

      if(response > 0) {
        alert("Login bem sucedido");
        navigate('/HomePage');
      } else{
        alert("email e senha não existem, vá criar novo usuário")
      }
    
    } catch (error) {
   
    }
    
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
          <button type="submit" onClick={handleSubmit}>Entrar</button>
        </form>
      </div>
    </div>
    
  );
};

export default Login;*/

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Correta importação de useNavigate
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/login', { email, password });
      console.log('Resposta do servidor:', response);

      if (response.next()) {
        alert("Login bem-sucedido");
        navigate('/HomePage'); // Redireciona para a página inicial
      } else {
        alert("Email e senha não existem, vá criar novo usuário");
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
     /* if (error.response && error.response.status === 401) {
        alert("Email ou senha inválidos. Tente novamente.");
      } else {
        alert("Ocorreu um erro ao tentar fazer login. Tente novamente mais tarde.");
      }
    }*/
  };

  return (
    <div className='div-geral-login'>
      <div className="div-login">
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
}
export default Login;