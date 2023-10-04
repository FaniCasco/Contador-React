
import { useState } from "react";


const Contador = () => {
  const [contador, setContador] = useState(0);

  const sumar = () => {
    setContador(contador + 1);
  }
  const restar = () => {
    setContador(contador - 1);
  }
  const volver = () => {
    setContador(0);
  }

  return (
    <div className="App">
      <h1>CONTADOR</h1>
      <div className="ordenacion">


        <button className="btn btn-primary" type="button" onClick={sumar}>+</button>
        <h2>{contador}</h2>
        <button className="btn btn-primary" type="button" onClick={restar}>-</button>
            </div><br />
            <button className="btn btn-primary" type="reset" onClick={volver}>Reset</button>
  
    </div>
  )
}
export default Contador;

