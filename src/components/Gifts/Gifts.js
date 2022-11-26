import React from 'react';
import '../../App.css';
import Categories from '../pages/Categories';
import GiItem from './GiItem';
import GiCategories from './GiCategories';

function Home() {
  return (
    <>
      <section>
        <div className='container d_flex'>
          <Categories />
          <GiCategories />
            <div className='qwe'>
               <GiItem />
            </div>
        </div>
      </section>
    </>
  );
}

export default Home;
