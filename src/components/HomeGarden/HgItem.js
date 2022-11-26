import React from 'react'
import '../pages/Login.css';
import { useForm } from 'react-hook-form';
import CardItem from '../CardItem';
import { Link } from 'react-router-dom';

export default function Form() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);
    
  return (
    <div className='cards'>
    <h6>HOME & GARDEN<Link to='/All'><button className='btn1'>All</button></Link></h6>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/HomeGarden/.jpg'
              text=''
              path='/Hg1'
            />
            <CardItem
              src='images/HomeGarden/.jpg'
              text=''
              path='/Hg2'
            />
            <CardItem
              src='images/HomeGarden/.jpg'
              text=''
              path='/Hg3'
            />
            <CardItem
              src='images/HomeGarden/.jpg'
              text=''
              path='/Hg4'
            />
            {/* <CardItem
              src='images/HomeGarden/.jpg'
              text=''
              path='/Hg5'
            /> */}
          </ul> 
          <ul className='cards__items'>
            <CardItem
              src='images/HomeGarden/.jpg'
              text=''
              path='/Hg6'
            />
            <CardItem
              src='images/HomeGarden/.jpg'
              text=''
              path='/Hg7'
            />
            <CardItem
              src='images/HomeGarden/.jpg'
              text=''
              path='/Hg8'
            />
            <CardItem
              src='images/HomeGarden/.jpg'
              text=''
              path='/Hg9'
            />
            {/* <CardItem
              src='images/HomeGarden/.jpg'
              text=''
              path='/Hg10'
            /> */}
          </ul>       
          </div>
        </div>
      </div>
  );
}