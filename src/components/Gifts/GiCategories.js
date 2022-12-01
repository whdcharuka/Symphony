// import React from "react"
// import { Link } from "react-router-dom"
// import '../pages/Categories.css';

// const Categories = () => {
//   const data = [
//     {
//       path:"/Cristmas",
//       cateName: "CHRISTMAS ITEMS",
//     },
//     {
//       path:"/",
//       cateName: "NEW YEAR ITEMS",
//     },
//     {
//       path:"/",
//       cateName: "VALENTINES",
//     }, 
//     {
//       path:"",
//       cateName: "MOTHERS DAY",
//     },
//     {
//       path:"/",
//       cateName: "FATHERS DAY",
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
            <Link to="./Christmas"><i class="fa fa-square" aria-hidden="true"><span>CHRISTMAS ITEMS</span></i></Link>
            <Link to="./New"><i class="fa fa-square" aria-hidden="true"><span>NEW YEAR ITEMS</span></i></Link>
            <Link to="./Mother"><i class="fa fa-square" aria-hidden="true"><span>MOTHERS DAY</span></i></Link>
            <Link to="./Valentine"><i class="fa fa-square" aria-hidden="true"><span>VALENTINES</span></i></Link>
            <Link to="./Father"><i class="fa fa-square" aria-hidden="true"><span>FATHERS DAY </span></i></Link>
          </ul>
          </div>
      </div> 
    </>
  )
}

export default Categories
