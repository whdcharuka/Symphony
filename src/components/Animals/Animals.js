import React from 'react';
import '../../App.css';
import Categories from '../pages/Categories';
import AnItem from './AnItem';

function Home() {
  return (
    <>
      <section>
        <div className='container d_flex'>
          <Categories />
            <div className='qwe'>
               <AnItem />
            </div>
        </div>
      </section>
    </>
  );
}

export default Home;
