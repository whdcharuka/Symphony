import React from "react"
import Categories from "../pages/Categories"
import SliderHome from "./Slider"
import GiCategories from "./GiCategories"

const Home = () => {
  return (
    <>
      <div className='cow2'>
        <Categories />
      </div>
      <div className='cow3'>
        <GiCategories />
      </div>
        <div className='container d_flex'>
          <SliderHome />
        </div>
    </>
  )
}

export default Home