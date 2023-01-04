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
            <Link to="./TeddyBear"><i class="fa fa-square" aria-hidden="true"><span>TEDDY BEAR</span></i></Link>
            <Link to="./Bicycle"><i class="fa fa-square" aria-hidden="true"><span>BICYCLES</span></i></Link>
            <Link to="./Car"><i class="fa fa-square" aria-hidden="true"><span>CAR ITEMS</span></i></Link>
            <Link to="./Doll"><i class="fa fa-square" aria-hidden="true"><span>DOLLS</span></i></Link>
            <Link to="./AnimalToy"><i class="fa fa-square" aria-hidden="true"><span>ANIMAL TOYS</span></i></Link>
          </ul>
          </div>
      </div> 
    </>
  )
}

export default Categories


