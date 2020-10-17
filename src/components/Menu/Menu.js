import React from 'react';
import {Button, Nav, Navbar } from 'react-bootstrap';
import {
    Link
  } from "react-router-dom";
import logo from '../../images/logo/logo.png';
import './Menu.css';
const Menu = () => {
    return (
            <Navbar expand="md">
                <Navbar.Brand><Link to="">
                    <img src={logo}/>
                </Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav><Link to="">Home</Link></Nav>
                        <Nav><Link to="">Destination</Link></Nav>
                        <Nav><Link to="">Events</Link></Nav>
                        <Nav><Link to="">Blog</Link></Nav>
                        <Nav><Link to="/"><Button variant="primary">Register</Button></Link></Nav>
                        <Nav><Link to="/admin"><Button variant="dark">Admin</Button></Link></Nav>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    );
};

export default Menu;