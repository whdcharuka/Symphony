import React from 'react';
import '../../App.css';
import FbCategories from './FbCategories';
import FbItem from './FbItem';

function Home() {
  return (
    <>
      <section>
        <h1 className='qwe3'>Bags</h1>
        <div className='container g_flex'>
          <FbCategories />
          
            <div className='qwe1'>
               <FbItem />
            </div>
        </div>
      </section>
    </>
  );
}

export default Home;
