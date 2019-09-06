import React from 'react';
import Buttons from './Components/Buttons';
import './App.css';

function App() {
  return ([
    <div className="App">
      <header className="App-header">
        <Buttons />
        <h1>Astros</h1>
        </header>
    </div>,

      <div className='stripe'></div>,
      <div></div>,
      <div></div>,
  ]);
}

export default App;
