import React from 'react';
import '../../App.css';
import Categories from '../pages/Categories';
import Ed6View from './Ed6View';
import Des6 from './Des6';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <section>
        <div className='container d_flex'>
          <Categories />
            <div className='photo'>
               <Ed6View />
            </div>
            <div className='description'>
               <Des6/>
            </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Home;