import React from "react"
import Categories from "../pages/Categories"
import SliderHome from "./Slider"
import AnCategories from "./AnCategories"

const Home = () => {
  return (
    <>
      <div className='cow2'>
        <Categories />
      </div>
      <div className='cow3'>
        <AnCategories />
      </div>
        <div className='container d_flex'>
          <SliderHome />
        </div>
    </>
  )
}

export default Home