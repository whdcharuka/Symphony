import React from 'react';
import '../../App.css';
import Categories from '../pages/Categories';
import Gi9View from './Gi9View';
import Des9 from './Des9';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <section>
        <div className='container d_flex'>
          <Categories />
            <div className='photo'>
               <Gi9View />
            </div>
            <div className='description'>
               <Des9/>
            </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Home;