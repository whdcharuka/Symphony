import React from 'react';
import '../../App.css';
import Categories from '../pages/Categories';
import Vp8View from './Vp8View';
import Des8 from './Des8';

function Home() {
  return (
    <>
      <section>
        <div className='container d_flex'>
          <Categories />
            <div className='photo'>
               <Vp8View />
            </div>
            <div className='description'>
               <Des8/>
            </div>
        </div>
      </section>
    </>
  );
}

export default Home;