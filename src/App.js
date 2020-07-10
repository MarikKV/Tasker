import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Menu from "./componets/Menu";
import Landing from "./componets/Landing";
import Tasks from "./componets/Tasks";
import SignIn from "./componets/SignIn";
import SignUp from "./componets/SignUp";

function App() {
  return (
    <BrowserRouter>
        <Route path='/' component={Menu}/>
        <Route exact path='/' component={Landing}/>
        <Route exact path='/Tasks' component={Tasks}/>
        <Route exact path='/SignIn' component={SignIn}/>
        <Route exact path='/SignUp' component={SignUp}/>
    </BrowserRouter>        
  );
}

export default App;
