function Carro(props) {
  
    return (
      <div>
        <h2>{props.nome}</h2>
        <ul>
          <li>Cor: {props.cor}</li>
          <li>Ano: {props.ano}</li>
          <li>Flex: {String(props.isFlex)}</li>
        </ul>
      </div>
    );
  }
  
  export default Carro;