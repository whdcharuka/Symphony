import React from 'react';
import '../../App.css';
import Categories from '../pages/Categories';
import An6View from './An6View';
import Des7 from './Des7';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <section>
        <div className='container d_flex'>
          <Categories />
            <div className='photo'>
               <An6View />
            </div>
            <div className='description'>
               <Des7/>
            </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Home;