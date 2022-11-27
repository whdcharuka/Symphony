import React from 'react';
import '../../App.css';
import HgCategories from './HgCategories';
import HgItem from './HgItem';

function Home() {
  return (
    <>
      <section>
        <h1 className='qwe3'>Furniture</h1>
        <div className='container g_flex'>
          <HgCategories />
          
            <div className='qwe1'>
               <HgItem />
            </div>
        </div>
      </section>
    </>
  );
}

export default Home;
