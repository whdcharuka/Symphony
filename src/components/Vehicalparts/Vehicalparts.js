import React from 'react';
import '../../App.css';
import Categories from '../pages/Categories';
import VpItem from './VpItem';

function Home() {
  return (
    <>
      <section>
        <div className='container d_flex'>
          <Categories />
            <div className='qwe'>
               <VpItem />
            </div>
        </div>
      </section>
    </>
  );
}

export default Home;
