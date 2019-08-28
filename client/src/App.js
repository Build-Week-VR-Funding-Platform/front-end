import React from 'react';
import { Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Users from './components/Users';
import SignUp from './components/SignUp';
import Login from './components/Login';


//we have to set something up to Identify whose logged in and only take care of the ones applicable to that account

// if melanie hasnt already, we will route all trafic through the authenticator axios function, which will only render if its suppoed to.

// sets the response of the Login call to a localstorage value keyed as "token"

// Have melanie work with us to make sure were only seeing the right data for that account.

//secure private routes 
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
