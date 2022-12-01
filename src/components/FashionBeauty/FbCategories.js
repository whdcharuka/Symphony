// import React from "react"
// import { Link } from "react-router-dom"
// import '../pages/Categories.css';

// const Categories = () => {
//   const data = [
//     {
//       path:"/Bag",
//       cateName: "BAGS",
//     },
//     {
//       path:"/",
//       cateName: "CLOTHING",
//     },
//     {
//       path:"/",
//       cateName: "JEWELLERY",
//     }, 
//     {
//       path:"/ ",
//       cateName: "SUNGLASSES",
//     },
//     {
//       path:"/",
//       cateName: "SHOES",
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
import '../pages/Categories.css';

const Categories = () => {
  
  return (
    <>
      <div className='vcategory'>
      <h3 className='types'>TYPES</h3>
        <div className='box '>
          <ul>
            <Link to="./Bag"><i class="fa fa-square" aria-hidden="true"><span>BAGS</span></i></Link>
            <Link to="./Clothes"><i class="fa fa-square" aria-hidden="true"><span>CLOTHING</span></i></Link>
            <Link to="./Jwel"><i class="fa fa-square" aria-hidden="true"><span>JEWELLERY</span></i></Link>
            <Link to="./Sun"><i class="fa fa-square" aria-hidden="true"><span>SUNGLASSES</span></i></Link>
            <Link to="./Shoes"><i class="fa fa-square" aria-hidden="true"><span>SHOES </span></i></Link>
          </ul>
          </div>
      </div> 
    </>
  )
}

export default Categories