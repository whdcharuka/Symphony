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
    <h6>ESSENTIALS<Link to='/All'><button className='btn1'>All</button></Link></h6>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Essentialss/.jpg'
              text=''
              path='/Es1'
            />
            <CardItem
              src='images/Essentialss/.jpg'
              text=''
              path='/Es2'
            />
            <CardItem
              src='images/Essentialss/.jpg'
              text=''
              path='/Es3'
            />
            <CardItem
              src='images/Essentialss/.jpg'
              text=''
              path='/Es4'
            />
            {/* <CardItem
              src='images/Essentialss/.jpg'
              text=''
              path='/Es5'
            /> */}
          </ul> 
          <ul className='cards__items'>
            <CardItem
              src='images/Essentialss/.jpg'
              text=''
              path='/Es6'
            />
            <CardItem
              src='images/Essentialss/.jpg'
              text=''
              path='/Es7'
            />
            <CardItem
              src='images/Essentialss/.jpg'
              text=''
              path='/Es8'
            />
            <CardItem
              src='images/Essentialss/.jpg'
              text=''
              path='/Es9'
            />
            {/* <CardItem
              src='images/Essentialss/.jpg'
              text=''
              path='/Es10'
            /> */}
          </ul>       
          </div>
        </div>
      </div>
  );
}