import React, { createContext, useState, ReactNode } from 'react';


interface Entry {
  descricao: string;
  valor: number;
}


interface BudgetContextType {
  receitas: Entry[];
  despesas: Entry[];
  setReceitas: (receitas: Entry[]) => void;
  setDespesas: (despesas: Entry[]) => void;
  totalReceitas: number;
  totalDespesas: number;
  saldo: number;
}


export const BudgetContext = createContext<BudgetContextType | undefined>(undefined);


export const BudgetProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [receitas, setReceitas] = useState<Entry[]>([]);
  const [despesas, setDespesas] = useState<Entry[]>([]);

  const totalReceitas = receitas.reduce((acc, receita) => acc + receita.valor, 0);
  const totalDespesas = despesas.reduce((acc, despesa) => acc + despesa.valor, 0);
  const saldo = totalReceitas - totalDespesas;

  return (
    <BudgetContext.Provider value={{ receitas, despesas, setReceitas, setDespesas, totalReceitas, totalDespesas, saldo }}>
      {children}
    </BudgetContext.Provider>
  );
};
