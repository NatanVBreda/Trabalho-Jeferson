import React, { useState } from 'react';

interface Entry {
  descricao: string;
  valor: number;
}

interface DespesasProps {
  despesas: Entry[];
  setDespesas: (despesas: Entry[]) => void;
}

const Despesas: React.FC<DespesasProps> = ({ despesas, setDespesas }) => {
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const novaDespesa = { descricao, valor };
    setDespesas([...despesas, novaDespesa]);
    setDescricao('');
    setValor(0);
  };

  return (
    <div>
      <h2>Adicionar Despesa</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Descrição" 
          value={descricao} 
          onChange={(e) => setDescricao(e.target.value)} 
        />
        <input 
          type="number" 
          placeholder="Valor" 
          value={valor} 
          onChange={(e) => setValor(parseFloat(e.target.value))} 
        />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};

export default Despesas;
