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
            <Link to="./Engine"><i class="fa fa-square" aria-hidden="true"><span>ENGINE</span></i></Link>
            <Link to="./Battery"><i class="fa fa-square" aria-hidden="true"><span>BATERY</span></i></Link>
            <Link to="./Wheel"><i class="fa fa-square" aria-hidden="true"><span>WHEEL</span></i></Link>
            <Link to="./Fuel"><i class="fa fa-square" aria-hidden="true"><span>FUEL TANK</span></i></Link>
            <Link to="./Screen"><i class="fa fa-square" aria-hidden="true"><span>WINDSCREEN</span></i></Link>
          </ul>
          </div>
      </div> 
    </>
  )
}

export default Categories

