import React from "react"
import "../Wrapper.css"

const Wrapper = () => {
  const data = [
    {
      cover: <i class="fa fa-truck" aria-hidden="true"></i>,
      title: "About our Company",
      decs: "SLT Symphony is one of the Largest Online sharing Marketplaces in Sri Lanka that offers perfect classified advertisements to build your own businesses.",
      decs1: "This platform is uniquely designed to promote your advertisements and consumers can easily browse through all categories and locations.",
    },
    {
      cover: <i class="fa fa-archive" aria-hidden="true"></i>,
      title: "What we do",
      decs: "Our main goal is to Share what we have and finding what we want through the app. SLT symphony is specialized in promoting your advertisements to millions of users.",
      decs1: "We manually review at the advertisements before publishing in our platform in order to make sure the quality is up to our standards. Contact Us for more details.",
    },
  ]
  return (
    <>
      <section className='wrapper wbackground'>
        <div className="mklp">
          <h1>About Symphony</h1>
            <img src='images/aboutus.jpg' />
        </div>
        <div className='wcontainer grid7'>
          {data.map((val, index) => {
            return (
              <div className='wproduct' key={index}>
                <p className="how5">{val.title}</p>
                  <p>{val.decs}</p>
                  <p>{val.decs1}</p>
              </div>
            )
          })}
        </div>
      </section> 
    </>
  )
}

export default Wrapper