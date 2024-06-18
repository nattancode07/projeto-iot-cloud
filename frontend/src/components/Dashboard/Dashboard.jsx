// src/components/Dashboard/Dashboard.jsx
import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  // Mock de dados do dashboard
  const totalDespesas = 2000;  // Exemplo estático, você deve puxar isso da API
  const categorias = [
    { categoria: 'Alimentação', valor: 600 },
    { categoria: 'Transporte', valor: 300 },
    { categoria: 'Moradia', valor: 1100 },
  ];

  return (
    <div className="dashboard">
      <h2>Visão Geral</h2>
      <div className="total-despesas">
        <h3>Total de Despesas</h3>
        <p>R$ {totalDespesas}</p>
      </div>
      <div className="categorias">
        <h3>Despesas por Categoria</h3>
        <ul>
          {categorias.map((cat, index) => (
            <li key={index}>{cat.categoria}: R$ {cat.valor}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
