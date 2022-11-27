import React from 'react';
import '../../App.css';
import Categories from '../pages/Categories';
import TyCategories from './TyCategories';
import TyItem from './TyItem';

function Home() {
  return (
    <>
      <section>
        <h1 className='qwe3'>Teddy Bear</h1>
        <div className='container g_flex'>
          {/* <Categories /> */}
          <TyCategories />
          
            <div className='qwe1'>
               <TyItem />
               {/* <Wrapper /> */}
            </div>
        </div>
      </section>
    </>
  );
}

export default Home;
