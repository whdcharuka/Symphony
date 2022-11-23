import React from "react"
import { Link } from "react-router-dom"
import '../Categories.css';
import '../../Cards.css';
import CardItem from '../../CardItem';

const Categories = () => {
  const data = [
    {
      path:"/Vehicalparts",
      cateImg: "./images/Categories/car.png",
      // cateName: "Vehical Parts",
    },
    {
      path:"/ElectronicDevices",
      cateImg: "./images/Categories/smartphone (2).png",
      // cateName: "Electronics",
    },
    {
      path:"/HomeGarden",
      cateImg: "./images/Categories/house.png",
      // cateName: "Home & Garden",
    }, 
    {
      path:"Animals",
      cateImg: "./images/Categories/cat.png",
      // cateName: "Pets",
    },
    {
      path:"/Toys",
      cateImg: "./images/Categories/toys.png",
      // cateName: "Toys",
    },
    {
      path:"/HobbySport",
      cateImg: "./images/Categories/sports.png",
      // cateName: "Hobby & Sport",
    },
    {
      path:"/Foods",
      cateImg: "./images/Categories/burger.png",
      // cateName: "Foods",
    },
    {
      path:"/Education",
      cateImg: "./images/Categories/education.png",
      // cateName: "Education",
    },
    {
      path:"/Essentials",
      cateImg: "./images/Categories/essential-oil.png",
      // cateName: "Essentials",          
    },
    {
      path:"/FashionBeauty",
      cateImg: "./images/Categories/dress.png",
      // cateName: "Fashion",
    },
    {
      path:"/Gifts",
      cateImg: "./images/Categories/giftbox.png",
      // cateName: "Gifts",
    },
    {
      path:"/Music",
      cateImg: "./images/Categories/guitar.png",
      // cateName: "Music",
    },
  ]

  return (
    <>
    <div >
      <div >
        <div >

    <ul className='cards__items'>
      <div className='category1'>
        {data.map((value, index) => {
          return (
            <Link to={value.path} className='abc'>
              <div className='box f_flex' key={index}>
                  <img src={value.cateImg} alt='' />
                  <span>{value.cateName}</span>    
              </div>
            </Link>
          )
        })}
      </div>
      </ul>
      </div>
      </div>
      </div>
    </>
  )
}

export default Categories


