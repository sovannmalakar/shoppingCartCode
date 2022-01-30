import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Payments from './Payments';
import Products from './Products';
import Orders from './Orders';
import AboutUs from './AboutUs';
import LotteryCart from './LotteryCart';
import Test   from "./Test";

export default class Home extends Component {
  render() {
    return (
    <div>
        <Switch>
            <Redirect path="/" to="/products" exact></Redirect>
            <Route path="/products" component={Products}></Route>
            <Route path="/payments" component={Payments}></Route>
            <Route path="/orders" component={Orders}></Route>
            <Route path="/aboutus" component={AboutUs}></Route>
            <Route path="/lottery" component={LotteryCart}></Route>
            <Route path="/test" component={Test}></Route>
            <Route path ="**" 
            render={
                ()=>
                {
                    return (<div><h1> Page Not Found</h1></div>)
                }
                }>
            </Route>
        </Switch>
    </div>
    );
  }
}
