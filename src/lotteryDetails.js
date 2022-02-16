import React, { Component } from 'react';
import AddToCart from './AddToCart';

export default class LotteryDetails extends Component {
  render() {
      console.log(this.props);
      
    return <div>

        <h1> {JSON.stringify(this.props.location.state.selectedProduct)}</h1>
    
       
    </div>;
  }
}