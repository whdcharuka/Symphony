import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Language from './components/pages/Language';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/Login';
import Reset from './components/pages/Reset';
import Contacts from './components/pages/Contacts';
import Vehicalparts from './components/pages/Vehicalparts';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Language' component={Language} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/login' component={Login} />
          <Route path='/reset' component={Reset} />
          <Route path='/contacts' component={Contacts} />
          <Route path='/vehicalparts' component={Vehicalparts} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
