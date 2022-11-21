import React from 'react';
import '../../App.css';
import Categories from '../pages/Categories';
import El1View from './El1View';
import Des1 from './Des1';

function Home() {
  return (
    <>
      <section>
        <div className='container d_flex'>
          <Categories />
            <div className='photo'>
               <El1View />
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



