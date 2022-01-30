import React, { Component } from 'react';
import AddToCart from './AddToCart';

export default class Payments extends Component {
  render() {
      console.log(this.props);
      
    return <div>
        <h1> Payments Component</h1>
        <h1> {JSON.stringify(this.props.location.state.cartObj)}</h1>
        <AddToCart
        companyName={"MyCompany"} 
        history={this.props.history}
        ></AddToCart>
    </div>;
  }
}

// Functional component
/* React version < 16.8 functional component 
    -- cannot have the state -- display static data -- presentational stuff
    -- no lifecycle methods
    -- "this" keyword in not there

    In version 16.8 -- Introduced hooks -- only on functional components
    hooks -- have state for a FC, Implememnt various lifecycle methods
*/
