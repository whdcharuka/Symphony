import React from 'react';
import '../../App.css';
import Categories from '../pages/Categories';
import HsItem from './HsItem';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <section>
        <div className='container d_flex'>
          <Categories />
            <div className='qwe'>
               <HsItem />
            </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Home;
