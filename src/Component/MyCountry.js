// import React, {Component} from 'react';
// import MyCity from "./MyCity";

// export default class MyCountry extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       name: true,
//       Population: true,
//     };
//   }

//   HandleCounty = () => {
//     this.setState((prevState) => ({
//       name: !prevState.name,
//       Population: !prevState.Population,
//     }));
//   };

//   render() {
//     return (
//       <>
//         <div>
//           <h2>Class Based Component</h2>
//           <div>MyCountry {this.state.name ? "India" : "USA"}</div><br/>
//           <div>
//             Population {this.state.Population ? "100 Billion" : "10 Billion"}
//           </div>
//           <br />
//           <button onClick={this.HandleCounty}>Change Country</button>
//         </div>

//         <MyCity c = {this.state.name} />
//       </>
//     );
//   }
// }

import React, { Component } from 'react';
import MyCity from './MyCity';

export default class MyCountry extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name : 'India',
            Population : '142 Billion'
        }
    }

    HandleCounty = () => {
        this.setState({
             name : 'USA',
            Population : '14 Billion'
        })
        if(this.state.name === 'India'){
            this.setState({
                     name : 'USA',
                    Population : '14 Billion'
                })
        }else{
            this.setState({
                name : 'India',
                Population : '142 Billion'
            })
        }
    }

    render() {
            return (
              <>

                <div>
                
                  <h2>Class Based Component</h2>
                  <div>MYCountry</div>

                  <h4>MyCountry : {this.state.name}</h4> 

                  <h4>
                    Population : {this.state.Population}
                  </h4>

                  <br />

                  <button onClick={this.HandleCounty}>Change Country</button>

                </div>
        
                <MyCity c = {this.state.name}  p = {this.state.Population} />
              </>
            );
}
}