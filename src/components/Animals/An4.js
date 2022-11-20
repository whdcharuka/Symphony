import React from 'react';
import '../../App.css';
import Categories from '../pages/Categories';
import An4View from './An4View';
import Description from '../pages/Description';

function Home() {
  return (
    <>
      <section>
        <div className='container d_flex'>
          <Categories />
            <div className='photo'>
               <An4View />
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