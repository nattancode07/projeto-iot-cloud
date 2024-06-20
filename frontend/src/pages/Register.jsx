import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { useNavigate } from 'react-router-dom'; // Correta importação de useNavigate
import axios from 'axios';
import './Register.css'
const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Lógica de registro
   
    try {
      const response = await axios.post('http://localhost:3000/register', { email, password });
      console.log('Resposta do servidor:', response.data);
      alert('Registro bem-sucedido!');
     // navigate('/login'); // Usar navigate ao invés de history.push
    } catch (error) {
      console.error('Erro ao fazer cadastro:', error);
      if (error.response.status === 404) {
        alert('Erro ao fazer o registro: Recurso não encontrado. Por favor, contate o suporte.');
      } else {
        alert('Erro ao fazer o registro. Por favor, tente novamente.');
      }
    }
  };

  return (
    <div className='div-geral-register'>
      <div className='div-register'>
        <h2>Registro</h2>
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
          <button type="submit">Registrar</button>
        </form>
      </div>
    </div>  
  );
};

export default Register;