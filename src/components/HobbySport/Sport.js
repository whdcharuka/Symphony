import React from 'react';
import '../../App.css';
import HsCategories from './HsCategories';
import HsItem from './HsItem';

function Home() {
  return (
    <>
      <section>
        <h1 className='qwe3'>Sports</h1>
        <div className='container g_flex'>
          <HsCategories />
          
            <div className='qwe1'>
               <HsItem />
            </div>
        </div>
      </section>
    </>
  );
}

export default Home;
