import React from "react"
import { Link } from "react-router-dom"
import '../pages/SubCategories.css';

const Categories = () => {
  const data = [
    {
      path:"/Engine",
      cateName: "ENGINE",
    },
    {
      path:"/Battery",
      cateName: "BATTERY",
    },
    {
      path:"/Wheel",
      cateName: "WHEEL",
    }, 
    {
      path:"Fuel Tank",
      cateName: "FUEL TANK",
    },
    {
      path:"/Windscreen",
      cateName: "WINDSCREEN",
    },
  ]
  return (
    <>
      <div className='vcategory'>
      <h3 className='types'>TYPES</h3>
        {data.map((value, index) => {
          return (
            <Link to={value.path} >
              <div className='box f_flex1' key={index}>
              <i class="fa fa-square" aria-hidden="true"><span>{value.cateName}</span></i>
              </div>
            </Link>
          )
        })}
      </div> 
    </>
  )
}

export default Categories

// import React from "react"
// import { Link } from "react-router-dom"
// import '../pages/Categories.css';

// const Categories = () => {
//   const data = [
//     {
//       path:"/Engine",
//       cateImg: "./images/Categories/engineering.png",
//       cateName: "ENGINE",
//     },
//     {
//       path:"/Battery",
//       cateImg: "./images/Categories/accumulator.png",
//       cateName: "BATTERY",
//     },
//     {
//       path:"/Wheel",
//       cateImg: "./images/Categories/truck-wheel.png",
//       cateName: "WHEEL",
//     }, 
//     {
//       path:"./Fueltank",
//       cateImg: "./images/Categories/oil-tank.png",
//       cateName: "FUEL TANK",
//     },
//     {
//       path:"/windscreen",
//       cateImg: "./images/Categories/windscreen.png",
//       cateName: "WINDSCREEN",
//     },
//   ]

//   return (
//     <>
//       <div className='subcategory'>
//         {data.map((value, index) => {
//           return (
//             <Link to={value.path} className='abc'>
//               <div className='box f_flex' key={index}>
//                   <img src={value.cateImg} alt='' />
//                   <span>{value.cateName}</span>   
//               </div>
//             </Link>
//           )
//         })}
//       </div>
//     </>
//   )
// }

// export default Categories


