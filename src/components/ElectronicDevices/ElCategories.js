import React from "react"
import { Link } from "react-router-dom"
import '../pages/SubCategories.css';

const Categories = () => {
  const data = [
    {
      path:"/Mobile",
      cateName: "MOBILE PHONES",
    },
    {
      path:"/",
      cateName: "TELEVISIONS",
    },
    {
      path:"/",
      cateName: "COMPUERS",
    }, 
    {
      path:"/ ",
      cateName: "AIR CONDITIONS",
    },
    {
      path:"/",
      cateName: "GAMING CONSOLES",
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


