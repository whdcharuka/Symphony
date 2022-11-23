import React from 'react';
import '../../../App.css';
import AboutItem from './AboutItem';
import Abt from './Abt';

export default function Products() {
  return (
    <>
    <div className='container d_flex'>
       <AboutItem />
            <div className='contact_box'>
              <Abt />
            </div>
        </div>
      
    </>
  );
}