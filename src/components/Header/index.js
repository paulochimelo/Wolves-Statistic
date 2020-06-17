import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Logo from '../../assets/wolves.png'
//<img src={Logo} className="image"/>

class Header extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark navbar-expand-lg navbar-default fixed-top" variant="dark">
                <Navbar.Brand className="logoH">
                    <Link to="/">
                        <img
                            src={Logo}
                            width="70"
                            height="70"
                            className="d-inline-block align-top"
                        />
                        <Nav.Link className="titL">Wolves Statistic</Nav.Link>
                    </Link>
                </Navbar.Brand>
                
                <Nav className="mr-auto" className="links">
                    <Nav.Link className="linkP">
                        <Link to="/" className="back-link">Home</Link>
                    </Nav.Link>
                    <Nav.Link className="linkP">Sobre</Nav.Link>
                    <Nav.Link className="linkP">
                        Contato
                        </Nav.Link>
                    <Nav.Link className="linkP">
                        <Link to="calculos" className="back-link">Cálculos</Link>
                    </Nav.Link>
                </Nav>
                <Form inline>
                <Link to="/login">
                    <Button variant="outline-info" className="btnH">Login</Button>
                    </Link>
                </Form>
            </Navbar>
        </div>
        );
    }
}

export default Header;