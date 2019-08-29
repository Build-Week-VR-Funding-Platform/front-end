import React from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from "./utils/privateRoute";

import Header from './components/Header';
import Home from './components/Home';
import Users from './components/Users';
import SignUp from './components/SignUp';
import Login from './components/Login';

import ProjectForm from './components/ProjectForm';
import Founders from './components/Founders';

//secure private routes 
function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/" exact component={Home} />
      <PrivateRoute path="/users" component={Users} />
      <Route path="/new-project" component={ProjectForm} />
      <Route path="/founders" component={Founders} />
      <Route exact path='/signup' render={(props) => <SignUp {...props} />} />
      <Route exact path='/login' render={(props) => <Login {...props} />} />

    </div>
  );
}

export default App;
