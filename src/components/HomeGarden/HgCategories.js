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
            <Link to="./Furniture"><i class="fa fa-square" aria-hidden="true"><span>FURNITURE</span></i></Link>
            <Link to="./Kitchen"><i class="fa fa-square" aria-hidden="true"><span>KITCHEN ITEMS</span></i></Link>
            <Link to="./Garden"><i class="fa fa-square" aria-hidden="true"><span>GARDEN ITEMS</span></i></Link>
            <Link to="./Bathroom"><i class="fa fa-square" aria-hidden="true"><span>BATHROOM ITEMS</span></i></Link>
            <Link to="./Building"><i class="fa fa-square" aria-hidden="true"><span>BUILDING ITEMS</span></i></Link>
          </ul>
          </div>
      </div> 
    </>
  )
}

export default Categories



