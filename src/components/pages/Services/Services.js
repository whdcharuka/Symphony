import React from 'react';
import '../../../App.css';
import ServicesItem from './ServicesItem';
import Ser from './Ser';
// import Categories from './Categories';
// import CardsHome from './CardsHome';
import Wrapper from "../../wrapper/Wrapper"

export default function Products() {
  return (
    <>
      <div className='container d_flex'>
        <ServicesItem />
            <div className='contact_box1'>
              <Ser />
            </div>
      </div>
      < Wrapper />
    </>
  );
}