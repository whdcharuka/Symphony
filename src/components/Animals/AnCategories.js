// import React from "react"
// import { Link } from "react-router-dom"
// import '../pages/Categories.css';

// const Categories = () => {
//   const data = [
//     {
//       path:"/Cat",
//       cateName: "CATS",
//     },
//     {
//       path:"/",
//       cateName: "DOGS",
//     },
//     {
//       path:"/",
//       cateName: "FISH",
//     }, 
//     {
//       path:"/ ",
//       cateName: "PET FOODS",
//     },
//     {
//       path:"/",
//       cateName: "FARM ANIMALS",
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
//         </div> 
//     </>
//   )
// }

// export default Categories


import React from "react"
import { Link } from "react-router-dom"
import '../../App.css';

const Categories = () => {
  
  return (
    <>
      <div className='vcategory'>
      <h3 className='types'>TYPES</h3>
        <div className='box '>
          <ul>
            <Link to="./Cat"><i class="fa fa-square" aria-hidden="true"><span>CATS</span></i></Link>
            <Link to="./Petfood"><i class="fa fa-square" aria-hidden="true"><span>PET FOODS</span></i></Link>
            <Link to="./Dog"><i class="fa fa-square" aria-hidden="true"><span>DOGS</span></i></Link>
            <Link to="./Farm"><i class="fa fa-square" aria-hidden="true"><span>FARM ANIMALS</span></i></Link>
            <Link to="./Fish"><i class="fa fa-square" aria-hidden="true"><span>FISH</span></i></Link>
          </ul>
          </div>
      </div> 
    </>
  )
}

export default Categories