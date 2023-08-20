import Carro from "./Carro";

function Garagem(props) {
  return (
    <div className="gaga">
      <h1>Garagem de {props.nome}</h1>
      
      <button className="botao"
        onClick={() => {
          props.apresentaGaragem(props.nome);
        }}
      >
        Clique aqui
      </button>

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
    </div>
  );
}

export default Garagem;
