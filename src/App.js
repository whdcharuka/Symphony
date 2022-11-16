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
import Itemview from './components/pages/Itemview';
import Vehicalparts from './components/pages/Vehicalparts';
import ElectronicDevices from './components/pages/ElectronicDevices';
import HomeGarden from './components/pages/HomeGarden';
import Animals from './components/pages/Animals';
import Services from './components/pages/Services';
import HobbySport from './components/pages/HobbySport';
import Foods from './components/pages/Foods';
import Education from './components/pages/Education';
import Essentials from './components/pages/Essentials';
import FashionBeauty from './components/pages/FashionBeauty';
import Gifts from './components/pages/Gifts';
import Music from './components/pages/Music';
import Toys from './components/pages/Toys';

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
          <Route path='/Itemview' component={Itemview} />
          <Route path='/vehicalparts' component={Vehicalparts} />
          <Route path='/ElectronicDevices' component={ElectronicDevices} />
          <Route path='/Animals' component={Animals} />
          <Route path='/HobbySport' component={HobbySport} />
          <Route path='/HomeGarden' component={HomeGarden} />
          <Route path='/Foods' component={Foods} />
          <Route path='/Education' component={Education} />
          <Route path='/Services' component={Services} />
          <Route path='/Essentials' component={Essentials} />
          <Route path='/FashionBeauty' component={FashionBeauty} />
          <Route path='/Gifts' component={Gifts} />
          <Route path='/Music' component={Music} />
          <Route path='/Toys' component={Toys} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
