import React from 'react'
import './Login.css';
import { useForm } from 'react-hook-form';
import CardItem from '../CardItem';

export default function Form() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);
    
  return (
    <div className='cards'>
    <h6>Hobby & Sport</h6>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/HobbySport/car.png'
              text='Details'
              path='/Itemview'
            />
            <CardItem
              src='images/HobbySport/smartphone (2).png'
              text='Details'
              path='/Itemview'
            />
            <CardItem
              src='images/HobbySport/house.png'
              text='Details'
              path='/Itemview'
            />
            <CardItem
              src='images/HobbySport/smartphone (2).png'
              text='Details'
              path='/Itemview'
            />
            <CardItem
              src='images/HobbySport/house.png'
              text='Details'
              path='/Itemview'
            />
          </ul> 
          <ul className='cards__items'>
            <CardItem
              src='images/HobbySport/car.png'
              text='Details'
              path='/Itemview'
            />
            <CardItem
              src='images/HobbySport/smartphone (2).png'
              text='Details'
              path='/Itemview'
            />
            <CardItem
              src='images/HobbySport/house.png'
              text='Details'
              path='/Itemview'
            />
            <CardItem
              src='images/HobbySport/smartphone (2).png'
              text='Details'
              path='/Itemview'
            />
            <CardItem
              src='images/HobbySport/house.png'
              text='Details'
              path='/Itemview'
            />
          </ul>       
          </div>
        </div>
      </div>
  );
}