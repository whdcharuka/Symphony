import React from 'react';
import '../../App.css';
import Categories from '../pages/Categories';
import Mu5View from './Mu5View';
import Des5 from './Des5';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <section>
        <div className='container d_flex'>
          <Categories />
            <div className='photo'>
               <Mu5View />
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