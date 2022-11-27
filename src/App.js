import { useState } from 'react';
import {FiSearch} from 'react-icons/fi'
import './styles.css';
function App(){

    <div className="container">
      <h1 className="title">Buscador de CEP</h1>
      <div className="containerInput">
        <input
        type="text"
        placeholder="Digite seu cep"
        />
        <button className="buttonSearch" >
          <FiSearch size={20} color="#fff"/>
        </button>
      </div>
      <main className='main'>
        <h2>CEP: 35845000</h2>

        <span>Rua santa luzia</span>
        <span>linha verde</span>
        <span>Centro</span>
        <span>Santana do riacho-Mg</span>

      </main>
    </div>
  }
export default App
