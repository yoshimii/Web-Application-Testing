import React from 'react';

class Display extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ball:props.ball,
            strike:props.strike
        }
    }

    render(){
        return ([
            <p>Balls: {this.props.ball}</p>,
            <p>Strike: {this.props.strike}</p>,
           
        ])
    }
}


export default Display;