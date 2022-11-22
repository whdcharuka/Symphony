import React from 'react';
import '../../App.css';
import Categories from '../pages/Categories';
import FdItem from './EdItem';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <section>
        <div className='container d_flex'>
          <Categories />
            <div className='qwe'>
               <FdItem />
            </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Home;
