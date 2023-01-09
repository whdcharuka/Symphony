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
            <Link to="./Christmas"><i class="fa fa-square" aria-hidden="true"><span>CHRISTMAS ITEMS</span></i></Link>
            <Link to="./New"><i class="fa fa-square" aria-hidden="true"><span>NEW YEAR ITEMS</span></i></Link>
            <Link to="./Mother"><i class="fa fa-square" aria-hidden="true"><span>MOTHERS DAY</span></i></Link>
            <Link to="./Valentine"><i class="fa fa-square" aria-hidden="true"><span>VALENTINES</span></i></Link>
            <Link to="./Father"><i class="fa fa-square" aria-hidden="true"><span>FATHERS DAY </span></i></Link>
          </ul>
          </div>
      </div> 
    </>
  )
}

export default Categories
