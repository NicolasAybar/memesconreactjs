import React from 'react';
import logo from './logo.svg';
import html2canvas from 'html2canvas';
import { useState } from 'react';
import './App.css';

function App() {

  const [linea1, setlinea1] = useState('');
  const [linea2, setlinea2] = useState('');
  const [imagen, setImagen] = useState('');
  
  const onChangeLinea1 = function (evento) {
    setlinea1(evento.target.value)
  }

  const onChangeLinea2 = function (evento) {
    setlinea2(evento.target.value)
  }

  const onChangeImagen = function (evento){
    setImagen(evento.target.value)
  }

  const onClickBoton = function(evento){
    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = 'mene.jpg';
      link.href=img;
      link.click();
    });
  }

  return (
    <div className="App">
      
      <select onChange={onChangeImagen}>
        <option value="cine">cine</option>
        <option value="diversion">diversion</option>
        <option value="naturaleza">naturaleza</option>
        <option value="pantalla">pantalla</option>
      </select><br/>
      
      <input onChange={onChangeLinea1} type="text" placeholder="Linea uno"/><br/>
      <input onChange={onChangeLinea2} type="text" placeholder="Linea dos"/><br/>

      <button onClick={onClickBoton}>Exportar</button>
        <div className='meme' id='meme'>
          <span>{linea1}</span><br/>
          <span>{linea2}</span>
          <img src={"/img/" + imagen + ".jpg"}/>
        </div>
    </div>
  );
}

export default App;
