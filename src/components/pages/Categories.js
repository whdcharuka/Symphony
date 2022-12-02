import React from "react"
import { Link } from "react-router-dom"
import '../../App.css';

const Categories = () => {
  const data = [
    {
      path:"/Vehicalparts",
      cateImg: "./images/Categories/car.png",
      cateName: "VEHICAL PARTS",
    },
    {
      path:"/ElectronicDevices",
      cateImg: "./images/Categories/smartphone (2).png",
      cateName: "ELECTRONICS",
    },
    {
      path:"/HomeGarden",
      cateImg: "./images/Categories/house.png",
      cateName: "HOME & GARDEN",
    }, 
    {
      path:"Animals",
      cateImg: "./images/Categories/cat.png",
      cateName: "PETS",
    },
    {
      path:"/Toys",
      cateImg: "./images/Categories/toys.png",
      cateName: "TOYS",
    },
    {
      path:"/HobbySport",
      cateImg: "./images/Categories/sports.png",
      cateName: "HOBBY & SPORT",
    },
    {
      path:"/Foods",
      cateImg: "./images/Categories/burger.png",
      cateName: "FOODS",
    },
    {
      path:"/Education",
      cateImg: "./images/Categories/education.png",
      cateName: "EDUCATION",
    },
    {
      path:"/Essentials",
      cateImg: "./images/Categories/essential-oil.png",
      cateName: "ESSENTIALS",          
    },
    {
      path:"/FashionBeauty",
      cateImg: "./images/Categories/dress.png",
      cateName: "FASHION",
    },
    {
      path:"/Gifts",
      cateImg: "./images/Categories/giftbox.png",
      cateName: "GIFTS",
    },
    {
      path:"/Music",
      cateImg: "./images/Categories/guitar.png",
      cateName: "MUSIC",
    },
  ]

  return (
    <>
      <div className='category'>
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
    </>
  )
}

export default Categories


