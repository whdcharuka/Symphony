import React from 'react';
import '../../App.css';
import Categories from './Categories';
import ToysItem from './ToysItem';

function Home() {
  return (
    <>
      <section>
        <div className='container d_flex'>
          <Categories />
            <div className='qwe'>
               <ToysItem />
            </div>
        </div>
      </section>
    </>
  );
}

export default Home;