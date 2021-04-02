import React from 'react';
import {Navbar,Nav,Button,Container} from 'react-bootstrap'


 const Header=()=>{
    return(
        
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />   
            <Navbar.Collapse id="responsive-navbar-nav"> 
            <Nav className="mr-auto">
            <Nav.Link href={'/'}>Home</Nav.Link>
            <Nav.Link href={'/about-us'}>About us</Nav.Link>
            {/* <Nav.Link href={'/'}>Users</Nav.Link>
            <Nav.Link href={'/'}>Galary</Nav.Link>
            <Nav.Link href={'/'}>Todo</Nav.Link> */}
            </Nav>
            <Button href={'/add-new-post'} variant="warning">Add Post</Button>
            </Navbar.Collapse>
            </Container>
        </Navbar>

        

    )
}

export default Header;
