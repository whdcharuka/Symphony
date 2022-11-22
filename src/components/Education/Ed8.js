import React from 'react';
import '../../App.css';
import Categories from '../pages/Categories';
import Ed8View from './Ed8View';
import Des8 from './Des8';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <section>
        <div className='container d_flex'>
          <Categories />
            <div className='photo'>
               <Ed8View />
            </div>
            <div className='description'>
               <Des8/>
            </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Home;