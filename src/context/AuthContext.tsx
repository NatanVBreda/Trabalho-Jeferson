import React, { createContext, useState, ReactNode, useContext } from 'react';

// Tipagem para o AuthContext
interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
  user: string | null;
}

// Criação do AuthContext
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Hook para facilitar o uso do contexto
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};

// Provedor de autenticação
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<string | null>(null);

  const login = (email: string, password: string) => {
    // Autenticação simples para qualquer email/senha
    setIsAuthenticated(true);
    setUser(email);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};
