import React from 'react';
import '../../App.css';
import Categories from '../pages/Categories';
import Ty5View from './Ty5View';
import Des5 from './Des5';

function Home() {
  return (
    <>
      <section>
        <div className='container d_flex'>
          <Categories />
            <div className='photo'>
               <Ty5View />
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