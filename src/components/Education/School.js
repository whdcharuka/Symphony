import React from 'react';
import '../../App.css';
import EdCategories from './EdCategories';
import EdItem from './EdItem';

function Home() {
  return (
    <>
      <section>
        <h1 className='qwe3'>School Bags</h1>
        <div className='container g_flex'>
          <EdCategories />
          
            <div className='qwe1'>
               <EdItem />
            </div>
        </div>
      </section>
    </>
  );
}

export default Home;
