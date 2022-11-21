import React from 'react';
import '../../App.css';
import Categories from '../pages/Categories';
import Hs7View from './Hs7View';
import Des7 from './Des7';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <section>
        <div className='container d_flex'>
          <Categories />
            <div className='photo'>
               <Hs7View />
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