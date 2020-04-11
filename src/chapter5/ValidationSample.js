import React, { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {

    focusTest = React.createRef();

    state = {
        password: '',
        clicked: false,
        validated: false
    }

    handleChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    handleButtonClick = (e) => {
        this.setState({
            clicked: true,
            validated: this.state.password === '0000'
        })
    }

    handleFocus = (e) => {
        this.focusTest.current.focus();
    }

    render(){
        return (
            <div>
                <input type="password" value={this.state.password}
                onChange={this.handleChange}
                className={this.state.clicked ? (this.validated ? 'success' : 'failure') : ''}
                />
                <input type="text" ref={this.focusTest}/>
                <button onClick={this.handleButtonClick}>검증하기</button>
                <button onClick={this.handleFocus}>FOCUS</button>
            </div>
        )
    }
}

export default ValidationSample;
