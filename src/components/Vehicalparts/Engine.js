import React from 'react';
import '../../App.css';
import VpCategories from './VpCategories';
import VpItem from './VpItem';

function Home() {
  return (
    <>
      <section>
        <h1 className='qwe3'>Engine Items</h1>
        <div className='container g_flex'>
          <VpCategories />
          
            <div className='qwe1'>
               <VpItem />
            </div>
        </div>
      </section>
    </>
  );
}

export default Home;