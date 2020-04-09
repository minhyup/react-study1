import React from 'react';
import MyComponent from './MyComponent';
import ChildComponent from './ChildComponent';

import logo from './logo.svg';
import './App.css';

function App() {
  return (    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React by minhyup
        </a>
      </header>
      <MyComponent name="minhyup" />
      <MyComponent  />
      <ChildComponent name="hahaha"> dddddd</ChildComponent>

    </div>
  );
}

export default App;
