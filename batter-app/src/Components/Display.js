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
            <p data-testid='ball-count'>Balls: {this.props.ball}</p>,
            <p data-testid='strike-count'>Strikes:{this.props.strike}</p>,
           
        ])
    }
}


export default Display;