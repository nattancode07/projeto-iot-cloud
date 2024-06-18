// src/pages/HomePage.jsx
import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Dashboard from '../components/Dashboard/Dashboard';
import DespesasList from '../components/DespesasList/DespesasList';
import AdicionarDespesa from '../components/AdicionarDespesa/AdicionarDespesa';
import Filtros from '../components/Filtros/Filtros';
import Footer from '../components/Footer/Footer';
import './HomePage.css';  // Adicione esta linha para incluir os estilos da HomePage

const HomePage = () => {
  const [despesas, setDespesas] = useState([
    { nome: 'Mercado', valor: 200, data: '2024-06-10' },
    { nome: 'Combustível', valor: 150, data: '2024-06-12' },
  ]);
  const [filter, setFilter] = useState('');

  const handleAddDespesa = (novaDespesa) => {
    setDespesas([...despesas, novaDespesa]);
  };

  const filteredDespesas = despesas.filter(despesa =>
    despesa.nome.toLowerCase().includes(filter.toLowerCase())
  );

  const handleRemoveDespesa = (index) => {
    const novasDespesas = [...despesas];
    novasDespesas.splice(index, 1);
    setDespesas(novasDespesas);
  };

  return (
    <div className="homepage">
      <Header />
      <main className="main-content">
        <Dashboard />
        <Filtros onFilter={setFilter} />
        <AdicionarDespesa onAdd={handleAddDespesa} />
        <DespesasList despesas={filteredDespesas} onRemove={handleRemoveDespesa}/>
      </main>
      <Footer/>
    </div>
  );
};

export default HomePage;
