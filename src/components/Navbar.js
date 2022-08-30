import { Navbar, Container, Nav } from 'react-bootstrap';
import React from 'react';
import logo from "../Assets/img/logo.png";
import { Link } from "react-router-dom";

function CustomNavbar() {

    return (
        <Navbar className="CustomNavbar" bg="light" expand="xl">
            <Container>
                <Link to="/">
                    <img className='mainLogo' src={logo} alt="" />
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className='navList'>
                    <Nav className="mr-auto">
                        <Navbar.Text>
                            <Link to="/dashboard"><span className='px-2' >Dashboard</span></Link>
                        </Navbar.Text>
                        <Navbar.Text>
                            <Link to="/order"><span className='px-2' >Order</span></Link>
                        </Navbar.Text>
                        <Navbar.Text>
                            <Link to="/product"><span className='px-2' >Products</span></Link>
                        </Navbar.Text>
                        <Navbar.Text>
                            <Link to="/"><span className='px-2' >Categories</span></Link>
                        </Navbar.Text>
                        <Navbar.Text>
                            <Link to="/"><span className='px-2' >Delivery Boys</span></Link>
                        </Navbar.Text>
                        <Navbar.Text>
                            <Link to="/"><span className='px-2' >Delivery Collactables</span></Link>
                        </Navbar.Text>
                        <Navbar.Text>
                            <Link to="/"><span className='px-2' >Offers</span></Link>
                        </Navbar.Text>
                        <Navbar.Text>
                            <Link to="/"><span className='px-2' >User Profiles</span></Link>
                        </Navbar.Text>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CustomNavbar;
