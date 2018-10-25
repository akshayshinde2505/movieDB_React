import React, { Component } from "react";

// const style = {
//     width: '350px',
//     marginLeft: '20px',
//     marginTop: '20px',
//     display: 'inline-block'
//   };

class ErrorBoundary extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
        }
    }
    render() {
        if(this.state.hasError) {
        return(
            <div>
                {console.log("In ERROR Boundary")}
                <h2>Sorry Something went wrong!!!</h2>
            </div>
        );
        }
        return this.props.children;
    }
};

export default ErrorBoundary;