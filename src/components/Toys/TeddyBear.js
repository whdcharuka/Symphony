import React from 'react';
import '../../App.css';
import TyCategories from './TyCategories';
import TyItem from './TyItem';

function Home() {
  return (
    <>
      <section>
        <h1 className='qwe3'>Teddy Bear</h1>
        <div className='container g_flex'>
          <TyCategories />
            <div className='qwe1'>
               <TyItem />
            </div>
        </div>
      </section>
    </>
  );
}

export default Home;
