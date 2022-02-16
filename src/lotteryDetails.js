import React, { Component } from 'react';
import AddToCart from './AddToCart';

export default class LotteryDetails extends Component {
  render() {
      var imgHeight={height:"200px"};
      var imageUrl='/images/pick-4-big.png';
      var productName = 'PICK - 4';
      var product = this.props.location.state.selectedProduct;
      console.log(this.props);
      console.log(product.productName);
      
    return <div>

             <div className='col-12' >
                <div STYLE="background-color: #f5fffa;" >
                <img className='card-img-top p-3' style={imgHeight} src={imageUrl} alt={product.productName} />
                </div>
                </div>
                <div className='card-body' >
                        <h2 className='card-title' > {product.productName} </h2>
                        <p className='card-text'> WIN UP TO : $500000</p>
                        <p className='card-text'> QUANTITY : 10 </p>
                    </div>
        <h1> {JSON.stringify(this.props.location.state.selectedProduct)}</h1>
    
       
    </div>;
  }
}