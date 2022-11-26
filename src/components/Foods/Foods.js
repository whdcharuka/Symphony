import React from 'react';
import '../../App.css';
import Categories from '../pages/Categories';
import FdItem from './FdItem';
import FdCategories from './FdCategories';

function Home() {
  return (
    <>
      <section>
        <div className='container d_flex'>
          <Categories />
          <FdCategories />
            <div className='qwe'>
               <FdItem />
            </div>
        </div>
      </section>
    </>
  );
}

export default Home;
