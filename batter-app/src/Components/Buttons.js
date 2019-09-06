import React from 'react';
import Display from './Display';
class Buttons extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            strike: 0,
            ball: 0,
            foul: null,
            hit: null
        };
    }

    
    strike = () => {
        if (this.state.strike === 2) {
            this.setState({
                strike: 0
            })
        }else {

        this.setState({
            strike: this.state.strike += 1
        })
        console.log(this.state.strike);
    }
    }

    ball = () => {
        if (this.state.ball === 3) {
            this.setState({
                ball: 0
            })
        }else  {
        this.setState({
            ball: this.state.ball += 1
        })
        console.log(this.state.ball)
    }
    }

    foul = () => {
        if (this.state.strike === 0 || this.state.strike === null || this.state.strike === 1) {
            this.setState({
                strike: this.state.strike += 1
            })
            console.log(this.state.strike)
        } else if (this.state.strike === 2) {
            this.setState({
                strike: this.state.strike = 2
            })
            console.log(this.state.strike)
        }
    }


    hit = () => {
        this.setState({
            ball: this.state.ball = 0,
            strike: this.state.strike = 0
        })
        console.log(this.state.ball, this.state.strike)
    }


    render() {
        return([
            <Display ball={this.state.ball} strike={this.state.strike}/>,
            <button onClick={
                    () => this.strike()
                }
                className='strike-action' data-testid= 'strike'>Strike</button>,
            <button onClick={
                    () => this.ball()
                }
                className='ball-action'>Ball</button>,
            <button onClick={
                    () => this.foul()
                }
                className='foul-action'>Foul</button>,
            <button onClick={
                    () => this.hit()
                }
                className='hit-action'>Hit</button>
        ])
    }
}
export default Buttons;

export const abstractedStrike = (currentVal) => {
    if(currentVal === 2) {
        currentVal = 0;
    }
    return currentVal;
}


