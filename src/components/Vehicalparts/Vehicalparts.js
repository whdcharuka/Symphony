import React from 'react';
import '../../App.css';
import Categories from '../pages/Categories';
import VpItem from './VpItem';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <section>
        <div className='container d_flex'>
          <Categories />
            <div className='qwe'>
               <VpItem />
            </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Home;
