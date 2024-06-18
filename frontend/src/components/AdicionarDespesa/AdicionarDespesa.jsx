import React, { useState } from 'react';
import './AdicionarDespesa.css';

const AdicionarDespesa = ({ onAdd }) => {
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');
  const [data, setData] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ nome, valor, data });
    setNome('');
    setValor('');
    setData('');
  };

  return (
    <div className="adicionar-despesa">
      <h2>Adicionar Nova Despesa</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />
        <input
          type="date"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};

export default AdicionarDespesa;
