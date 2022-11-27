// import React from 'react';
// import '../../App.css';
// import Categories from '../pages/Categories';
// import HgItem from './HgItem';
// import HgCategories from './HgCategories';

// function Home() {
//   return (
//     <>
//       <section>
//         <div className='container d_flex'>
//           <Categories />
//           <HgCategories />
//             <div className='qwe'>
//                <HgItem />
//             </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Home;

import React from 'react';
import '../../App.css';
import HgItem from './HgItem';
import Home1 from "./Home1"

function Home() {
  return (
    <>
      <section>
      <Home1/>
        <div className='container d_flex'>
            <div className='qwe'>
               <HgItem />
            </div>
        </div>
      </section>
    </>
  );
}

export default Home;
