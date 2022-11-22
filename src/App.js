import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Reset from './components/pages/Reset';

import Services from './components/pages/Services/Services';
import Contacts from './components/pages/Contact/Contacts';
import About from './components/pages/About/About';

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

import ElectronicDevices from './components/ElectronicDevices/ElectronicDevices';
import El1 from './components/ElectronicDevices/El1';
import El2 from './components/ElectronicDevices/El2';
import El3 from './components/ElectronicDevices/El3';
import El4 from './components/ElectronicDevices/El4';
import El5 from './components/ElectronicDevices/El5';
import El6 from './components/ElectronicDevices/El6';
import El7 from './components/ElectronicDevices/El7';
import El8 from './components/ElectronicDevices/El8';
import El9 from './components/ElectronicDevices/El9';
import El10 from './components/ElectronicDevices/El10';

import HomeGarden from './components/HomeGarden/HomeGarden';
import Hg1 from './components/HomeGarden/Hg1';
import Hg2 from './components/HomeGarden/Hg2';
import Hg3 from './components/HomeGarden/Hg3';
import Hg4 from './components/HomeGarden/Hg4';
import Hg5 from './components/HomeGarden/Hg5';
import Hg6 from './components/HomeGarden/Hg6';
import Hg7 from './components/HomeGarden/Hg7';
import Hg8 from './components/HomeGarden/Hg8';
import Hg9 from './components/HomeGarden/Hg9';
import Hg10 from './components/HomeGarden/Hg10';

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

import HobbySport from './components/HobbySport/HobbySport';
import Hs1 from './components/HobbySport/Hs1';
import Hs2 from './components/HobbySport/Hs2';
import Hs3 from './components/HobbySport/Hs3';
import Hs4 from './components/HobbySport/Hs4';
import Hs5 from './components/HobbySport/Hs5';
import Hs6 from './components/HobbySport/Hs6';
import Hs7 from './components/HobbySport/Hs7';
import Hs8 from './components/HobbySport/Hs8';
import Hs9 from './components/HobbySport/Hs9';
import Hs10 from './components/HobbySport/Hs10';

import Foods from './components/Foods/Foods';
import Fd1 from './components/Foods/Fd1';
import Fd2 from './components/Foods/Fd2';
import Fd3 from './components/Foods/Fd3';
import Fd4 from './components/Foods/Fd4';
import Fd5 from './components/Foods/Fd5';
import Fd6 from './components/Foods/Fd6';
import Fd7 from './components/Foods/Fd7';
import Fd8 from './components/Foods/Fd8';
import Fd9 from './components/Foods/Fd9';
import Fd10 from './components/Foods/Fd10';

import Education from './components/Education/Education';
import Ed1 from './components/Education/Ed1';
import Ed2 from './components/Education/Ed2';
import Ed3 from './components/Education/Ed3';
import Ed4 from './components/Education/Ed4';
import Ed5 from './components/Education/Ed5';
import Ed6 from './components/Education/Ed6';
import Ed7 from './components/Education/Ed7';
import Ed8 from './components/Education/Ed8';
import Ed9 from './components/Education/Ed9';
import Ed10 from './components/Education/Ed10';

import Essentials from './components/Essentials/Essentials';
import Es1 from './components/Essentials/Es1';
import Es2 from './components/Essentials/Es2';
import Es3 from './components/Essentials/Es3';
import Es4 from './components/Essentials/Es4';
import Es5 from './components/Essentials/Es5';
import Es6 from './components/Essentials/Es6';
import Es7 from './components/Essentials/Es7';
import Es8 from './components/Essentials/Es8';
import Es9 from './components/Essentials/Es9';
import Es10 from './components/Essentials/Es10';

