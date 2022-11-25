import React from 'react';
import '../../App.css';
import Categories from '../pages/Categories';
import VpCategories from './VpCategories';
import EngineItem from './EngineItem';

function Home() {
  return (
    <>
      <section>
        <div className='container d_flex'>
          <Categories />
          <VpCategories />
            <div className='qwe'>
               <EngineItem />
            </div>
        </div>
      </section>
    </>
  );
}

export default Home;