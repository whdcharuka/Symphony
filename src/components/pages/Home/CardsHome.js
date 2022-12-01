// import React from 'react';
// import '../../Cards.css';
// import CardItem from '../../CardItem';

// function CardsHome() {
//   return (
//     <div className='cards'>
//       <h1>Browse items by category</h1>
//         <div className='cards__container'>
//           <div className='cards__wrapper'>
//             <ul className='cards__items'>
//               <CardItem
//                 src='images/Categories/car.png'
//                 text='Vehicle Parts'
//                 path='/vehicalparts'
//               />
//               <CardItem
//                 src='images/Categories/smartphone (2).png'
//                 text='Electronic Devices'
//                 path='/ElectronicDevices'
//               />
//               <CardItem
//                 src='images/Categories/house.png'
//                 text='Home & Garden'
//                 path='/HomeGarden'
//               />
//               <CardItem
//                 src='images/Categories/cat.png'
//                 text='Pets'
//                 path='/Animals'
//               />
//             </ul>
//           <ul className='cards__items'>
//             <CardItem
//               src='images/Categories/toys.png'
//               text='Toys'
//               path='/Toys'
//             />
//             <CardItem
//               src='images/Categories/sports.png'
//               text='Hobby & Sport'
//               path='/HobbySport'
//             />
//             <CardItem
//               src='images/Categories/burger.png'
//               text='Foods'
//               path='/Foods'
//             />
//             <CardItem
//               src='images/Categories/education.png'
//               text='Education'
//               path='/Education'
//             />
//           </ul>
//           <ul className='cards__items'>
//             <CardItem
//               src='images/Categories/essential-oil.png'
//               text='Essentials'
//               path='/Essentials'
//             />
//             <CardItem
//               src='images/Categories/dress.png'
//               text='Fashion & Beauty'
//               path='/FashionBeauty'
//             />
//             <CardItem
//               src='images/Categories/giftbox.png'
//               text='Gifts'
//               path='/Gifts'
//             />
//             <CardItem
//               src='images/Categories/guitar.png'
//               text='Music'
//               path='/Music'
//             />
//           </ul>
//         </div>
//       </div>
//   </div>
//   );
// }

// export default CardsHome;

import React from "react"
import "../Wrapper.css"
import { Link } from "react-router-dom"

const Wrapper = () => {
  const data = [
    {
      cateImg: "./images/Categories/car.png",
      title: "Vehical Parts",
      path:"./Vehicalparts",
    },
    {
      cateImg: "./images/Categories/smartphone (2).png",
      title: "Electronics",
      path:"./ElectronicDevices",
    },
    {
      cateImg: "./images/Categories/house.png",
      title: "Home & Garden",
      path:"./HomeGarden",
    },
    {
      cateImg: "./images/Categories/cat.png",
      title: "Pets",
      path:"./Animals",
    },
    {
      cateImg: "./images/Categories/toys.png",
      title: "Toys",
      path:"/Toys",
    },
    {
      cateImg: "./images/Categories/sports.png",
      title: "Hobby & Sport",
      path:"./HobbySport",
    },
    {
      cateImg: "./images/Categories/burger.png",
      title: "Food",
      path:"./Foods",
    },
    {
      cateImg: "./images/Categories/education.png",
      title: "Education",
      path:"./Education",
    },
    {
      cateImg: "./images/Categories/essential-oil.png",
      title: "Essentials",
      path:"./Essentials",
    },
    {
      cateImg: "./images/Categories/dress.png",
      title: "Fashion & Beauty",
      path:"./FashionBeauty",
    },
    {
      cateImg: "./images/Categories/giftbox.png",
      title: "Gifts",
      path:"./Gifts",
    },
    {
      cateImg: "./images/Categories/guitar.png",
      title: "Music",
      path:"./Music",
    },
  ]
  return (
    <>
      <section className='wrapper123 wbackground123'>
      <h1 className="how1">Browse items by category</h1>
        <div className='wcontainer grid5'>
          {data.map((val, index) => {
            return (
              <div key={index}>
                <div className="category1">
                 <img src={val.cateImg} alt='' />
                </div>
                <Link to={val.path}><h3>{val.title}</h3></Link>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Wrapper

