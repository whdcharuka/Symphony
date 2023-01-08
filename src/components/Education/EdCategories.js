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
            <Link to="./School"><i class="fa fa-square" aria-hidden="true"><span>SCHOOL BAGS</span></i></Link>
            <Link to="./Bottle"><i class="fa fa-square" aria-hidden="true"><span>WATER BOTTLES</span></i></Link>
            <Link to="./Stat"><i class="fa fa-square" aria-hidden="true"><span>STATIONARIES</span></i></Link>
            <Link to="./Note"><i class="fa fa-square" aria-hidden="true"><span>NOTE BOOKS</span></i></Link>
            <Link to="./Story"><i class="fa fa-square" aria-hidden="true"><span>STORY BOOKS</span></i></Link>
          </ul>
          </div>
      </div> 
    </>
  )
}

export default Categories