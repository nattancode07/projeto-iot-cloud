import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { useNavigate } from 'react-router-dom'; // Correta importação de useNavigate
import './Register.css'
const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de registro
    history.push('/dashboard');
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
