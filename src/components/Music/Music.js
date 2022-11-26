import React from 'react';
import '../../App.css';
import Categories from '../pages/Categories';
import MuItem from './MuItem';
import MuCategories from './MuCategories';

function Home() {
  return (
    <>
      <section>
        <div className='container d_flex'>
          <Categories />
          <MuCategories />
            <div className='qwe'>
               <MuItem />
            </div>
        </div>
      </section>
    </>
  );
}

export default Home;
