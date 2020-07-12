import React, { useState } from 'react';
import {Form, Button, Alert} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { login, saveUserInLocalStore } from '../actions';
import '../styles/SignIn.scss'
import { db } from '../firebase';

export default function SignIn(props) {
    const isLogged = useSelector(state => state.isLogged);
    const saveUserInStore = useSelector(state => state.saveUserInStore);
    const dispatch = useDispatch();

    const [user, setUser] = useState(null);
    const [errorUser, setErrorUser] = useState(false);
    const [errorPass, setErrorPass] = useState(false);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);


    //Get all users with that email
    const checkUser = (email) => {
        db.collection('Users').where("email", "==", email)
        .get()
        .then(snapsot => {
            const user = snapsot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }))
            setUser(user);
            //console.log(user)

            //check email and password
            if(user.length > 0){
                console.log('user finded');

                if(user[0].password === password){
                    console.log('good password')
                    console.log(user)
                    
                    dispatch(login())
                    dispatch(saveUserInLocalStore(user[0]))
                    window.location.hash = '#/Tasks';
                }else{
                    setErrorPass(true)
                    setTimeout(()=>{setErrorPass(false)}, 3000)
                }

            }else{
                console.log('user not finded');
                setErrorUser(true)
                setTimeout(()=>{setErrorUser(false)}, 3000)
            }
        })
        .catch(error => {
            console.log('error getting doc:', error)
        }); 
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log('try to sign in...', email, password);
        checkUser(email)
    }
    return (
        <div>
            {console.log(user)}
            {!isLogged ? (
                <Form className="signIn" onSubmit={handleSubmit}>
                    <h1 align="center">Sign In</h1>

                    { errorUser 
                        ?  
                        <Alert variant="danger">
                            User with that email not found!
                        </Alert> 
                        : ''
                    }
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="Enter email" 
                            onChange={ e =>{setEmail(e.target.value)}}/>
                    </Form.Group>


                    { errorPass 
                        ?  
                        <Alert variant="danger">
                           Wrong password!
                        </Alert> 
                        : ''
                    }

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Password" 
                            onChange={ e => {setPassword(e.target.value)}}/>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            ) : <h1 align="center">You already logged as {saveUserInStore.name} {saveUserInStore.lastname}</h1>}
        </div>
    )
}
