import React from 'react';
import logo from './logo.svg';
import './App.css';
import CrComLib from '@crestron/ch5-crcomlib';

function App() {
  const sendDigital = (index:string, value:boolean)=>CrComLib.publishEvent('b', index, value);
  const setDigital = (index:string) => CrComLib.publishEvent('b', index, true);
  const stopDigital = (index:string) => CrComLib.publishEvent('b', index, false);
  const pulseDigital = (index:string)=>{setDigital(index); setTimeout(()=>stopDigital(index))};
  const StartRoom = ()=>{pulseDigital("1")};

  return (
    <div className="App">
      <header className="App-header">
        Hello World
      </header>
      <section>
        <button onClick={StartRoom}> 
          Click me and see
        </button>
      </section>
    </div>
  );
}

export default App;
