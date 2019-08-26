import React from 'react';
import { Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Users from './components/Users';
import SignUp from './components/SignUp';
import Login from './components/Login';


function App() {
  return (
    <div className="App">
      <Header />
      <p>VR Funding Platform</p>
      <p>some events....</p>
      <Route path="/" exact component={Home} />
      <Route path="/users" component={Users} />
      <Route exact path='/signup' render={(props) => <SignUp {...props} />} />
      <Route exact path='/login' render={(props) => <Login {...props} />} />
    </div>
  );
}

export default App;
