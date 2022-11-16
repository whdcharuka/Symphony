import React from 'react';
import '../../App.css';
import Categories from './Categories';
import HobbySportItem from './HobbySportItem';

function Home() {
  return (
    <>
      <section>
        <div className='container d_flex'>
          <Categories />
            <div className='qwe'>
               <HobbySportItem />
            </div>
        </div>
      </section>
    </>
  );
}

export default Home;
