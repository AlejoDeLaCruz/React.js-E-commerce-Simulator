import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown,  DropdownToggle, DropdownMenu } from "reactstrap";
import CartWidget from './CartWidget'
import { useState } from "react";
import {Link, NavLink} from "react-router-dom"

const NavBar = () =>{

    const [dropdown, setDropdown] =useState(false)
    const abrirCerrarDropdown = () =>{
        setDropdown(!dropdown)
    }

    return(
        <>
            <header id="main-header" className="header">
            <NavLink className="h1" to="/">GRIS</NavLink>
            <nav> 
                <NavLink to="/"className="material-icons" id="home">home</NavLink>
                <CartWidget/>
            </nav>
            <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown} className="dorpdown">
                    <DropdownToggle className="material-icons" color="black">search</DropdownToggle>
                    <DropdownMenu>
                            <Link to="/Guitarras" className="categoria">Guitarras</Link>
                            <Link to="/Bajos" className="categoria">Bajos </Link>
                            <Link to="/Amplificadores" className="categoria">Amplificadores</Link>
                    </DropdownMenu>
            </Dropdown>
            </header>
        </>
    )
}

export default NavBar