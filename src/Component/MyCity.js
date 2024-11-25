import React, { Component } from 'react';

class MyCity extends Component {
    render() {
        return (
            <>
            <br />
            <div>
               MyCity
            </div>
        
            <h4> My City: {this.props.c === 'India' ? 'Surat' : 'New York'} </h4>
         
            <h4> Population: {this.props.p === '142 Billion' ? '50 Million' : '10 Million'} </h4>
            </>
        );
    }
}

export default MyCity;