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
            <Link to="./Cat"><i class="fa fa-square" aria-hidden="true"><span>CATS</span></i></Link>
            <Link to="./Petfood"><i class="fa fa-square" aria-hidden="true"><span>PET FOODS</span></i></Link>
            <Link to="./Dog"><i class="fa fa-square" aria-hidden="true"><span>DOGS</span></i></Link>
            <Link to="./Farm"><i class="fa fa-square" aria-hidden="true"><span>FARM ANIMALS</span></i></Link>
            <Link to="./Fish"><i class="fa fa-square" aria-hidden="true"><span>FISH</span></i></Link>
          </ul>
          </div>
      </div> 
    </>
  )
}

export default Categories