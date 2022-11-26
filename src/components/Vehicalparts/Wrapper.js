import React from "react"
import "./rapper.css"
import { Link } from "react-router-dom"

const Wrapper = () => {
  const data = [
    {
      path:"/Engine",
      wvcateImg: "./images/Vehicalparts/wiper bush.jpg",
      title: "HORN",
      decs: "VIEW",
    },
    {
      path:"/Vehicalparts",
      wvcateImg: "./images/Vehicalparts/horn.jpg",
      title: "HORN",
      decs: "VIEW",
    },
    {
      path:"/Vehicalparts",
      wvcateImg: "./images/Vehicalparts/horn.jpg",
      title: "HORN",
      decs: "VIEW",
    },
    {
      path:"/Vehicalparts",
      wvcateImg: "./images/Vehicalparts/horn.jpg",
      title: "HORN",
      decs: "VIEW",
    },
    {
      path:"/Vehicalparts",
      wvcateImg: "./images/Vehicalparts/horn.jpg",
      title: "HORN",
      decs: "VIEW",
    },
    {
      path:"/Vehicalparts",
      wvcateImg: "./images/Vehicalparts/horn.jpg",
      title: "HORN",
      decs: "VIEW",
    },
  ]
  return (
    <>
      <section className='rapper rbackground'>
      <h6>VEHICAL PARTS<Link to='/All'><button className='btn1'>All</button></Link></h6>
        <div className='grid3'>
          {data.map((val, index) => {
            return (
              <Link to={val.path}>
                <div className='wproduct' key={index}>
                  <div>
                  <img src={val.wvcateImg} alt='' />
                  </div>
                  <h4 className="vehicalname">{val.title}</h4>
                  {/* <p>{val.decs}</p> */}
                </div>
              </Link>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Wrapper
