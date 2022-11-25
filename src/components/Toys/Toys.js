import React from 'react';
import '../../App.css';
import Categories from '../pages/Categories';
import TyItem from './TyItem';
import TyCategories from './TyCategories';

function Home() {
  return (
    <>
      <section>
        <div className='container d_flex'>
          <Categories />
          <TyCategories />
            <div className='qwe'>
               <TyItem />
            </div>
        </div>
      </section>
    </>
  );
}

export default Home;
