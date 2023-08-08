import Carro from "./Carro";

function Garagem(props) {
  return (
    <div>
      <h1>Garagem de {props.nome}</h1>
      <button
        onClick={() => {
          props.apresentaGaragem(props.nome);
        }}
      >
        Clique aqui
      </button>

      {/* Passando as props que vieram do App para o componente Carro */}
      <Carro
        nome={props.carro1.nome}
        cor={props.carro1.cor}
        ano={props.carro1.ano}
        isFlex={props.carro1.isFlex}
      />
      <Carro
        nome={props.carro2.nome}
        cor={props.carro2.cor}
        ano={props.carro2.ano}
        isFlex={props.carro2.isFlex}
      />
      <Carro
        nome={props.carro3.nome}
        cor={props.carro3.cor}
        ano={props.carro3.ano}
        isFlex={props.carro3.isFlex}
      />
      <Carro
        nome={props.carro4.nome}
        cor={props.carro4.cor}
        ano={props.carro4.ano}
        isFlex={props.carro4.isFlex}
      />
    </div>
  );
}

export default Garagem;
