import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom/dist';

function Header(){

    return(
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home"><img src="https://www.freeiconspng.com/thumbs/blogger-logo-icon-png/blogger-logo-icon-png-22.png" width={50} height={50}/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link > <Link to="/" style={{textDecoration:'none',color:'black'}}>Home</Link></Nav.Link>
              <Nav.Link > <Link to="/" style={{textDecoration:'none',color:'black'}}>AddBlog</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Header;