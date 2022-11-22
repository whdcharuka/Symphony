import React from 'react';
import '../../App.css';
import Categories from '../pages/Categories';
import An5View from './An5View';
import Des5 from './Des5';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <section>
        <div className='container d_flex'>
          <Categories />
            <div className='photo'>
               <An5View />
            </div>
            <div className='description'>
               <Des5/>
            </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Home;