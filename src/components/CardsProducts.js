import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function CardsProducts() {
  return (
    <div className='cards'>
      <h1>About</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/car.png'
              text=''
              path='/services'
            />
            <CardItem
              src='images/car.png'
              text=''
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardsProducts;