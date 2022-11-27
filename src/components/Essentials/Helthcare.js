import React from 'react';
import '../../App.css';
import EsCategories from './EsCategories';
import EsItem from './EsItem';

function Home() {
  return (
    <>
      <section>
        <h1 className='qwe3'>Helthcare</h1>
        <div className='container g_flex'>
          <EsCategories />
          
            <div className='qwe1'>
               <EsItem />
            </div>
        </div>
      </section>
    </>
  );
}

export default Home;
