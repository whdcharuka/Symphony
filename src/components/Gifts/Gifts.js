import React from 'react';
import '../../App.css';
import Categories from '../pages/Categories';
import GiItem from './GiItem';

function Home() {
  return (
    <>
      <section>
        <div className='container d_flex'>
          <Categories />
            <div className='qwe'>
               <GiItem />
            </div>
        </div>
      </section>
    </>
  );
}

export default Home;
