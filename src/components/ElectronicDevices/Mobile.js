import React from 'react';
import '../../App.css';
import Categories from '../pages/Categories';
import ElCategories from './ElCategories';
import ElItem from './ElItem';

function Home() {
  return (
    <>
      <section>
        <h1 className='qwe3'>Mobile</h1>
        <div className='container g_flex'>
          <ElCategories />
            <div className='qwe1'>
               <ElItem />
            </div>
        </div>
      </section>
    </>
  );
}

export default Home;
