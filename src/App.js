import React, { Component }from 'react';
// import MyComponent from './MyComponent';
// import ChildComponent from './ChildComponent';
import EventPracticee from '../src/chapter4/EventPractice';
import ValidationSample from '../src/chapter5/ValidationSample';
import ScrollBox from '../src/chapter5/ScrollBox';

//import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {

    return (

    <div>
      <h3>chapter4</h3>
      <EventPracticee />
      <hr />
      <h3>chapter5</h3>
      <ValidationSample />
      <hr />
      <ScrollBox ref={(ref) => {
        this.scrollBox = ref
      }} />
      <button onClick={
        () => {
          this.scrollBox.scrollToBotton()
        }
      }>맨 밑으로</button>
      
      <hr />
      <h3>chapter6</h3>      


    </div>

    );
  }



    
    //<ScrollBox ref={(ref) => this.ScrollBox=ref}/>
    //<button onClick={() => this.ScrollBox.scrollToBotton()}>맨 맽으로</button>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React by minhyup
    //     </a>
    //   </header>
    //   <MyComponent name="minhyup" />
    //   <MyComponent  />
    //   <ChildComponent name="hahaha"> dddddd</ChildComponent>

    // </div>

}

export default App;
