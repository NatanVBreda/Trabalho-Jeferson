import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Bem-vindo ao Gerenciador de Orçamento Pessoal</h1>
      <p>Este site ajuda você a gerenciar suas receitas e despesas de forma simples.</p>

      <Link to="/dashboard">
        <button>Ir para o Dashboard</button>
      </Link>
      <Link to="/sobre">
        <button>Sobre o Projeto</button>
      </Link>
    </div>
  );
};

export default Home;
