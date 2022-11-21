import React from 'react';
import '../../App.css';
import Categories from '../pages/Categories';
import TyItem from './TyItem';

function Home() {
  return (
    <>
      <section>
        <div className='container d_flex'>
          <Categories />
            <div className='qwe'>
               <TyItem />
            </div>
        </div>
      </section>
    </>
  );
}

export default Home;
