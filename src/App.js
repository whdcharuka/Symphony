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
import Engine from './components/Vehicalparts/Engine';

import ElectronicDevices from './components/ElectronicDevices/ElectronicDevices';
import Mobile from './components/ElectronicDevices/Mobile';

import HomeGarden from './components/HomeGarden/HomeGarden';
import Furniture from './components/HomeGarden/Furniture';

import Animals from './components/Animals/Animals';
import Cat from './components/Animals/Cat';

import HobbySport from './components/HobbySport/HobbySport';
import Sport from './components/HobbySport/Sport';

import Foods from './components/Foods/Foods';
import Beverage from './components/Foods/Beverage';

import Education from './components/Education/Education';
import School from './components/Education/School';

import Essentials from './components/Essentials/Essentials';
import Helthcare from './components/Essentials/Helthcare';

import FashionBeauty from './components/FashionBeauty/FashionBeauty';
import Bag from './components/FashionBeauty/Bag';

import Gifts from './components/Gifts/Gifts';
import Christmas from './components/Gifts/Christmas';

import Music from './components/Music/Music';
import Violin from './components/Music/Violin';

import Toys from './components/Toys/Toys';
import TeddyBear from './components/Toys/TeddyBear';

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
          <Route path='/Engine' component={Engine} />

          <Route path='/ElectronicDevices' component={ElectronicDevices} />
          <Route path='/Mobile' component={Mobile} />
          
          <Route path='/Animals' component={Animals} />
          <Route path='/Cat' component={Cat} />
           
          <Route path='/HobbySport' component={HobbySport} />
          <Route path='/Sport' component={Sport} />

          <Route path='/HomeGarden' component={HomeGarden} />
          <Route path='/Furniture' component={Furniture} />

          <Route path='/Foods' component={Foods} />
          <Route path='/Beverage' component={Beverage} />
          
          <Route path='/Education' component={Education} />
          <Route path='/School' component={School} />
          
          <Route path='/Essentials' component={Essentials} />
          <Route path='/Helthcare' component={Helthcare} />
          
          <Route path='/FashionBeauty' component={FashionBeauty} />
          <Route path='/Bag' component={Bag} />

          <Route path='/Gifts' component={Gifts} />
          <Route path='/Christmas' component={Christmas} />
          
          <Route path='/Music' component={Music} />
          <Route path='/Violin' component={Violin} />

          <Route path='/Toys' component={Toys} />
          <Route path='/TeddyBear' component={TeddyBear} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
