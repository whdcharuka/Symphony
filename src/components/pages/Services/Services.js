import React from 'react';
import '../../../App.css';
import ServicesItem from './ServicesItem';
import Ser from './Ser';
// import Categories from './Categories';
// import CardsHome from './CardsHome';

export default function Products() {
  return (
    <>
    {/* <Categories /> */}
      <div className='container d_flex'>
        
        <ServicesItem />
            <div className='contact_box'>
              <Ser />
            </div>
        </div>
        {/* <CardsHome /> */}
    </>
  );
}