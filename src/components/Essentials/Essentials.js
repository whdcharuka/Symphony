import React from 'react';
import '../../App.css';
import Categories from '../pages/Categories';
import EsItem from './EsItem';

function Home() {
  return (
    <>
      <section>
        <div className='container d_flex'>
          <Categories />
            <div className='qwe'>
               <EsItem />
            </div>
        </div>
      </section>
    </>
  );
}

export default Home;
