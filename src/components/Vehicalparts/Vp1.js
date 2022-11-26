import React from 'react';
import '../../App.css';
import Categories from '../pages/Categories';
import Vp1View from './Vp1View';
import Des1 from './Des1';
import VpCategories from './VpCategories';

function Home() {
  return (
    <>
      <section>
        <div className='container d_flex'>
          <Categories />
          <VpCategories />
            <div className='photo'>
               <Vp1View />
            </div>
            <div className='description'>
               <Des1/>
            </div>
        </div>
      </section>
    </>
  );
}

export default Home;



