// src/components/Filtros/Filtros.jsx
import React from 'react';
import './Filtros.css';

const Filtros = ({ onFilter }) => {
  return (
    <div className="filtros">
      <h2>Filtros</h2>
      <input
        type="text"
        placeholder="Filtrar por nome"
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
};

export default Filtros;
