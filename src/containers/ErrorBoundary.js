import React, { Component } from 'react';

// catches error inside those 
class ErrorBoundary extends Component {
    constructor(){
        super();
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(){
        this.setState({hasError:true});
    }

    render(){
        return this.state.hasError ?
        <h1>The CardList Component failed to load</h1> :
        this.props.children;
    }

}

export default ErrorBoundary;