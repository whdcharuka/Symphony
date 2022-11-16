import React from 'react';
import '../../App.css';
import Categories from './Categories';
import MusicItem from './MusicItem';

function Home() {
  return (
    <>
      <section>
        <div className='container d_flex'>
          <Categories />
            <div className='qwe'>
               <MusicItem />
            </div>
        </div>
      </section>
    </>
  );
}

export default Home;