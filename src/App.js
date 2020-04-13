import React, { Component } from 'react';
import SassComponent from '../src/chapter9/SassComponent';
// import MyComponent from './MyComponent';
// import ChildComponent from './ChildComponent';
// import EventPracticee from '../src/chapter4/EventPractice';
// import ValidationSample from '../src/chapter5/ValidationSample';
// import ScrollBox from '../src/chapter5/ScrollBox';
// import IterationSample from '../src/chapter6/IterationSample';
// import LifeCycleSample from '../src/chapter7/LifeCycleSample';
// import ErrorBoundary from '../src/chapter7/ErrorBoundary';


//import logo from './logo.svg';
//import './App.css';

function getRandomColor(){
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {

  state = {
    color: '#000000'
  }


  getRandomColor(){
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  
  handleClick = () => {
    this.setState({
      //color: this.getRandomColor()
      color: getRandomColor()
    });
  }

  render() {

    return (

    <div>
      <SassComponent />
    </div>

    );
  }


//   <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo"/>
//     <p>
//       Edit <code>src/App.js</code> and save to reload
//     </p>
//     <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
//   </header>
// </div>

  // <h3>chapter4</h3>
  // <EventPracticee />
  // <hr />
  // <h3>chapter5</h3>
  // <ValidationSample />
  // <hr />
  // <ScrollBox ref={(ref) => {
  //   this.scrollBox = ref
  // }} />
  // <button onClick={
  //   () => {
  //     this.scrollBox.scrollToBotton()
  //   }
  // }>맨 밑으로</button>
  
  // <hr />
  // <h3>chapter6</h3>      
  // <IterationSample />
  // <hr />
  // <h3>chapter7 컴포넌트 라이프사이클</h3>
  // <button onClick={this.handleClick}>랜덤색상</button>
  // <ErrorBoundary>
  //   <LifeCycleSample color={this.state.color} />
  // </ErrorBoundary> 
  // <hr />
  // <h3>chapter9 컴포넌트 스타일링</h3>


    
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
