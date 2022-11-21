import React from 'react';
import '../../App.css';
import Categories from '../pages/Categories';
import Vp9View from './Vp9View';
import Des9 from './Des9';

function Home() {
  return (
    <>
      <section>
        <div className='container d_flex'>
          <Categories />
            <div className='photo'>
               <Vp9View />
            </div>
            <div className='description'>
               <Des9/>
            </div>
        </div>
      </section>
    </>
  );
}

export default Home;