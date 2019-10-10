import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header/Header';
import MainContainer from './components/MainContainer/MainContainer';

function App() {
  return (
    <div className="App">
      <Header/>
      <MainContainer/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span className='sprite all man teen woman kid'></span>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
