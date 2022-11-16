import React from 'react';
import '../../App.css';
import Categories from './Categories';
import EssentialsItem from './EssentialsItem';

function Home() {
  return (
    <>
      <section>
        <div className='container d_flex'>
          <Categories />
            <div className='qwe'>
               <EssentialsItem />
            </div>
        </div>
      </section>
    </>
  );
}

export default Home;