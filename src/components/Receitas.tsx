import React, { useState } from 'react';

interface Entrada {
  descricao: string;
  valor: number;
}

interface ReceitasProps {
  setReceitas: React.Dispatch<React.SetStateAction<Entrada[]>>;
  receitas: Entrada[];
}

const Receitas: React.FC<ReceitasProps> = ({ setReceitas, receitas }) => {
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState<number | undefined>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!descricao || valor === undefined) return;
    
    const novaReceita: Entrada = { descricao, valor };
    setReceitas([...receitas, novaReceita]);
    setDescricao('');
    setValor(undefined);
  };

  return (
    <div>
      <h2>Adicionar Receita</h2>
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
          value={valor || ''} 
          onChange={(e) => setValor(Number(e.target.value))} 
        />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};

export default Receitas;
