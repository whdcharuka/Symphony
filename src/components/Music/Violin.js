import React from 'react';
import '../../App.css';
import MuCategories from './MuCategories';
import MuItem from './MuItem';

function Home() {
  return (
    <>
      <section>
        <h1 className='qwe3'>Violine</h1>
        <div className='container g_flex'>
          <MuCategories />
            <div className='qwe1'>
               <MuItem />
            </div>
        </div>
      </section>
    </>
  );
}

export default Home;
