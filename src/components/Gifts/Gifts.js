// import React from 'react';
// import '../../App.css';
// import Categories from '../pages/Categories';
// import GiItem from './GiItem';
// import GiCategories from './GiCategories';

// function Home() {
//   return (
//     <>
//       <section>
//         <div className='container d_flex'>
//           <Categories />
//           <GiCategories />
//             <div className='qwe'>
//                <GiItem />
//             </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Home;

import React from 'react';
import '../../App.css';
import GiItem from './GiItem';
import Home1 from "./Home1"

function Home() {
  return (
    <>
      <section>
      <Home1/>
        <div className='container d_flex'>
            <div className='qwe'>
               <GiItem />
            </div>
        </div>
      </section>
    </>
  );
}

export default Home;
