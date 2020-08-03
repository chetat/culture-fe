
import React from 'react';
import { Navbar, Nav } from "react-bootstrap";


const Navi = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home">Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    <Nav.Link href="/#">Home</Nav.Link>
                    <Nav.Link href="/Movies">Movies Archive</Nav.Link>
                    <Nav.Link href="/Music">Music Archive</Nav.Link>
                    <Nav.Link href="/Users">Users Archive</Nav.Link>
                </Nav>
            
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navi;

