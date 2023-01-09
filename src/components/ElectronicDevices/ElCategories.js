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
            <Link to="./Mobile"><i class="fa fa-square" aria-hidden="true"><span>MOBILE PHONES</span></i></Link>
            <Link to="./Tele"><i class="fa fa-square" aria-hidden="true"><span>TELEVISIONS</span></i></Link>
            <Link to="./Com"><i class="fa fa-square" aria-hidden="true"><span>COMPUERS</span></i></Link>
            <Link to="./Air"><i class="fa fa-square" aria-hidden="true"><span>AIR CONDITIONS</span></i></Link>
            <Link to="./Game"><i class="fa fa-square" aria-hidden="true"><span>GAMING CONSOLES</span></i></Link>
          </ul>
          </div>
      </div> 
    </>
  )
}

export default Categories