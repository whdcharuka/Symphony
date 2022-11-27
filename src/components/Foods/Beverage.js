import React from 'react';
import '../../App.css';
import FdCategories from './FdCategories';
import FdItem from './FdItem';

function Home() {
  return (
    <>
      <section>
        <h1 className='qwe3'>Beverages</h1>
        <div className='container g_flex'>
          <FdCategories />
          
            <div className='qwe1'>
               <FdItem />
            </div>
        </div>
      </section>
    </>
  );
}

export default Home;
