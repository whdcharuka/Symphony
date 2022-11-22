import React from 'react';
import '../../App.css';
import Categories from '../pages/Categories';
import HgItem from './HgItem';

function Home() {
  return (
    <>
      <section>
        <div className='container d_flex'>
          <Categories />
            <div className='qwe'>
               <HgItem />
            </div>
        </div>
      </section>
    </>
  );
}

export default Home;
