import React from "react";
import "./header.css"
import { Navbar, NavItem } from "reactstrap";

export default function Header({setAdminClick, setPasswordIs }){


    return(
        <Navbar className="nav justify-content-around"
        color="dark"
        dark>
            <NavItem><span onClick={() => {setAdminClick(false);setPasswordIs(false)}} >Game</span></NavItem>
            <NavItem><span onClick={() => setAdminClick(true)} >Admin panel</span></NavItem>   
        </Navbar>
    )
}