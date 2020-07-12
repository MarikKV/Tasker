import React, { useState } from 'react';
import {Form, Button, Row, Col, Alert} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getCollectionWhere, addNewUserToDB } from '../customFunctions';
import '../styles/SignUp.scss';

export default function SignUp() {
    const isLogged = useSelector(state => state.isLogged);

    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState(null)
    const [password2, setPassword2] = useState(null)

    const [emailUsed, setEmailUsed] = useState(true)
    const [passwordMatch, setPasswordMatch] = useState(true)

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(`Sign Up User - ${name} ${lastName} with email ${email} and pasword ${password}`);
        if(checkPasswords()){
            console.log('pass much')
           
        }else{
            console.log('pass not mucth')
            setPasswordMatch(false)
            setTimeout(()=>{setPasswordMatch(true)}, 3500)
        }
        checkEmail();

    }

    const checkPasswords = () => {
        if(password === password2 && password !== null && password2 !== null) return true
        return false
    }
    const checkEmail = () => {
        const userWithThatEmail = getCollectionWhere('Users', 'email', '==', email);
        userWithThatEmail
        .then(
            res => {
                if(res.length > 0){
                    setEmailUsed(false)
                    setTimeout(()=>{setEmailUsed(true)}, 3500)
                   
                } else{
                    const passGood = checkPasswords();
                    if(passGood){
                        console.log('registring new user')
                        addNewUserToDB(name, lastName, email, password);
                        window.location.hash = '#/SignIn'
                    }
                }
            }
        )
        .catch(
            rej => console.log(rej)
        )
    }
    return (
        <div>
            {!isLogged ? (
                <Form className="signUp" onSubmit={handleSubmit}>
                    <h1 align="center">Sign Up</h1>
                    <br/>
                    <Row>
                        <Col>
                            <Form.Label>First name</Form.Label>
                            <Form.Control 
                                placeholder="First name"
                                type="text"
                                onChange={ e =>{setName(e.target.value)}} />
                        </Col>
                        <Col>
                            <Form.Label>Last name</Form.Label>
                            <Form.Control 
                                placeholder="Last name" 
                                type="text"
                                onChange={ e =>{setLastName(e.target.value)}}/>
                        </Col>
                    </Row>
                    <br/>
                    { !emailUsed 
                        ?  
                        <Alert variant="danger">
                            User with this email already registred!
                        </Alert> 
                        : ''
                    }
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                            type="email"
                            placeholder="Enter email"
                            onChange={ e =>{setEmail(e.target.value)}}
                         />
                    </Form.Group>

                    { !passwordMatch 
                        ?  
                        <Alert variant="danger">
                            Password didn't mutch!
                        </Alert> 
                        : ''
                    }
                    <Row>
                        <Col>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control 
                                    type="password" 
                                    placeholder="Password"
                                    onChange={ e =>{setPassword(e.target.value)}} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formBasicPassword2">
                                <Form.Label>Submit password</Form.Label>
                                <Form.Control 
                                    type="password" 
                                    placeholder="Type a password again" 
                                    onChange={ e =>{setPassword2(e.target.value)}}/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            ) : <h1>You already logged in</h1>}
            
        </div>
    )
}
