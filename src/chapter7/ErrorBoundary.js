import React, { Component } from 'react';

class ErrorBoundary extends Component {

    state = {
        error: false,
        test: false
    };

    componentDidCatch(error, info){
        console.log('componentDidCatch');
        
        console.log(this.state.error);
        console.log(this.state.test);
        this.setState({
            error: true,
            test: true
        });

        console.log({error, info});
        console.log(this.state.test);
        console.log(this.state.error);
        
    }


    render(){ 

        console.log('looooog render');
        
        console.log(this.state.error);

        // if(this.state.error) return this.props.children;
        // return <div>에러발생</div>;
        if(this.state.error) {
            console.log('에러발생!~');
            
            return (
            <div>
                <span>에러발생</span>
            </div>
            );
        }else {
            return (this.props.children);
        }
        
    }
}

export default ErrorBoundary;

