import React from "react"
import Categories from "../pages/Categories"
import VpCategories from './VpCategories';
import "../pages/Home.css"
import SliderHome from "./Slider"

const Home = () => {
  return (
    <>
      <section className='home'>
      <Categories />
      {/* <VpCategories /> */}
        <div className='container d_flex'>
          <SliderHome />
        </div>
      </section>
    </>
  )
}

export default Home
