import React from 'react';
import '../../App.css';
import Categories from './Categories';
import EducationItem from './EducationItem';

function Home() {
  return (
    <>
      <section>
        <div className='container d_flex'>
          <Categories />
            <div className='qwe'>
               <EducationItem />
            </div>
        </div>
      </section>
    </>
  );
}

export default Home;
