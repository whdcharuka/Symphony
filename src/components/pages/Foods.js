import React from 'react';
import '../../App.css';
import Categories from './Categories';
import FoodsItem from './FoodsItem';

function Home() {
  return (
    <>
      <section>
        <div className='container d_flex'>
          <Categories />
            <div className='qwe'>
               <FoodsItem />
            </div>
        </div>
      </section>
    </>
  );
}

export default Home;
