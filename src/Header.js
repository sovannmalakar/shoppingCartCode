import React from 'react'
import wLogo from "./Walmart1_Logo.jpg"
//import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import NotificationBadge from 'react-notification-badge';

// create a class components

class Header extends React.Component {
    //logic 
    render() {
        // return the virtual DOM
        return (

            <div className='container-fluid text-white header_bg' style={{fontFamily: "Bogle,Helvetica Neue,Helvetica,Arial,sans-serif" }} >
                <div className='row align-items-center '>
                    <img src={wLogo} alt="Walmart Logo" className='col-3 img-fluid' style={{height: "150px"}}/>

                    <h1 className='col-8 text-warning'></h1>
                </div>
                <ShoppingCartIcon style={{float:"right", fontSize:"2.5rem"}} />
                <NotificationBadge count={9} />
            </div>

        );
    }
}

export default Header;