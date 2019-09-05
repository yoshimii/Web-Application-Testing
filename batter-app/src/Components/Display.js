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
            <p>Balls:{this.state.ball}</p>,
            <p>Strike:{this.state.strike}</p>,
           
        ])
    }
}


export default Display;