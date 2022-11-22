import React from 'react';
import '../../Cards.css';
import CardItem from '../../CardItem';

function CardsProducts() {
  return (
    <div className='cards'>
      <h1>About Us</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/.png'
              text=''
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardsProducts;