import React from 'react';
import '../../App.css';
import Categories from '../pages/Categories';
import Ty3View from './Ty3View';
import Des3 from './Des3';

function Home() {
  return (
    <>
      <section>
        <div className='container d_flex'>
          <Categories />
            <div className='photo'>
               <Ty3View />
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