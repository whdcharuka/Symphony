import React from 'react';
import '../../App.css';
import Categories from '../pages/Categories';
import EsItem from './EsItem';
import Footer from '../Footer';

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
        <Footer />
      </section>
    </>
  );
}

export default Home;
