import React from 'react';
import '../../App.css';
import Categories from './Categories';
import Vp2View from './Vp2View';
import Description from './Description';

function Home() {
  return (
    <>
      <section>
        <div className='container d_flex'>
          <Categories />
            <div className='photo'>
               <Vp2View />
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