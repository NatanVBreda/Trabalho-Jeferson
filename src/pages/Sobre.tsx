import React from "react";
import { Link } from "react-router-dom";

const Sobre: React.FC = () => {
  return (
    <div>
      <h1>Sobre</h1>
      <p>
        Nome: Natan Vendrusculo Breda <br />
        Profissão: Vagabundo <br />
        Biografia: Nascido em Cascavel, Natan cresceu em Corbélia onde vive
        atualmente e trabalha como garçom em eventos(casamento, festas...), em
        2021 ingressou na Fag no curso de Engenharia de software e está fazendo
        essa auto-biografia nesse exato momento pois precisa entregar até hoje.
        FIM. <br />
        GitHub: https://github.com/NatanVBreda <br />
      </p>

      <Link to="/home">
        <button>Ir para Home</button>
      </Link>
      <Link to="/dashboard">
        <button>Ir para o Dashboard</button>
      </Link>
      <Link to="/login">
        <button>Ir para o Login</button>
      </Link>
    </div>
  );
};

export default Sobre;
