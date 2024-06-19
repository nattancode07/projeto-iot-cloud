import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { useNavigate } from 'react-router-dom'; // Correta importação de useNavigate
import axios from 'axios';
import './Login.css';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    /*tentativa de fazer coneção n° 1*/
    try {
      const response = await axios.post('http://localhost:3001/login', {
        email,
        password
      });

      alert(response.data.message);
      navigate(HomePage); // Redirecione para a página desejada após o login bem-sucedido
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert('Usuário ou senha incorretos');
      } else {
        console.error('Erro ao fazer login:', error);
        alert('Erro ao fazer login');
      }
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
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
    
  );
};

export default Login;
