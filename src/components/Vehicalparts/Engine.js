// import React from 'react';
// import '../../App.css';
// import Categories from '../pages/Categories';
// import VpCategories from './VpCategories';
// import EngineItem from './EngineItem';

// function Home() {
//   return (
//     <>
//       <section>
//         <div className='container d_flex'>
//           <Categories />
//           <VpCategories />
//             <div className='qwe'>
//                <EngineItem />
//             </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Home;


import React from 'react';
import '../../App.css';
import Categories from '../pages/Categories';
import VpCategories from './VpCategories';
import VpItem from './VpItem';

function Home() {
  return (
    <>
      <section>
        <h1 className='qwe3'>Engine Items</h1>
        <div className='container g_flex'>
          {/* <Categories /> */}
          <VpCategories />
          
            <div className='qwe1'>
               <VpItem />
               {/* <Wrapper /> */}
            </div>
        </div>
      </section>
    </>
  );
}

export default Home;