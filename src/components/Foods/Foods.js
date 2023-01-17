import React from "react"
import Categories from "../pages/Categories"
import SliderHome from "./Slider"
import FdCategories from "./FdCategories"

const Home = () => {
  return (
    <>
      <div className='cow2'>
        <Categories />
      </div>
      <div className='cow3'>
        <FdCategories />
      </div>
        <div className='container d_flex'>
          <SliderHome />
        </div>
    </>
  )
}

export default Home