import FashionBeauty from './components/FashionBeauty/FashionBeauty';
import Fb1 from './components/FashionBeauty/Fb1';
import Fb2 from './components/FashionBeauty/Fb2';
import Fb3 from './components/FashionBeauty/Fb3';
import Fb4 from './components/FashionBeauty/Fb4';
import Fb5 from './components/FashionBeauty/Fb5';
import Fb6 from './components/FashionBeauty/Fb6';
import Fb7 from './components/FashionBeauty/Fb7';
import Fb8 from './components/FashionBeauty/Fb8';
import Fb9 from './components/FashionBeauty/Fb9';
import Fb10 from './components/FashionBeauty/Fb10';

import Gifts from './components/Gifts/Gifts';
import Gi1 from './components/Gifts/Gi1';
import Gi2 from './components/Gifts/Gi2';
import Gi3 from './components/Gifts/Gi3';
import Gi4 from './components/Gifts/Gi4';
import Gi5 from './components/Gifts/Gi5';
import Gi6 from './components/Gifts/Gi6';
import Gi7 from './components/Gifts/Gi7';
import Gi8 from './components/Gifts/Gi8';
import Gi9 from './components/Gifts/Gi9';
import Gi10 from './components/Gifts/Gi10';

import Music from './components/Music/Music';
import Mu1 from './components/Music/Mu1';
import Mu2 from './components/Music/Mu2';
import Mu3 from './components/Music/Mu3';
import Mu4 from './components/Music/Mu4';
import Mu5 from './components/Music/Mu5';
import Mu6 from './components/Music/Mu6';
import Mu7 from './components/Music/Mu7';
import Mu8 from './components/Music/Mu8';
import Mu9 from './components/Music/Mu9';
import Mu10 from './components/Music/Mu10';

