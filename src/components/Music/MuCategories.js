// import React from "react"
// import { Link } from "react-router-dom"
// import '../pages/Categories.css';

// const Categories = () => {
//   const data = [
//     {
//       path:"/Violin",
//       cateName: "VIOLINS",
//     },
//     {
//       path:"/",
//       cateName: "KEYBOARDS",
//     },
//     {
//       path:"/",
//       cateName: "PIANOS",
//     }, 
//     {
//       path:"/",
//       cateName: "DRUMSET",
//     },
//     {
//       path:"/",
//       cateName: "GUITAR",
//     },
//   ]

//   return (
//     <>
//       <div className='vcategory'>
//       <h3 className='types'>TYPES</h3>
//         {data.map((value, index) => {
//           return (
//             <Link to={value.path} className='abc'>
//               <div className='box f_flex1' key={index}>
//               <i class="fa fa-square" aria-hidden="true"><span>{value.cateName}</span></i>
//               </div>
//             </Link>
//           )
//         })}
//       </div> 
//     </>
//   )
// }

// export default Categories



import React from "react"
import { Link } from "react-router-dom"
import '../pages/Categories.css';

const Categories = () => {
  
  return (
    <>
      <div className='vcategory'>
      <h3 className='types'>TYPES</h3>
        <div className='box '>
          <ul>
            <Link to="./Violin"><i class="fa fa-square" aria-hidden="true"><span>VIOLINS</span></i></Link>
            <Link to="./Keyboard"><i class="fa fa-square" aria-hidden="true"><span>KEYBOARDS</span></i></Link>
            <Link to="./Piano"><i class="fa fa-square" aria-hidden="true"><span>PIANOS</span></i></Link>
            <Link to="./Drum"><i class="fa fa-square" aria-hidden="true"><span>DRUMSET</span></i></Link>
            <Link to="./Guitar"><i class="fa fa-square" aria-hidden="true"><span>GUITAR</span></i></Link>
          </ul>
          </div>
      </div> 
    </>
  )
}

export default Categories

