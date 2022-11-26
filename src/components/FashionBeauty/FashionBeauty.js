import React from 'react';
import '../../App.css';
import Categories from '../pages/Categories';
import FbItem from './FbItem';
import FbCategories from './FbCategories';

function Home() {
  return (
    <>
      <section>
        <div className='container d_flex'>
          <Categories />
          <FbCategories />
            <div className='qwe'>
               <FbItem />
            </div>
        </div>
      </section>
    </>
  );
}

export default Home;
