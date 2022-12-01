import React from "react"
import "../pages/Wrapper.css"
import '../../App.css';
import { Link } from "react-router-dom"
import TyCategories from "./TyCategories"

const Wrapper = () => {
  const data = [
    {
      path:"./Vp1",
      cateImg: "./images/Toys/13.jpg",
      title: "Horn ",
      brand:"Apple",
      model:"single",
      decs: "You can use decorate your table Table suitable",
      phone:"021548936",
      email:"ergset@gmail.com",
    },
    {
      path:"./Vp2",
      cateImg: "./images/Toys/14.jpg",
      title: "Air filter ",
      brand:"Apple",
      model:"single",
      decs: "You can use decorate your table Table suitable",
      phone:"021548936",
      email:"ergset@gmail.com",
    },
    {
      path:"./Vp3",
      cateImg: "./images/Toys/15.jpg",
      title: "Fuel filter ",
      brand:"Apple",
      model:"single",
      decs: "You can use decorate your table Table suitable",
      phone:"021548936",
      email:"ergset@gmail.com",
    },
    {
      path:"./Vp4",
      cateImg: "./images/Toys/16.jpg",
      title: "Oil filter ",
      brand:"Apple",
      model:"single",
      decs: "You can use decorate your table Table suitable",
      phone:"021548936",
      email:"ergset@gmail.com",
    },
  ]
  return (
    <>
    <h1 className='qwe3'>Bicycle</h1>
      <TyCategories />
      <section className='wrapper wbackground'>
        <div className='wcontainer1 grid9'>
          {data.map((val, index) => {
            return (
              <div className='vpproduct' key={index}>
                <div>
                <img src={val.cateImg} alt='' />
                </div>
                <h3>{val.title}</h3>
                <p>{val.brand}</p>
                <p>{val.model}</p>
                <p>{val.decs}</p>
                <p>Whatsapp : {val.phone}</p>
                <p>{val.email}</p>
                <link rel = "canonical" href = "https://www.javatpoint.com/"  />    
                <Link to={val.phone}><button className='btn--medium'>CONTACT</button></Link>
              </div>
            ) 
          })}
        </div>
      </section> 
    </>
  )
}

export default Wrapper