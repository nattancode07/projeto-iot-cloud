// src/components/DespesasList/DespesasList.jsx
import React from 'react';
import './DespesasList.css';

const DespesasList = ({ despesas }) => {
  return (
    <div className="despesas-list">
      <h2>Lista de Despesas</h2>
      <ul>
        {despesas.map((despesa, index) => (
          <li key={index}>
            {despesa.nome} - R$ {despesa.valor} em {despesa.data}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DespesasList;
