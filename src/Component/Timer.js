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
   
    //2.Display Component.
    render() {
        return (
            <div>
                {this.state.time.toLocaleTimeString()}
            </div>
        );
    }
}

export default Timer;