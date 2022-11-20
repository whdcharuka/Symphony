import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Language from './components/pages/Language';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/Login';
import Reset from './components/pages/Reset';

import Services from './components/pages/Services';
import Resources from './components/pages/Resources';
import Contacts from './components/pages/Contacts';
import About from './components/pages/About';

import Itemview from './components/pages/Itemview';

import Vehicalparts from './components/Vehicalparts/Vehicalparts';
import Vp1 from './components/Vehicalparts/Vp1';
import Vp2 from './components/Vehicalparts/Vp2';
import Vp3 from './components/Vehicalparts/Vp3';
import Vp4 from './components/Vehicalparts/Vp4';
import Vp5 from './components/Vehicalparts/Vp5';
import Vp6 from './components/Vehicalparts/Vp6';
import Vp7 from './components/Vehicalparts/Vp7';
import Vp8 from './components/Vehicalparts/Vp8';
import Vp9 from './components/Vehicalparts/Vp9';
import Vp10 from './components/Vehicalparts/Vp10';

import ElectronicDevices from './components/pages/ElectronicDevices';
import El from './components/pages/El';

import HomeGarden from './components/pages/HomeGarden';
import Hg from './components/pages/Hg';

import Animals from './components/Animals/Animals';
import An1 from './components/Animals/An1';
import An2 from './components/Animals/An2';
import An3 from './components/Animals/An3';
import An4 from './components/Animals/An4';
import An5 from './components/Animals/An5';
import An6 from './components/Animals/An6';
import An7 from './components/Animals/An7';
import An8 from './components/Animals/An8';
import An9 from './components/Animals/An9';
import An10 from './components/Animals/An10';

import HobbySport from './components/pages/HobbySport';
import Hs from './components/pages/Hs';

import Foods from './components/pages/Foods';
import Fd from './components/pages/Fd';

import Education from './components/pages/Education';
import Ed from './components/pages/Ed';

import Essentials from './components/pages/Essentials';
import Es from './components/pages/Es';

import FashionBeauty from './components/pages/FashionBeauty';
import Fb from './components/pages/Fb';

import Gifts from './components/pages/Gifts';
import Gi from './components/pages/Gi';

import Music from './components/pages/Music';
import Mu from './components/pages/Mu';

import Toys from './components/pages/Toys';
import Ty from './components/pages/Ty';

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
          
          <Route path='/Services' component={Services} />
          <Route path='/Resources' component={Resources} />
          <Route path='/Contacts' component={Contacts} />
          <Route path='/About' component={About} />
          
          <Route path='/Itemview' component={Itemview} />
          
          <Route path='/vehicalparts' component={Vehicalparts} />
          <Route path='/Vp1' component={Vp1} />
          <Route path='/Vp2' component={Vp2} />
          <Route path='/Vp3' component={Vp3} />
          <Route path='/Vp4' component={Vp4} />
          <Route path='/Vp5' component={Vp5} />
          <Route path='/Vp6' component={Vp6} />
          <Route path='/Vp7' component={Vp7} />
          <Route path='/Vp8' component={Vp8} />
          <Route path='/Vp9' component={Vp9} />
          <Route path='/Vp10' component={Vp10} />

          <Route path='/ElectronicDevices' component={ElectronicDevices} />
          <Route path='/El' component={El} />
          
          <Route path='/Animals' component={Animals} />
          <Route path='/An1' component={An1} />
          <Route path='/An2' component={An2} />
          <Route path='/An3' component={An3} />
          <Route path='/An4' component={An4} />
          <Route path='/An5' component={An5} />
          <Route path='/An6' component={An6} />
          <Route path='/An7' component={An7} />
          <Route path='/An8' component={An8} />
          <Route path='/An9' component={An9} />
          <Route path='/An10' component={An10} />
          
          <Route path='/HobbySport' component={HobbySport} />
          <Route path='/Hs' component={Hs} />
          
          <Route path='/HomeGarden' component={HomeGarden} />
          <Route path='/Hg' component={Hg} />
          
          <Route path='/Foods' component={Foods} />
          <Route path='/Fd' component={Fd} />
          
          <Route path='/Education' component={Education} />
          <Route path='/Ed' component={Ed} />
          
          <Route path='/Essentials' component={Essentials} />
          <Route path='/Es' component={Es} />
          
          <Route path='/FashionBeauty' component={FashionBeauty} />
          <Route path='/Fb' component={Fb} />
          
          <Route path='/Gifts' component={Gifts} />
          <Route path='/Gi' component={Gi} />
          
          <Route path='/Music' component={Music} />
          <Route path='/Mu' component={Mu} />
          
          <Route path='/Toys' component={Toys} />
          <Route path='/Ty' component={Ty} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
