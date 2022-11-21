import React from 'react'
import '../pages/Login.css';
import { useForm } from 'react-hook-form';
import CardItem from '../CardItem';

export default function Form() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);
    
  return (
    <>
    <div className='cards'>
      <h1>Fuel Filter</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='images/HobbySport/.jpg'
              />
              <CardItem
                src='images/HobbySport/.jpg'
              />
              <CardItem
                src='images/HobbySport/.jpg'
              />
            </ul> 
            <ul className='cards__items'>
              <CardItem
                src='images/HobbySport/.jpg'
              />
              <CardItem
                src='images/HobbySport/.jpg'
              />
              <CardItem
                src='images/HobbySport/.jpg'
              />
            </ul>          
          </div>
        </div>
      </div>
      </>
  );
}