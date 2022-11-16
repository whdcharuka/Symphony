import React from 'react';
import '../../App.css';
import Categories from './Categories';
import PetsItem from './AnimalsItem';

function Home() {
  return (
    <>
      <section>
        <div className='container d_flex'>
          <Categories />
            <div className='qwe'>
               <PetsItem />
            </div>
        </div>
      </section>
    </>
  );
}

export default Home;