import React from 'react';
import '../../App.css';
import Categories from '../pages/Categories';
import Ty1View from './Ty1View';
import Des1 from './Des1';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <section>
        <div className='container d_flex'>
          <Categories />
            <div className='photo'>
               <Ty1View />
            </div>
            <div className='description'>
               <Des1/>
            </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Home;



