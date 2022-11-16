import React from 'react';
import '../../App.css';
import Categories from './Categories';
import GiftsItem from './GiftsItem';

function Home() {
  return (
    <>
      <section>
        <div className='container d_flex'>
          <Categories />
            <div className='qwe'>
               <GiftsItem />
            </div>
        </div>
      </section>
    </>
  );
}

export default Home;
