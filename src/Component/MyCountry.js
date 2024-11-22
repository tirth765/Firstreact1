import React, { Component } from 'react';

export default class MyCountry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            country: 'India',
            Population: '135 Billion'
        }
    }

    handleCountry = () => {
        this.setState({
            country: 'USA',
            Population: '30 Billion'
        })
    }

    render() {
        return (
            <>

            <h1>Class Base Component</h1>

            <div>
                MyCountry {this.state.country}
            </div>

            <h4>Population {this.state.Population} </h4>

            <button onClick={this.handleCountry}>Change Country</button>

            </>
        );
    }
}
