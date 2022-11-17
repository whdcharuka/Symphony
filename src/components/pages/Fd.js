import React from 'react';
import '../../App.css';
import Categories from './Categories';
import FoodsItem from './FoodsItem';
import Description from './Description';

function Home() {
  return (
    <>
      <section>
        <div className='container d_flex'>
          <Categories />
            <div className='photo'>
               <FoodsItem />
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