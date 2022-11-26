import React from "react"
import "./Wrapper.css"

const Wrapper = () => {
  const data = [
    {
      cover: <i class="fa fa-truck" aria-hidden="true"></i>,
      title: "Fast Delivery",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <i class="fa fa-archive" aria-hidden="true"></i>,
      title: "Quality Product",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <i class="fa fa-thumbs-up" aria-hidden="true"></i>,
      title: "Shop With Confidence ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <i class="fa fa-headphones" aria-hidden="true"></i>,
      title: "24/7 Support ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
  ]
  return (
    <>
      <section className='wrapper wbackground'>
        <div className='wcontainer grid2'>
          {data.map((val, index) => {
            return (
              <div className='wproduct' key={index}>
                <div className='img wicon-circle'>
                  <i>{val.cover}</i>
                </div>
                <h3>{val.title}</h3>
                <p>{val.decs}</p>
              </div>
            )
          })}
        </div>
      </section> 
    </>
  )
}

export default Wrapper
