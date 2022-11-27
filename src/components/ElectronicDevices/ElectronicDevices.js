import React from 'react';
import '../../App.css';
import ElItem from './ElItem';
import Home1 from "./Home1"

function Home() {
  return (
    <>
      <section>
      <Home1/>
        <div className='container d_flex'>
            <div className='qwe'>
               <ElItem />
            </div>
        </div>
      </section>
    </>
  );
}

export default Home;

