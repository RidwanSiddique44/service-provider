import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleLogOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="secondary" sticky='top' variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        NavBar
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/checkout">Checkout</Nav.Link>
                            <Nav.Link as={Link} to="/blog">Blogs</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user ?
                                    <Button variant="outline-primary p-0"><Nav.Link className='text-white text-decoration-none' onClick={handleLogOut}>Log-out</Nav.Link></Button>
                                    :
                                    <Button variant="outline-primary"><Nav.Link as={Link} to="login">
                                        Log-in
                                    </Nav.Link></Button>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;