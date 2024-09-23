import React, { useState } from 'react';
import Receitas from '../components/Receitas';
import Despesas from '../components/Despesas';

const Dashboard: React.FC = () => {
  const [receitas, setReceitas] = useState<{ descricao: string; valor: number }[]>([]);
  const [despesas, setDespesas] = useState<{ descricao: string; valor: number }[]>([]);

  const totalReceitas = receitas.reduce((acc, receita) => acc + receita.valor, 0);
  const totalDespesas = despesas.reduce((acc, despesa) => acc + despesa.valor, 0);
  const saldo = totalReceitas - totalDespesas;

  return (
    <div className="container">
      <h1>Resumo Financeiro</h1>
      <table className="summary-table">
        <thead>
          <tr>
            <th>Receitas</th>
            <th>Despesas</th>
            <th>Saldo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>R$ {totalReceitas}</td>
            <td>R$ {totalDespesas}</td>
            <td>R$ {saldo}</td>
          </tr>
        </tbody>
      </table>

      <Receitas setReceitas={setReceitas} receitas={receitas} />
      <Despesas setDespesas={setDespesas} despesas={despesas} />
    </div>
  );
};

export default Dashboard;
