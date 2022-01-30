import React from 'react'
import DemoCarousel from './DemoCarousel';
import LotteryCart from './LotteryCart';
import Products from './Products';


class Test extends React.Component {
    constructor()
    {
        super();
        this.state={
            showAddToCart:false,
            selectedProduct:{},
            productsArr : [
                { productId: "P101", productName: "Iphone", description: "Apple Iphone 13 ", price: 115678, quantity: 12, imageUrl: "/images/iphone.jpg" },
                { productId: "P102", productName: "Samsung", description: "Samsung fold3 ", price: 155678, quantity: 5, imageUrl: "/images/samsung.jpg" },
                { productId: "P103", productName: "One plus", description: "One plus 9 ", price: 45678, quantity: 7, imageUrl: "/images/oneplus9.jpg" },
                { productId: "P104", productName: "Nokia", description: "Nokia 33", price: 5678, quantity: 2, imageUrl: "/images/nokia.jpg" },
                { productId: "P105", productName: "Realme", description: "Realme 33", price: 5678, quantity: 2, imageUrl: "/images/nokia.jpg" }
        ]}
    }
    
    addToCartEventHandler=(selectedProduct)=>{
        alert("Add To cart button clicked "+ selectedProduct.productName);
        //this.showAddToCart=true;
        //this.selectedProduct=selectedProduct;
        
        // call the render function again explicitly
        // call the render implicitly
        this.setState({showAddToCart:true,selectedProduct:selectedProduct},()=>{
            alert("Show Add To cart : "+this.state.showAddToCart); // expected output : false; actual value : true once setState completes
        
        });
        //1. modify the state
        //2. call render implicitly
        

    }
    onCancelEventHandler=()=>{
        alert("Cancel button clicked");
        this.setState({showAddToCart:false});// merge 
    }
    onConfirmEventHandler=(quantitySelected)=>{
        // reduce the quantity
        alert("Quantity selected of "+ this.state.selectedProduct.productName + " is "+ quantitySelected);
        this.setState({showAddToCart:false});
        this.setState((prevState)=>{
            var tempProductsArr=prevState.productsArr;
            var pos=tempProductsArr.findIndex(item => item.productId === this.state.selectedProduct.productId);
            tempProductsArr[pos].quantity-=quantitySelected;
            return ({productsArr:tempProductsArr})
        })
        
    }
    render() {
        
        var imgHeight={height:"200px"};
        var cardArr =this.state.productsArr.map(item => {
            return (
                <div className='col-4'>
                <div className='card bg-warning text-primary m-2'>
                    <img className='card-img-top p-2' style={imgHeight} src={item.imageUrl} alt={item.productName} />
                    <div className='card-body'>
                        <h2 className='card-title'> {item.productName}</h2>
                        <p className='card-text'> Price : Rs.{item.price}</p>
                        <p className='card-text'> Quantity : {item.quantity}</p>
                        <input type="button" value="Add To Cart" className='btn btn-primary' onClick={()=>{this.addToCartEventHandler(item)}} />
                       {/*  <input type="button" value="Add To Cart" className='btn btn-primary' onClick={this.addToCartEventHandler.bind(this,item)} /> */}
                    </div>
                </div>
                </div>
            );
        })
        return (
            <div>
              <DemoCarousel/>
              <Products/>
            </div>
        )
    }
}

export default Test;

// dynamic rendering -- dynamically create some content(cards)
// depending on size of{item -- create the corresponding number of cards 

// conditional rendering -- based on condition -- render some contents
// Logical and
// Terbary operator

/*
Lifecycle of the compoenent
constructor -- first special method which gets invoked implicitly- and called once only during the entire lifecycle
render -- special method which gets invoked implicitly
*/

/*class Example(){}

Example obj=new Example(1,2);
static constructor -- gets implicitly called
*/

/*
State of a component -- local to that particular component
Always an object
-- Hold the mutable data of the component
-- Initialise the state in the constructor

Update the state -- setState()

setState() -- update the state; call the render impliictly
-- async method
-- batched together and executed
-- setState(obj/function, callback function)
    -- 1st param -- mandatory
        -- object -- merge it with the existing state
        -- function -- will get the previous state, based on the previous state, 
        a new object will be returned which will be merged with the previous  and becomes the new state of the component 
    -- 2nd param -- optional
        -- implicitly invoked once the setState is complete

update emp set salary =1000 where empId=101; // replace
update emp set salary =salary + 1000 where empId=102 ;// based on the previous salary  add 1000 for 102




function myFunc()
{
    clg("hello");
    setInterval(()=>{
        clg("thank you");
    },1000)
    clg("bye")
}

myFunc();// hello bye thank you



*/

/*
Component loads :
1. Constructor executed: 
        this.state={showAddToCart:false,selectedProduct:{}}
2. render gets called
        virtual DOM will be created with the state : this.state={showAddToCart:false,selectedProduct:{}}


3. User clicks on samsung add to cart
-- addToCartEventHandler executed
    update my state
    after updation state : this.state={showAddToCart:true,selectedProduct:{samsung}}
    3b. render gets called 
        virtual DOM will be created with the state : this.state={showAddToCart:true,selectedProduct:{samsung}}
Since this is not the first time render has been called
diffing algo -- find the diff b/w 2 virtual DOM
*/

/*
Pass data from parent component(Products) to the child component(AddToCart)
-- using props

Send data from child to parent
*/
