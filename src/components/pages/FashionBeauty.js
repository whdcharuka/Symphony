import React from 'react';
import '../../App.css';
import Categories from './Categories';
import FashionBeautyItem from './FashionBeautyItem';

function Home() {
  return (
    <>
      <section>
        <div className='container d_flex'>
          <Categories />
            <div className='qwe'>
               <FashionBeautyItem />
            </div>
        </div>
      </section>
    </>
  );
}

export default Home;