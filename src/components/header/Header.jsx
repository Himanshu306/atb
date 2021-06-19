import React from  'react';
import {Navbar} from 'bootstrap-4-react';
import Logo from "../../assets/img/logo.png";

export class Header extends React.Component{
    render(){
        return(
            <>
                <Navbar bg="transparent" variant="dark">
                    <Navbar.Brand href="#home">
                    <img
                        alt="logo"
                        src={Logo}
                        width="180"
                        height="auto"
                        className="d-inline-block align-top"
                    />
                    {/* <h1 style={{color : 'white'}}>All Things Branding</h1> */}
                    </Navbar.Brand>
                </Navbar>
            </>
        );
    }
}