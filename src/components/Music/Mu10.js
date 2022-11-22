import React from 'react';
import '../../App.css';
import Categories from '../pages/Categories';
import Mu10View from './Mu10View';
import Des10 from './Des10';

function Home() {
  return (
    <>
      <section>
        <div className='container d_flex'>
          <Categories />
            <div className='photo'>
               <Mu10View />
            </div>
            <div className='description'>
               <Des10/>
            </div>
        </div>
      </section>
    </>
  );
}

export default Home;