import './App.css';
import guitarra  from './img/guitar.png';
import Boton from './components/Boton';
import Pantalla from './components/Pantalla';
import BotonClear from './components/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput]= useState('');

  const agregarInput= valor=>{
    setInput(input+valor);
  };

  const calcularResultado= () => {
    if(input){
      try {
        setInput(evaluate(input));
      } catch (error) {
        alert('ingresa una operación válida')
        console.log(error);
      }
    }
    else{
      alert('ingresa valores para realizar los cálculos');
    }
    
  };  

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img
          src={guitarra}
          className='logo'
          alt='logo guitarra'
        />
      </div>

      <div className='contenedor-calculadora'>
        <Pantalla 
          input={input}
        />

        <div className='fila'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={()=>setInput('')}>
            Limpiar
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
