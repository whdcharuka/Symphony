import React from "react"
import { Link } from "react-router-dom"
import '../../App.css';

const Categories = () => {
  
  return (
    <>
      <div className='vcategory'>
      <h3 className='types'>TYPES</h3>
        <div className='box '>
          <ul>
            <Link to="./Beverage"><i class="fa fa-square" aria-hidden="true"><span>BEVERAGES</span></i></Link>
            <Link to="./Snack"><i class="fa fa-square" aria-hidden="true"><span>SNACKS</span></i></Link>
            <Link to="./Sweet"><i class="fa fa-square" aria-hidden="true"><span>SWEETS </span></i></Link>
            <Link to="./Vegi"><i class="fa fa-square" aria-hidden="true"><span>VEGITABLES</span></i></Link>
            <Link to="./Cake"><i class="fa fa-square" aria-hidden="true"><span>CAKE</span></i></Link>
          </ul>
          </div>
      </div> 
    </>
  )
}

export default Categories

