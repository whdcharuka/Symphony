import React from 'react';
import '../../App.css';
import Categories from './Categories';
import VehicalpartsItem from './VehicalpartsItem';

function Home() {
  return (
    <>
      <section>
        <div className='container d_flex'>
          <Categories />
            <div className='qwe'>
               <VehicalpartsItem />
            </div>
        </div>
      </section>
    </>
  );
}

export default Home;
