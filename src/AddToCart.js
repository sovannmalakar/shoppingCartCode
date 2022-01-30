import React from 'react'
import PropTypes from "prop-types"

class AddToCart extends React.Component {
    constructor(props) {
        super(props);
        this.state = { quantitySelected: 1 }
    }
    decQuantityEventHandler = () => {
        if (this.state.quantitySelected > 1) {
            this.setState(
                (currentState) => {
                    return (
                        { quantitySelected: currentState.quantitySelected - 1 }
                    )
                }
            );
        }
    }
    incQuantityEventHandler = () => {
        //this.setState({quantitySelected:this.state.quantitySelected+1});
        if (this.state.quantitySelected < this.props.selectedProd.quantity) {
            this.setState(
                (currentState) => {
                    return (
                        { quantitySelected: currentState.quantitySelected + 1 }
                    )
                }
            );
        }
    }
    cancelEventHandler=()=>{
        // pass some control to the parent component
        // events and event emitters
        this.props.onCancel();// triggering an event
    }
    confirmCartEventHandler=()=>{
        // navigate to the payments page
        
        //reduce the quantity in hand in products Component
        // pass the data (item + quantitySelected)to the parentProducts component
        var cartObj={...this.props.selectedProd,quantitySelected:this.state.quantitySelected}
        this.props.onConfirm(this.state.quantitySelected);// triggering an event and embedding the data in the event
        this.props.history.push("/payments",{cartObj:cartObj});
    }
    render() {

        console.log("Add To Cart Props ", this.props);// this.props.selectedProd
        var item = { ...this.props.selectedProd };// create a copy
        //var item =this.props.selectedProd;// create a reference
        return (
            <div>
                <h1> Add To Cart Component of {this.props.companyName}</h1>
                <div className='container'>
                    <div className='row'>
                        <div className='col-4 offset-4'>
                            <div className='card bg-warning text-primary m-2'>
                                <img className='card-img-top p-2' src={item.imageUrl} alt={item.productName} />
                                <div className='card-body'>
                                    <h2 className='card-title'> {item.productName}</h2>
                                    <p className='card-text'> Price : Rs.{item.price}</p>
                                    <p className='card-text'> Quantity : {item.quantity}</p>
                                    <input type="button" value="-" 
                                        className='btn btn-primary' 
                                        onClick={this.decQuantityEventHandler} 
                                        disabled={this.state.quantitySelected <=1}
                                    />
                                    {this.state.quantitySelected}
                                    <input type="button" value="+" 
                                        className='btn btn-primary' 
                                        onClick={this.incQuantityEventHandler} 
                                        disabled={this.state.quantitySelected >= this.props.selectedProd.quantity}
                                        />
                                    <br/>
                                    <input type="button" value="Confirm" className="btn btn-primary m-2" onClick={this.confirmCartEventHandler}/>
                                    <input type="button" value="Cancel" className="btn btn-danger m-2" onClick={this.cancelEventHandler}/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
AddToCart.defaultProps=
{
    selectedProd:{},
    companyName:"Spring People", 
    onCancel:()=>{console.log("Oncancel clicked");
    },
    onConfirm:()=>{console.log("Onconfirm clicked");},
    history:{}
}

export default AddToCart

/* Props 
-- Immutable data of that component
-- Get the data sent by the parent
*/

/*
var obj={empId:101,empName:"sara"}
var obj2=obj;// reference
obj2.empName="tara";
clg(obj);//{empId:101,empName:"tara"}

How to shallow copy an object
In es6:
spread operator
var obj3={...obj}
obj3.empName="danny";
clg(obj);//{empId:101,empName:"tara"}

var obj4={...obj,salary:1000};
clg(obj4);//{empId:101,empName:"tara",salary:1000}
clg(obj);//{empId:101,empName:"tara"}

var obj5={...obj,salary:1000,empId:999};
clg(obj5);//{empId:999,empName:"tara",salary:1000}
clg(obj);//{empId:101,empName:"tara"}

var obj6={empId:999,...obj,salary:1000};
clg(obj6);//{empId:101,empName:"tara",salary:1000}
clg(obj);//{empId:101,empName:"tara"}

var arr1=[10,20,30]
var arr1Copy=[5,...arr1,40];//[5,10,20,30,40]
var arr2=[...arr1];//[10,20,30]
var arr3=[...arr1Copy,...arr1];
clg(arr3);//[5,10,20,30,40,10,20,30]

i=10;
i=20;j=100
clg(i);//20
*/