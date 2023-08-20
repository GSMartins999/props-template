import Garagem from "./Componentes/Garagem";
import "./styles.css";
import "./App.css";

export default function App() {
  const nome = "Giovanni"
  const nome2 = "Lin"

  function apresentaGaragem(name) {
    alert(`Boas vindas da garagem de ${name}`);
  }

  const carros = [
    {
      nome: "Brasilia",
      cor: "verde",
      ano: 2003,
      isFlex: true,
    },

    {
      nome: "Fusca",
      cor: "preto",
      ano: 2004,
      isFlex: false,
    },
    
  ]

  return (
    <div className="corpo">
      <Garagem
        nome={nome}
        apresentaGaragem={apresentaGaragem}
        carro1={carros[1]}
        carro2={carros[1]}
      />

      <Garagem
        nome={nome2}
        apresentaGaragem={apresentaGaragem}
        carro2={carros[0]}
        carro1={carros[1]}
    />

      
    </div>
  );
}
