import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function CardsProducts() {
  return (
    <div className='cards'>
      <h1>About</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        <h1>dzfbth</h1>
          <ul className='cards__items'>
            <CardItem
              src='images/car.png'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              path='/services'
            />
            <CardItem
              src='images/car.png'
              text='Experience Football on Top of the Himilayan Mountains'
              path='/products'
            />
            <CardItem
              src='images/car.png'
              text='Ride through the Sahara Desert on a guided camel tour'
              path='/sign-up'
            />
          </ul>
          <h1>dzfbth</h1>
          <ul className='cards__items'>
            <CardItem
              src='images/car.png'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              path='/services'
            />
            <CardItem
              src='images/car.png'
              text='Experience Football on Top of the Himilayan Mountains'
              path='/products'
            />
            <CardItem
              src='images/car.png'
              text='Ride through the Sahara Desert on a guided camel tour'
              path='/sign-up'
            />
          </ul>
          <h1>dzfbth</h1>
          <ul className='cards__items'>
            <CardItem
              src='images/car.png'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              path='/services'
            />
            <CardItem
              src='images/car.png'
              text='Experience Football on Top of the Himilayan Mountains'
              path='/products'
            />
            <CardItem
              src='images/car.png'
              text='Ride through the Sahara Desert on a guided camel tour'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardsProducts;