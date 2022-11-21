import React from 'react'
import '../pages/Login.css';
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
              src='images/HobbySport/.jpg'
              text=''
              path='/Hs1'
            />
            <CardItem
              src='images/HobbySport/.jpg'
              text=''
              path='/Hs2'
            />
            <CardItem
              src='images/HobbySport/.jpg'
              text=''
              path='/Hs3'
            />
            <CardItem
              src='images/HobbySport/.jpg'
              text=''
              path='/Hs4'
            />
            <CardItem
              src='images/HobbySport/.jpg'
              text=''
              path='/Hs5'
            />
          </ul> 
          <ul className='cards__items'>
            <CardItem
              src='images/HobbySport/.jpg'
              text=''
              path='/Hs6'
            />
            <CardItem
              src='images/HobbySport/.jpg'
              text=''
              path='/Hs7'
            />
            <CardItem
              src='images/HobbySport/.jpg'
              text=''
              path='/Hs8'
            />
            <CardItem
              src='images/HobbySport/.jpg'
              text=''
              path='/Hs9'
            />
            <CardItem
              src='images/HobbySport/.jpg'
              text=''
              path='/Hs10'
            />
          </ul>       
          </div>
        </div>
      </div>
  );
}