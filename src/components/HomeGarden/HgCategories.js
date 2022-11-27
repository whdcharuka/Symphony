import React from "react"
import { Link } from "react-router-dom"
import '../pages/SubCategories.css';

const Categories = () => {
  const data = [
    {
      path:"/Furniture",
      cateName: "FURNITURE",
    },
    {
      path:"/Battery",
      cateName: "KITCHEN ITEMS",
    },
    {
      path:"/Wheel",
      cateName: "GARDEN ITEMS",
    }, 
    {
      path:"Fuel Tank",
      cateName: "BATHROOM ITEMS",
    },
    {
      path:"/Windscreen",
      cateName: "BUILDING ITEMS",
    },
  ]

  return (
    <>
      <div className='vcategory'>
      <h3 className='types'>TYPES</h3>
        {data.map((value, index) => {
          return (
            <Link to={value.path} className='abc'>
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


