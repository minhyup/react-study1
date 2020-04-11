import React, { Component } from 'react';

class Scrollbox extends Component {


    scrollToBotton = () => {

        console.log('hello');
        

        // console.log('box????', this.box);
        
        const { scrollHeight, clientHeight } = this.box;

        this.box.scrollTop = scrollHeight - clientHeight;


    }

    handlerCheck = (e) => {

        console.log('dsfaadsfasdf', this.box, ', height::'+this.box.scrollHeight);


        const { scrollHeight, clientHeight } = this.box;

        console.log('this.box.scrollTop::', (scrollHeight - clientHeight));
        
        
    }


    render(){

        console.log('render::', this.scrollBox);

        
        const style = {
            border: '1px solid black',
            height: '300px',
            width: '300px',
            overflow: 'auto',
            position: 'relative'
        }

        const innerStyle = {
            width: '100%',
            height: '650px',
            background: 'linear-gradient(white, black)'
        }

        return (

            <div style={style} ref={(ref) => {
                this.box=ref
            }}>
                <div style={innerStyle}></div>
                <button onClick={this.handlerCheck}>확인</button>
            </div>

        );
    }
}


export default Scrollbox;