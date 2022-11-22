import React from 'react';
import '../../App.css';
import Categories from '../pages/Categories';
import An4View from './An4View';
import Des4 from './Des4';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <section>
        <div className='container d_flex'>
          <Categories />
            <div className='photo'>
               <An4View />
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