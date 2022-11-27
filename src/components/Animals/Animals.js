import React from 'react';
import '../../App.css';
import AnItem from './AnItem';
import Home1 from "./Home1"

function Home() {
  return (
    <>
      <section>
      <Home1/>
        <div className='container d_flex'>
            <div className='qwe'>
               <AnItem />
            </div>
        </div>
      </section>
    </>
  );
}

export default Home;
