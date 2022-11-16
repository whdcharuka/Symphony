import React from 'react';
import '../../App.css';

function Description() {
  return (
    <>
      <div className='description'>
        <p>Brand: Apple <br></br>
          Model: Model <br></br>
          Description: Description <br></br><br></br>
          Contact Deatils <br></br>
            <img src='images/contact.png'></img> Oshadi <br></br>
            <img src='images/email.png'></img> Oshadi@gmail.com <br></br>
            <img src='images/phone-call.png'></img> 0761552389 <br></br>
            </p>
      </div>
    </>
  );
}

export default Description;


// import React from "react"
// import { Link } from "react-router-dom"
// import './Categories.css';

// const Categories = () => {
//   const data = [
//     {
//       cateImg: "./images/category/cat1.png",
//       cateName: "Oshadi",
//     },
//     {
//       cateImg: "./images/category/cat2.png",
//       cateName: "Oshadi@gmail.com",
//     },
//     {
//       cateImg: "./images/category/cat3.png",
//       cateName: "0751195563",
//     },
//   ]

//   return (
//     <>
//       <div className='contact'>
//         {data.map((value, index) => {
//           return (
//             <div className='box f_flex' key={index}>
//               <img src={value.cateImg} alt='' />
//               <span>{value.cateName}</span>    
//             </div>
//           )
//         })}
//       </div>
//     </>
//   )
// }

// export default Categories
