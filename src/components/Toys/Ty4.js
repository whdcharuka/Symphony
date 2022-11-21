import React from 'react';
import '../../App.css';
import Categories from '../pages/Categories';
import Ty4View from './Ty4View';
import Des4 from './Des4';

function Home() {
  return (
    <>
      <section>
        <div className='container d_flex'>
          <Categories />
            <div className='photo'>
               <Ty4View />
            </div>
            <div className='description'>
               <Des4/>
            </div>
        </div>
      </section>
    </>
  );
}

export default Home;