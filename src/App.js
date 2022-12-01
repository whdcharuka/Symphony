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

import Services from './components/pages/Services';
import Contacts from './components/pages/Contacts';
import About from './components/pages/About';
import Condition from './components/pages/Condition';

import Vehicalparts from './components/Vehicalparts/Vehicalparts';
import Battery from './components/Vehicalparts/Battery';
import Wheel from './components/Vehicalparts/Wheel';
import Engine from './components/Vehicalparts/Engine';
import Screen from './components/Vehicalparts/Screen';
import Fuel from './components/Vehicalparts/Fuel';

import ElectronicDevices from './components/ElectronicDevices/ElectronicDevices';
import Mobile from './components/ElectronicDevices/Mobile';
import Air from './components/ElectronicDevices/Air';
import Com from './components/ElectronicDevices/Com';
import Game from './components/ElectronicDevices/Game';
import Tele from './components/ElectronicDevices/Tele';

import HomeGarden from './components/HomeGarden/HomeGarden';
import Furniture from './components/HomeGarden/Furniture';
import Bathroom from './components/HomeGarden/Bathroom';
import Building from './components/HomeGarden/Building';
import Kitchen from './components/HomeGarden/Kitchen';
import Garden from './components/HomeGarden/Garden';

import Animals from './components/Animals/Animals';
import Cat from './components/Animals/Cat';
import Dog from './components/Animals/Dog';
import Fish from './components/Animals/Fish';
import Petfood from './components/Animals/Petfood';
import Farm from './components/Animals/Farm';

import HobbySport from './components/HobbySport/HobbySport';
import Sport from './components/HobbySport/Sport';
import Gym from './components/HobbySport/Gym';
import Collection from './components/HobbySport/Sport';
import Travelling from './components/HobbySport/Travelling';
import Art from './components/HobbySport/Art';

import Foods from './components/Foods/Foods';
import Beverage from './components/Foods/Beverage';
import Snack from './components/Foods/Snack';
import Vegi from './components/Foods/Vegi';
import Sweet from './components/Foods/Sweet';
import Cake from './components/Foods/Cake';

import Education from './components/Education/Education';
import School from './components/Education/School';
import Bottle from './components/Education/Bottle';
import Note from './components/Education/Note';
import Story from './components/Education/Story';
import Stat from './components/Education/Stat';

import Essentials from './components/Essentials/Essentials';
import Helthcare from './components/Essentials/Helthcare';
import Baby from './components/Essentials/Baby';
import Household from './components/Essentials/Household';
import Grocery from './components/Essentials/Grocery';

import FashionBeauty from './components/FashionBeauty/FashionBeauty';
import Bag from './components/FashionBeauty/Bag';
import Jwel from './components/FashionBeauty/Jwel';
import Shoes from './components/FashionBeauty/Shoes';
import Sun from './components/FashionBeauty/Sun';
import Clothes from './components/FashionBeauty/Clothes';

import Gifts from './components/Gifts/Gifts';
import Christmas from './components/Gifts/Christmas';
import Father from './components/Gifts/Father';
import Mother from './components/Gifts/Mother';
import Valentine from './components/Gifts/Valentine';
import New from './components/Gifts/New';

import Music from './components/Music/Music';
import Violin from './components/Music/Violin';
import Guitar from './components/Music/Guitar';
import Piano from './components/Music/Piano';
import Keyboard from './components/Music/Keyboard';
import Drum from './components/Music/Drum';

import Toys from './components/Toys/Toys';
import TeddyBear from './components/Toys/TeddyBear';
import Bicycle from './components/Toys/Bicycle';
import Car from './components/Toys/Car';
import Doll from './components/Toys/Doll';
import AnimalToy from './components/Toys/AnimalToy';

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
          <Route path='/Reset' component={Reset} />
          
          <Route path='/Services' component={Services} />
          <Route path='/Contacts' component={Contacts} />
          <Route path='/About' component={About} />
          <Route path='/Condition' component={Condition} />
          
          <Route path='/vehicalparts' component={Vehicalparts} />
          <Route path='/Battery' component={Battery} />
          <Route path='/Wheel' component={Wheel} />
          <Route path='/Engine' component={Engine} />
          <Route path='/Screen' component={Screen} />
          <Route path='/Fuel' component={Fuel} />

          <Route path='/ElectronicDevices' component={ElectronicDevices} />
          <Route path='/Mobile' component={Mobile} />
          <Route path='/Air' component={Air} />
          <Route path='/New' component={New} />
          <Route path='/Game' component={Game} />
          <Route path='/Tele' component={Tele} />
          <Route path='/Com' component={Com} />
          
          <Route path='/Animals' component={Animals} />
          <Route path='/Cat' component={Cat} />
          <Route path='/Fish' component={Fish} />
          <Route path='/Farm' component={Farm} />
          <Route path='/Petfood' component={Petfood} />
          <Route path='/Dog' component={Dog} />
           
          <Route path='/HobbySport' component={HobbySport} />
          <Route path='/Sport' component={Sport} />
          <Route path='/Art' component={Art} />
          <Route path='/Travelling' component={Travelling} />
          <Route path='/Gym' component={Gym} />
          <Route path='/Collection' component={Collection} />

          <Route path='/HomeGarden' component={HomeGarden} />
          <Route path='/Furniture' component={Furniture} />
          <Route path='/Bathroom' component={Bathroom} />
          <Route path='/Building' component={Building} />
          <Route path='/Garden' component={Garden} />
          <Route path='/Kitchen' component={Kitchen} />

          <Route path='/Foods' component={Foods} />
          <Route path='/Beverage' component={Beverage} />
          <Route path='/Cake' component={Cake} />
          <Route path='/Snack' component={Snack} />
          <Route path='/Sweet' component={Sweet} />
          <Route path='/Vegi' component={Vegi} />
          
          <Route path='/Education' component={Education} />
          <Route path='/School' component={School} />
          <Route path='/Bottle' component={Bottle} />
          <Route path='/Story' component={Story} />
          <Route path='/Note' component={Note} />
          <Route path='/Stat' component={Stat} />
          
          <Route path='/Essentials' component={Essentials} />
          <Route path='/Helthcare' component={Helthcare} />
          <Route path='/Grocery' component={Grocery} />
          <Route path='/Household' component={Household} />
          <Route path='/Baby' component={Baby} />
          
          <Route path='/FashionBeauty' component={FashionBeauty} />
          <Route path='/Bag' component={Bag} />
          <Route path='/Shoes' component={Shoes} />
          <Route path='/Clothes' component={Clothes} />
          <Route path='/Jwel' component={Jwel} />
          <Route path='/Sun' component={Sun} />

          <Route path='/Gifts' component={Gifts} />
          <Route path='/Mother' component={Mother} />
          <Route path='/Father' component={Father} />
          <Route path='/New' component={New} />
          <Route path='/valentine' component={Valentine} />
          <Route path='/Christmas' component={Christmas} />
          
          <Route path='/Music' component={Music} />
          <Route path='/Violin' component={Violin} />
          <Route path='/Piano' component={Piano} />
          <Route path='/Keyboard' component={Keyboard} />
          <Route path='/Drum' component={Drum} />
          <Route path='/Guitar' component={Guitar} />

          <Route path='/Toys' component={Toys} />
          <Route path='/TeddyBear' component={TeddyBear} />
          <Route path='/Bicycle' component={Bicycle} />
          <Route path='/Car' component={Car} />
          <Route path='/Doll' component={Doll} />
          <Route path='/AnimalToy' component={AnimalToy} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
