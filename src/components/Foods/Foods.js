import React from 'react';
import '../../App.css';
import Categories from '../pages/Categories';
import FdItem from './FdItem';

function Home() {
  return (
    <>
      <section>
        <div className='container d_flex'>
          <Categories />
            <div className='qwe'>
               <FdItem />
            </div>
        </div>
      </section>
    </>
  );
}

export default Home;
