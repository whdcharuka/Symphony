import React from 'react';
import '../../App.css';
import Categories from '../pages/Categories';
import Ty9View from './Ty9View';
import Des9 from './Des9';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <section>
        <div className='container d_flex'>
          <Categories />
            <div className='photo'>
               <Ty9View />
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