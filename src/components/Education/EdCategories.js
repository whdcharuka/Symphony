import React from "react"
import { Link } from "react-router-dom"
import '../pages/SubCategories.css';

const Categories = () => {
  const data = [
    {
      path:"/School",
      cateName: "SCHOOL BAGS",
    },
    {
      path:"/",
      cateName: "WATER BOTTLES",
    },
    {
      path:"/",
      cateName: "STATIONARIES",
    }, 
    {
      path:"/ ",
      cateName: "PENCIL CACE",
    },
    {
      path:"/",
      cateName: "NOTE BOOKS",
    },
    {
      path:"/",
      cateName: "STORY BOOKS",
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


