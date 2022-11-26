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
    <h6>FOODS<Link to='/All'><button className='btn1'>All</button></Link></h6>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Foods/.jpg'
              text=''
              path='/Fd1'
            />
            <CardItem
              src='images/Foods/.jpg'
              text=''
              path='/Fd2'
            />
            <CardItem
              src='images/Foods/.jpg'
              text=''
              path='/Fd3'
            />
            <CardItem
              src='images/Foods/.jpg'
              text=''
              path='/Fd4'
            />
            {/* <CardItem
              src='images/Foods/.jpg'
              text=''
              path='/Fd5'
            /> */}
          </ul> 
          <ul className='cards__items'>
            <CardItem
              src='images/Foods/.jpg'
              text=''
              path='/Fd6'
            />
            <CardItem
              src='images/Foods/.jpg'
              text=''
              path='/Fd7'
            />
            <CardItem
              src='images/Foods/.jpg'
              text=''
              path='/Fd8'
            />
            <CardItem
              src='images/Foods/.jpg'
              text=''
              path='/Fd9'
            />
            {/* <CardItem
              src='images/Foods/.jpg'
              text=''
              path='/Fd10'
            /> */}
          </ul>       
          </div>
        </div>
      </div>
  );
}