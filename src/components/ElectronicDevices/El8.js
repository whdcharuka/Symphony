import React from 'react';
import '../../App.css';
import Categories from '../pages/Categories';
import El8View from './El8View';
import Des8 from './Des8';

function Home() {
  return (
    <>
      <section>
        <div className='container d_flex'>
          <Categories />
            <div className='photo'>
               <El8View />
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