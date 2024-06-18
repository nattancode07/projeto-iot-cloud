import React, { useState } from 'react';

const ExpenseForm = ({ addExpense }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense({ description, amount, category });
    setDescription('');
    setAmount('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registrar Despesa</h2>
      <input 
        type="text" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        placeholder="Descrição" 
        required 
      />
      <input 
        type="number" 
        value={amount} 
        onChange={(e) => setAmount(e.target.value)} 
        placeholder="Quantia" 
        required 
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)} required>
        <option value="">Selecione a Categoria</option>
        <option value="Alimentação">Alimentação</option>
        <option value="Transporte">Transporte</option>
        <option value="Saúde">Saúde</option>
        <option value="Educação">Educação</option>
        <option value="Lazer">Lazer</option>
        <option value="Outros">Outros</option>
      </select>
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default ExpenseForm;
