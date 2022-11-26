import React from 'react';
import '../../App.css';
import Categories from '../pages/Categories';
import HsItem from './HsItem';
import HsCategories from './HsCategories';

function Home() {
  return (
    <>
      <section>
        <div className='container d_flex'>
          <Categories />
          <HsCategories />
            <div className='qwe'>
               <HsItem />
            </div>
        </div>
      </section>
    </>
  );
}

export default Home;
