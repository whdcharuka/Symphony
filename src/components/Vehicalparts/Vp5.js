import React from 'react';
import '../../App.css';
import Categories from '../pages/Categories';
import Vp5View from './Vp5View';
import Des5 from './Des5';

function Home() {
  return (
    <>
      <section>
        <div className='container d_flex'>
          <Categories />
            <div className='photo'>
               <Vp5View />
            </div>
            <div className='description'>
               <Des5/>
            </div>
        </div>
      </section>
    </>
  );
}

export default Home;