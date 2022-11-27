import React from 'react';
import '../../App.css';
import GiCategories from './GiCategories';
import GiItem from './GiItem';

function Home() {
  return (
    <>
      <section>
        <h1 className='qwe3'>Christmas</h1>
        <div className='container g_flex'>
          <GiCategories />
          
            <div className='qwe1'>
               <GiItem />
            </div>
        </div>
      </section>
    </>
  );
}

export default Home;
