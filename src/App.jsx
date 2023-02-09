import { useState } from "react";
import "./App.css";

function App() {
  
  const carta1 = [0, 5, 8, 11, 14, 25, 44, 68,100];
  const carta2 = [2, 3, 14, 18, 22, 25, 33, 70, 99];
  const carta3 = [4, 5, 8, 11, 14, 25, 44, 68, 71];
  const carta4 = [3, 14, 18, 21, 34, 43, 46, 66, 90];

  const [cuentaTotal, setCuentaTotal]=useState(0);

  const [valSelect, setValSelect]=useState(0);

  const onHandlerClick = (e) => {
    //console.log("Hola onClick");
    console.log("Valor del botón " + parseInt (e.target.value));
    setCuentaTotal(cuentaTotal + parseInt (e.target.value));
    setValSelect(e.target.value);
  };
  const onChangeVal = (e) => {
    console.log("Aquí input");
    setVal(e.target.value);
  };

  const onHandlerResponseClick = (e) => {
    console.log("Click en el botón " + e.target.value);
  };

  return (
    <>
      <div>
        <h1>Bienvenida</h1>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
      </div>

      <h2>Vite + React</h2>
      <code>Valor Seleccionado:</code>  {valSelect}
      <div className="card">
        <div>Carta 1: </div>
        {carta1.map((e) => {
          return (
            <input className="myButton" key = {e} type="button" value={e} onClick={onHandlerClick}></input>
          );
        })}
        <button value={"No"} onClick={(e) => onHandlerResponseClick(e)}> {"["} No {"]"} </button>
        <button value={"Yes"} onClick={(e) => onHandlerResponseClick(e)}> {"["} Sí {"]"} </button>
        <p></p>

        <div>Carta 2: </div>
        {carta2.map((e) => {
          return (
            <input className="myButton" key = {e} type="button" value={e} onClick={onHandlerClick}></input>
          );
        })}
        <button value={"No"} onClick={(e) => onHandlerResponseClick(e)}> {"["} No {"]"} </button>
        <button value={"Yes"} onClick={(e) => onHandlerResponseClick(e)}> {"["} Sí {"]"} </button>
        <p></p>

        <div>Carta 3: </div>
        {carta3.map((e) => {
          return (
            <input className="myButton" key = {e} type="button" value={e} onClick={onHandlerClick}></input>
          );
        })}
        <button value={"No"} onClick={(e) => onHandlerResponseClick(e)}> {"["} No {"]"} </button>
        <button value={"Yes"} onClick={(e) => onHandlerResponseClick(e)}> {"["} Sí {"]"} </button>
        <p></p>

        <div>Carta 4: </div>
        {carta4.map((e) => {
          return (
            <input className="myButton" key = {e} type="button" value={e} onClick={onHandlerClick}></input>
          );
        })}
        <button value={"No"} onClick={(e) => onHandlerResponseClick(e)}> {"["} No {"]"} </button>
        <button value={"Yes"} onClick={(e) => onHandlerResponseClick(e)}> {"["} Sí {"]"} </button>
        <p></p>


      </div>
    </>
  );
}

export default App;
