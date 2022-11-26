import React from 'react';
import '../../App.css';
import Categories from '../pages/Categories';
import FdItem from './ElItem';
import ElCategories from './ElCategories';

function Home() {
  return (
    <>
      <section>
        <div className='container d_flex'>
          <Categories />
          <ElCategories />
            <div className='qwe'>
               <FdItem />
            </div>
        </div>
      </section>
    </>
  );
}

export default Home;
