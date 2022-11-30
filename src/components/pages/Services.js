import React from "react"
import "./Wrapper.css"

const Wrapper = () => {
  const data = [
    {
      cover: <i class="fa fa-truck" aria-hidden="true"></i>,
      title: "Fast Delivery",
      decs: "We provide lslandwide delivery within 4-7 days.",
    },
    {
      cover: <i class="fa fa-archive" aria-hidden="true"></i>,
      title: "Quality Product",
      decs: "We sell genuine products with company authorized.",
    },
    {
      cover: <i class="fa fa-thumbs-up" aria-hidden="true"></i>,
      title: "Shop With Confidence ",
      decs: "Confident and active online services.",
    },
    {
      cover: <i class="fa fa-headphones" aria-hidden="true"></i>,
      title: "24/7 Support ",
      decs: "Call our hotlines during office hours for any questions or inquiries.",
    },
  ]
  return (
    <>
      <section className='wrapper wbackground'>
        <div className="mklp">
          <h1>Our Services</h1>
            <img src='images/Customer-Service.jpg' />
        </div>
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