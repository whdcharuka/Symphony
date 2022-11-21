import React from 'react';
import '../../App.css';
import Categories from '../pages/Categories';
import MuItem from './MuItem';

function Home() {
  return (
    <>
      <section>
        <div className='container d_flex'>
          <Categories />
            <div className='qwe'>
               <MuItem />
            </div>
        </div>
      </section>
    </>
  );
}

export default Home;
