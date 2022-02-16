import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Menu.css"

export default class Menu extends Component {
  render() {
    return (
    <div className='sovan'>
        <ul>
            <li>
                <Link to="/test" >Home</Link>
            </li>
            <li>
               <Link to="/orders" >Orders</Link>
             </li>
            <li>
               <Link to="/payments" >Payments</Link>
            </li>
            <li>
               <Link to="/aboutus" >About Us</Link>
            </li>
        </ul>

    </div>);
  }
}
