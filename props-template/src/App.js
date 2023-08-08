import Garagem from "./Componentes/Garagem";
import "./styles.css";

export default function App() {
  const nome = "Aninha"
  const nome2 = "Blade"

  function apresentaGaragem(name){
    alert(`Boas vindas à garagem de ${name}`)
  }

  const carros = [
    {
      nome: "Gol",
      cor: "verde",
      ano: 2013,
      isFlex: true
    },
    {
      nome: "Fusca",
      cor: "Branco",
      ano: 2003,
      isFlex:false
    },
    {
      nome: "Jeep",
      cor: "verde",
      ano: 2023,
      isFlex: true
    },
    {
      nome: "HB20",
      cor: "azul",
      ano: 2010,
      isFlex: true
    },
  ]

  return (
    <div>
      <Garagem
        nome={nome2}
        apresentaGaragem={apresentaGaragem}
        carro1={carros[0]}
        carro2={carros[1]}
        carro3={carros[2]}
        carro4={carros[3]}
      />
      <Garagem 
        //passando props para o componente filho "Garagem"
        nome={nome} 
        apresentaGaragem={apresentaGaragem}
        carro1={carros[0]}
        carro2={carros[1]}
        carro3={carros[2]}
        carro4={carros[3]}
      />
      
    </div>
  );
}
