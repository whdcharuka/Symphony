import React from "react"
import "./HomeWrapper.css"

const Wrapper = () => {
  const data = [
    {
      cover: <i class="fa fa-user" aria-hidden="true"></i>,
      title: "Free Account",
      decs: "You can create free account in symphony.lk.",
    },
    {
      cover: <i class="fa fa-check-circle" aria-hidden="true"></i>,
      title: "Post Add",
      decs: "Post ads about any items you need to share online.",
    },
    {
      cover: <i class="fa fa-shopping-bag" aria-hidden="true"></i>,
      title: "Free Items",
      decs: "Select the best item you want for free.",
    },
    {
      cover: <i class="fa fa-share" aria-hidden="true"></i>,
      title: "Sharing",
      decs: "Share your items with others & grow community.",
    },
  ]
  return (
    <>
      <section className='wrapper wbackground'>
      <h1 class='how'>How It Works?</h1>
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
