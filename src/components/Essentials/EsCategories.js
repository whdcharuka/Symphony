// import React from "react"
// import { Link } from "react-router-dom"
// import '../pages/Categories.css';

// const Categories = () => {
//   const data = [
//     {
//       path:"/Helthcare",
//       cateName: "HEALTHCARE",
//     },
//     {
//       path:"/",
//       cateName: "GROCERY",
//     },
//     {
//       path:"/",
//       cateName: "HOUSE HOLD",
//     }, 
//     {
//       path:"/ ",
//       cateName: "BABY PRODUCTS",
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
            <Link to="./Helthcare"><i class="fa fa-square" aria-hidden="true"><span>HEALTHCARE</span></i></Link>
            <Link to="./Grocery"><i class="fa fa-square" aria-hidden="true"><span>GROCERY</span></i></Link>
            <Link to="./House"><i class="fa fa-square" aria-hidden="true"><span>HOUSE HOLD</span></i></Link>
            <Link to="./Baby"><i class="fa fa-square" aria-hidden="true"><span>BABY PRODUCTS</span></i></Link>
          </ul>
          </div>
      </div> 
    </>
  )
}

export default Categories

