import React from 'react';
import '../../App.css';
import Categories from './Categories';
import EssentialsItemView from './EssentialsItemView';
import Description from './Description';

function Home() {
  return (
    <>
      <section>
        <div className='container d_flex'>
          <Categories />
            <div className='photo'>
               <EssentialsItemView />
            </div>
            <div className='description'>
               <Description/>
            </div>
        </div>
      </section>
    </>
  );
}

export default Home;