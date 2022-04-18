import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleLogOut = () => {
        signOut(auth);
    }
    return (
        <div className='top-nav'>
            <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark border">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <h4 className='fw-bolder'><span className='text-info'>Health</span>Coach</h4>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto me-auto fw-bolder">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/blog">Blogs</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link href="#services">Services</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user ?
                                    <Button variant="outline-info p-0"><Nav.Link className=' text-decoration-none fw-bolder' onClick={handleLogOut}>Log-out</Nav.Link></Button>
                                    :
                                    <Button variant="outline-info p-0"><Nav.Link className='fw-bolder' as={Link} to="/login">
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