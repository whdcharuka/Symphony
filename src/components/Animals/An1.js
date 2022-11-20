import React from 'react';
import '../../App.css';
import Categories from '../pages/Categories';
import An1View from './An1View';
import Description from '../pages/Description';

function Home() {
  return (
    <>
      <section>
        <div className='container d_flex'>
          <Categories />
            <div className='photo'>
               <An1View />
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



