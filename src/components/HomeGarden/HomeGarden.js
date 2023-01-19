import React from "react"
import Categories from "../pages/Categories"
import SliderHome from "./Slider"
import HgCategories from "./HgCategories"

const Home = () => {
  return (
    <>
      <div className='cow2'>
        <Categories />
      </div>
      <div className='cow3'>
        <HgCategories />
      </div>
        <div className='container d_flex'>
          <SliderHome />
        </div>
    </>
  )
}

export default Home