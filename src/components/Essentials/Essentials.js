import React from "react"
import Categories from "../pages/Categories"
import EsCategories from './EsCategories';
import SliderHome from "./Slider"

const Home = () => {
  return (
    <>
      <div className='cow2'>
        <Categories />
      </div>
      <div className='cow3'>
        <EsCategories />
      </div>
        <div className='container d_flex'>
          <SliderHome />
        </div>
    </>
  )
}

export default Home