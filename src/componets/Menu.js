import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import '../styles/Menu.scss'
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../actions';

export default function Menu() {
    const isLogged = useSelector(state => state.isLogged);
    const dispatch = useDispatch();
    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Tasker</Navbar.Brand>
            
            {isLogged 
                ? 
                <>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="#/Tasks">Tasks</Nav.Link>
                    </Nav>
                    <Nav.Link href="" onClick={() => dispatch(login())} className='navLink'>Log Out</Nav.Link>
                </>
                : 
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link href="#/SignIn" className='navLink'>Sign In</Nav.Link>
                        <Nav.Link href="#/SignUp" className='navLink'>Sign Up</Nav.Link>
                    </Navbar.Collapse>
            }
        </Navbar>
    )
}
