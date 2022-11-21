import React from 'react'
import '../pages/Login.css';
import { useForm } from 'react-hook-form';
import CardItem from '../CardItem';

export default function Form() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);
    
  return (
    <div className='cards'>
    <h6>Education</h6>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Education/.jpg'
              text=''
              path='/Ed1'
            />
            <CardItem
              src='images/Education/.jpg'
              text=''
              path='/Ed2'
            />
            <CardItem
              src='images/Education/.jpg'
              text=''
              path='/Ed3'
            />
            <CardItem
              src='images/Education/.jpg'
              text=''
              path='/Ed4'
            />
            <CardItem
              src='images/Education/.jpg'
              text=''
              path='/Ed5'
            />
          </ul> 
          <ul className='cards__items'>
            <CardItem
              src='images/Education/.jpg'
              text=''
              path='/El6'
            />
            <CardItem
              src='images/Education/.jpg'
              text=''
              path='/Ed7'
            />
            <CardItem
              src='images/Education/.jpg'
              text=''
              path='/Ed8'
            />
            <CardItem
              src='images/Education/.jpg'
              text=''
              path='/Ed9'
            />
            <CardItem
              src='images/Education/.jpg'
              text=''
              path='/Ed10'
            />
          </ul>       
          </div>
        </div>
      </div>
  );
}