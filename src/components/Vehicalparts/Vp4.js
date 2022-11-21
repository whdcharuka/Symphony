import React from 'react';
import '../../App.css';
import Categories from '../pages/Categories';
import Vp4View from './Vp4View';
import Des4 from './Des4';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <section>
        <div className='container d_flex'>
          <Categories />
            <div className='photo'>
               <Vp4View />
            </div>
            <div className='description'>
               <Des4/>
            </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Home;