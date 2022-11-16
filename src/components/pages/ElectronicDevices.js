import React from 'react';
import '../../App.css';
import Categories from './Categories';
import ElectronicDevicesItem from './ElectronicDevicesItem';

function Home() {
  return (
    <>
      <section>
        <div className='container d_flex'>
          <Categories />
            <div className='qwe'>
               <ElectronicDevicesItem />
            </div>
        </div>
      </section>
    </>
  );
}

export default Home;