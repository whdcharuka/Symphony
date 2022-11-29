import React from "react"
import "../pages/Wrapper.css"
import '../../App.css';
import { Link } from "react-router-dom"
import VpCategories from "./VpCategories"

const Wrapper = () => {
  const data = [
    {
      path:"./Vp1",
      cateImg: "./images/vehicalparts/1.jpg",
      title: "AMM42R/EFB50B20R WAGON R(40ah)",
      brand:"AMARON",
      model:"EFB50B20R",
      decs: "Voltage : 12v | Current : 35 AH",
      phone:"+94 762 559 389",
      email:"ysiru@gmail.com",
    },
    {
      path:"./Vp2",
      cateImg: "./images/vehicalparts/2.jpg",
      title: "95D26RL3YRINDIA 70AH",
      brand:"EMTRAC",
      model:"95D26RL3YRINDIA",
      decs: "Best selling battery in Sri Lanka",
      phone:"+94 762 559 389",
      email:"ergset@gmail.com",
    },
    {
      path:"./Vp3",
      cateImg: "./images/vehicalparts/3.jpg",
      title: "YB7B-BSMF1YRTHAILAND",
      brand:"LEADZ",
      model:"YB7B",
      decs: "Best selling MC battery in sri lanka",
      phone:"+94 762 559 389",
      email:"ergset@gmail.com",
    },
    {
      path:"./Vp4",
      cateImg: "./images/vehicalparts/4.jpg",
      title: "EXMF105D31RL2YR(90ah)",
      brand:"EXIDE",
      model:"single",
      decs: "MF105D31R/L | Voltage :12v |  Current :90 Ah",
      phone:"+94 762 559 389",
      email:"ergset@gmail.com",
    },
  ]
  return (
    <>
    <h1 className='qwe3'>Engine Items</h1>
      <VpCategories />
      <section className='wrapper wbackground'>
        <div className='wcontainer1 grid9'>
          {data.map((val, index) => {
            return (
              <div className='vpproduct' key={index}>
                <div>
                <img src={val.cateImg} alt='' />
                </div>
                <h3>{val.title}</h3>
                <p>Brand: {val.brand}</p>
                <p>Model : {val.model}</p>
                <p>{val.decs}</p>
                <p>Whatsapp : {val.phone}
                <br></br>email : {val.email}</p>
                <p><link rel = "canonical" href = "https://www.javatpoint.com/"  />    
                   <Link to={val.phone}><button className='btn--medium'>CONTACT</button></Link></p>
              </div>
            ) 
          })}
        </div>
      </section> 
    </>
  )
}

export default Wrapper