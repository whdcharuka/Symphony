import React from 'react';
import '../../App.css';
import Categories from '../pages/Categories';
import Mu1View from './Mu1View';
import Des1 from './Des1';

function Home() {
  return (
    <>
      <section>
        <div className='container d_flex'>
          <Categories />
            <div className='photo'>
               <Mu1View />
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



