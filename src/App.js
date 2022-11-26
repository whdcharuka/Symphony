import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './App.css';
import Home from './components/pages/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Reset from './components/pages/Reset';

import Services from './components/pages/Services/Services';
import Contacts from './components/pages/Contact/Contacts';
import About from './components/pages/About/About';

import Vehicalparts from './components/Vehicalparts/Vehicalparts';
import Instock from './components/Vehicalparts/Instock';
import Outstock from './components/Vehicalparts/Outstock';
import Engine from './components/Vehicalparts/Engine';
import All from './components/Vehicalparts/All';

import ElectronicDevices from './components/ElectronicDevices/ElectronicDevices';

import HomeGarden from './components/HomeGarden/HomeGarden';

import Animals from './components/Animals/Animals';

import HobbySport from './components/HobbySport/HobbySport';

import Foods from './components/Foods/Foods';

import Education from './components/Education/Education';

import Essentials from './components/Essentials/Essentials';

import FashionBeauty from './components/FashionBeauty/FashionBeauty';

import Gifts from './components/Gifts/Gifts';

import Music from './components/Music/Music';

import Toys from './components/Toys/Toys';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/reset' component={Reset} />
          
          <Route path='/Services' component={Services} />
          <Route path='/Contacts' component={Contacts} />
          <Route path='/About' component={About} />
          
          <Route path='/vehicalparts' component={Vehicalparts} />
          <Route path='/Instock' component={Instock} />
          <Route path='/Outstock' component={Outstock} />
          <Route path='/Engine' component={Engine} />
          <Route path='/All' component={All} />

          <Route path='/ElectronicDevices' component={ElectronicDevices} />
          
          <Route path='/Animals' component={Animals} />
           
          <Route path='/HobbySport' component={HobbySport} />
          
          <Route path='/HomeGarden' component={HomeGarden} />
          
          <Route path='/Foods' component={Foods} />
          
          <Route path='/Education' component={Education} />
          
          <Route path='/Essentials' component={Essentials} />
          
          <Route path='/FashionBeauty' component={FashionBeauty} />
          
          <Route path='/Gifts' component={Gifts} />
          
          <Route path='/Music' component={Music} />
          
          <Route path='/Toys' component={Toys} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