import Toys from './components/Toys/Toys';
import Ty1 from './components/Toys/Ty1';
import Ty2 from './components/Toys/Ty2';
import Ty3 from './components/Toys/Ty3';
import Ty4 from './components/Toys/Ty4';
import Ty5 from './components/Toys/Ty5';
import Ty6 from './components/Toys/Ty6';
import Ty7 from './components/Toys/Ty7';
import Ty8 from './components/Toys/Ty8';
import Ty9 from './components/Toys/Ty9';
import Ty10 from './components/Toys/Ty10';

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
          <Route path='/El1' component={El1} />
          <Route path='/El2' component={El2} />
          <Route path='/El3' component={El3} />
          <Route path='/El4' component={El4} />
          <Route path='/El5' component={El5} />
          <Route path='/El6' component={El6} />
          <Route path='/El7' component={El7} />
          <Route path='/El8' component={El8} />
          <Route path='/El9' component={El9} />
          <Route path='/El10' component={El10} />
          
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
          <Route path='/Hs1' component={Hs1} />
          <Route path='/Hs2' component={Hs2} />
          <Route path='/Hs3' component={Hs3} />
          <Route path='/Hs4' component={Hs4} />
          <Route path='/Hs5' component={Hs5} />
          <Route path='/Hs6' component={Hs6} />
          <Route path='/Hs7' component={Hs7} />
          <Route path='/Hs8' component={Hs8} />
          <Route path='/Hs9' component={Hs9} />
          <Route path='/Hs10' component={Hs10} />
          
          <Route path='/HomeGarden' component={HomeGarden} />
          <Route path='/Hg1' component={Hg1} />
          <Route path='/Hg2' component={Hg2} />
          <Route path='/Hg3' component={Hg3} />
          <Route path='/Hg4' component={Hg4} />
          <Route path='/Hg5' component={Hg5} />
          <Route path='/Hg6' component={Hg6} />
          <Route path='/Hg7' component={Hg7} />
          <Route path='/Hg8' component={Hg8} />
          <Route path='/Hg9' component={Hg9} />
          <Route path='/F10' component={Hg10} />
          
          <Route path='/Foods' component={Foods} />
          <Route path='/Fd1' component={Fd1} />
          <Route path='/Fd2' component={Fd2} />
          <Route path='/Fd3' component={Fd3} />
          <Route path='/Fd4' component={Fd4} />
          <Route path='/Fd5' component={Fd5} />
          <Route path='/Fd6' component={Fd6} />
          <Route path='/Fd7' component={Fd7} />
          <Route path='/Fd8' component={Fd8} />
          <Route path='/Fd9' component={Fd9} />
          <Route path='/F10' component={Fd10} />
          
          <Route path='/Education' component={Education} />
          <Route path='/Ed1' component={Ed1} />
          <Route path='/Ed2' component={Ed2} />
          <Route path='/Ed3' component={Ed3} />
          <Route path='/Ed4' component={Ed4} />
          <Route path='/Ed5' component={Ed5} />
          <Route path='/Ed6' component={Ed6} />
          <Route path='/Ed7' component={Ed7} />
          <Route path='/Ed8' component={Ed8} />
          <Route path='/Ed9' component={Ed9} />
          <Route path='/Ed10' component={Ed10} />
          
          <Route path='/Essentials' component={Essentials} />
          <Route path='/Es1' component={Es1} />
          <Route path='/Es2' component={Es2} />
          <Route path='/Es3' component={Es3} />
          <Route path='/Es4' component={Es4} />
          <Route path='/Es5' component={Es5} />
          <Route path='/Es6' component={Es6} />
          <Route path='/Es7' component={Es7} />
          <Route path='/Es8' component={Es8} />
          <Route path='/Es9' component={Es9} />
          <Route path='/Es10' component={Es10} />
          
          <Route path='/FashionBeauty' component={FashionBeauty} />
          <Route path='/Fb1' component={Fb1} />
          <Route path='/Fb2' component={Fb2} />
          <Route path='/Fb3' component={Fb3} />
          <Route path='/Fb4' component={Fb4} />
          <Route path='/Fb5' component={Fb5} />
          <Route path='/Fb6' component={Fb6} />
          <Route path='/Fb7' component={Fb7} />
          <Route path='/Fb8' component={Fb8} />
          <Route path='/Fb9' component={Fb9} />
          <Route path='/Fb10' component={Fb10} />
          
          <Route path='/Gifts' component={Gifts} />
          <Route path='/Gi1' component={Gi1} />
          <Route path='/Gi2' component={Gi2} />
          <Route path='/Gi3' component={Gi3} />
          <Route path='/Gi4' component={Gi4} />
          <Route path='/Gi5' component={Gi5} />
          <Route path='/Gi6' component={Gi6} />
          <Route path='/Gi7' component={Gi7} />
          <Route path='/Gi8' component={Gi8} />
          <Route path='/Gi9' component={Gi9} />
          <Route path='/Gi10' component={Gi10} />
          
          <Route path='/Music' component={Music} />
          <Route path='/Mu1' component={Mu1} />
          <Route path='/Mu2' component={Mu2} />
          <Route path='/Mu3' component={Mu3} />
          <Route path='/Mu4' component={Mu4} />
          <Route path='/Mu5' component={Mu5} />
          <Route path='/Mu6' component={Mu6} />
          <Route path='/Mu7' component={Mu7} />
          <Route path='/Mu8' component={Mu8} />
          <Route path='/Mu9' component={Mu9} />
          <Route path='/Mu10' component={Mu10} />
          
          <Route path='/Toys' component={Toys} />
          <Route path='/Ty1' component={Ty1} />
          <Route path='/Ty2' component={Ty2} />
          <Route path='/Ty3' component={Ty3} />
          <Route path='/Ty4' component={Ty4} />
          <Route path='/Ty5' component={Ty5} />
          <Route path='/Ty6' component={Ty6} />
          <Route path='/Ty7' component={Ty7} />
          <Route path='/Ty8' component={Ty8} />
          <Route path='/Ty9' component={Ty9} />
          <Route path='/Ty10' component={Ty10} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
