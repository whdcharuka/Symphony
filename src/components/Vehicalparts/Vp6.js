import React from 'react';
import '../../App.css';
import Categories from '../pages/Categories';
import Vp6View from './Vp6View';
import Des6 from './Des6';

function Home() {
  return (
    <>
      <section>
        <div className='container d_flex'>
          <Categories />
            <div className='photo'>
               <Vp6View />
            </div>
            <div className='description'>
               <Des6/>
            </div>
        </div>
      </section>
    </>
  );
}

export default Home;