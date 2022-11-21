import React from 'react';
import '../../App.css';
import Categories from '../pages/Categories';
import Hg3View from './Hg3View';
import Des3 from './Des3';

function Home() {
  return (
    <>
      <section>
        <div className='container d_flex'>
          <Categories />
            <div className='photo'>
               <Hg3View />
            </div>
            <div className='description'>
               <Des3/>
            </div>
        </div>
      </section>
    </>
  );
}

export default Home;