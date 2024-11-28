import React, { Component } from 'react';

class Timer extends Component {

    //1.Initialize state value.
    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
        };
    }

    tick = () => {
        this.setState({
            time: new Date()
        })
    }

    //3.It is used to sent data requst to the server. It is called after Mounting.
    componentDidMount = () => {
        setInterval(this.tick, 1000)
    }

    //4.It is use to do some work when state or props value changed.
    componentDidUpdate = () => {
        console.log('component updated')
    }

    //5. It is used to realese resources when we move to another component.
    componentWillUnmount = () => {
        clearInterval(this.tick)
    }
   
    //2.Display Component. It is called after rendering.
    render() {
        return (
            <h1>
                {this.state.time.toLocaleTimeString()}
            </h1>
        );
    }
}

export default Timer;