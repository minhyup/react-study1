import React, { Component } from 'react';

class EventPractice extends Component {

    constructor(props){
        super(props);

        // data define
        this.state = {
            test: '1',
            message : ''
        }

        // method define
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);

    }


    handleChange(e){
        this.setState({
            message: e.target.value
        })
    }


    handleClick(e){
        alert(this.state.message + '='+ this.state.test);
        this.setState({
            message: '',
            test: 'test!!~~'
        })        
    }


    // state = {
    //     message : ''
    // }

    render () {
        return (
            <div>
                <h1>이벤트 연습={this.state.test}</h1>
                <input type="text" name="message" placeholder="아무거나 입력하세요."
                value={this.state.message}
                onChange={this.handleChange} />
                <button onClick={this.handleClick}>확인</button>
            </div>
        )
    }
}
export default EventPractice;