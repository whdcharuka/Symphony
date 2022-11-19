import React from 'react';
import '../../App.css';
import Categories from '../pages/Categories';
import Vp5View from './Vp5View';
import Description from '../pages/Description';

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
               <Description/>
            </div>
        </div>
      </section>
    </>
  );
}

export default Home;