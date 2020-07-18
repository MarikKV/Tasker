import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import Menu from "./componets/Menu";
import Landing from "./componets/Landing";
import Tasks from "./componets/Tasks";
import SignIn from "./componets/SignIn";
import SignUp from "./componets/SignUp";
import Home from "./componets/Home";
import SharedTasks from "./componets/SharedTasks";
import About from './componets/About';

function App() {
  return (
    <HashRouter basename='/'>
        <Route path='/' component={Menu}/>
        <Route exact path='/' component={Landing}/>
        <Route exact path='/Home' component={Home}/>
        <Route exact path='/Tasks' component={Tasks}/>
        <Route exact path='/SharedTasks' component={SharedTasks}/>
        <Route exact path='/SignIn' component={SignIn}/>
        <Route exact path='/SignUp' component={SignUp}/>
        <Route exact path='/About' component={About}/>
    </HashRouter>        
  );
}

export default App;
 