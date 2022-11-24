import React from "react"
import { Link } from "react-router-dom"
import './Categories.css';

const Categories = () => {
  const data = [
    {
      path:"/Engine",
      cateImg: "./images/Categories/car.png",
      cateName: "Engine",
    },
    {
      path:"/Battery",
      cateImg: "./images/Categories/car.png",
      cateName: "Battery",
    },
    {
      path:"/Wheel",
      cateImg: "./images/Categories/car.png",
      cateName: "Wheel",
    }, 
    {
      path:"Fuel Tank",
      cateImg: "./images/Categories/car.png",
      cateName: "Fuel Tank",
    },
    {
      path:"/Windscreen",
      cateImg: "./images/Categories/car.png",
      cateName: "Windscreen",
    },
    {
      path:"/Windshield wipers",
      cateImg: "./images/Categories/car.png",
      cateName: "Windshield wipers",
    },
    {
      path:"/Seat belt",
      cateImg: "./images/Categories/car.png",
      cateName: "Seat belt",
    },
    {
      path:"/Radiator",
      cateImg: "./images/Categories/car.png",
      cateName: "Radiator",
    },
    {
      path:"/Gear Lever",
      cateImg: "./images/Categories/car.png",
      cateName: "Gear Lever",          
    },
    {
      path:"/Muffler",
      cateImg: "./images/Categories/car.png",
      cateName: "Muffler",
    },
    {
      path:"/Alternator",
      cateImg: "./images/Categories/car.png",
      cateName: "Alternator",
    },
    {
      path:"/Front Axle",
      cateImg: "./images/Categories/car.png",
      cateName: "Front Axle",
    },
  ]

  return (
    <>
      <div className='vcategory'>
      <h3 className='types'>Types</h3>
        {data.map((value, index) => {
          return (
            <Link to={value.path} className='abc'>
              <div className='box f_flex1' key={index}>
              <i class="fa fa-square" aria-hidden="true"><span>{value.cateName}</span> </i>
                  {/* <img src={value.cateImg} alt='' /> */}
                  {/* <span>{value.cateName}</span>     */}
              </div>
            </Link>
          )
        })}
      </div>
    </>
  )
}

export default Categories


