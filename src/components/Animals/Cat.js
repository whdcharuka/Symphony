import React from 'react';
import '../../App.css';
import AnCategories from './AnCategories';
import AnItem from './AnItem';

function Home() {
  return (
    <>
      <section>
        <h1 className='qwe3'>Cats</h1>
        <div className='container g_flex'>
          <AnCategories />
            <div className='qwe1'>
               <AnItem />
            </div>
        </div>
      </section>
    </>
  );
}

export default Home;
