import React from "react"
import Categories from "../pages/Categories"
import SliderHome from "./Slider"
import EdCategories from "./EdCategories"

const Home = () => {
  return (
    <>
      <div className='cow2'>
        <Categories />
      </div>
      <div className='cow3'>
        <EdCategories />
      </div>
        <div className='container d_flex'>
          <SliderHome />
        </div>
    </>
  )
}

export default Home