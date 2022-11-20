import React from 'react'
import '../pages/Login.css';
import { useForm } from 'react-hook-form';
import CardItem from '../CardItem';

export default function Form() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);
    
  return (
    <div className='cards'>
    <h6>Animals</h6>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Animals/.jpg'
              text=''
              path='/An1'
            />
            <CardItem
              src='images/Animals/.jpg'
              text=''
              path='/An2'
            />
            <CardItem
              src='images/Animals/.jpg'
              text=''
              path='/An3'
            />
            <CardItem
              src='images/Animals/.jpg'
              text='r'
              path='/An4'
            />
            <CardItem
              src='images/Animals/.jpg'
              text=''
              path='/An5'
            />
          </ul> 
          <ul className='cards__items'>
            <CardItem
              src='images/Animals/.jpg'
              text=''
              path='/An6'
            />
            <CardItem
              src='images/Animals/.jpg'
              text=''
              path='/An7'
            />
            <CardItem
              src='images/Animals/.jpg'
              text=''
              path='/An8'
            />
            <CardItem
              src='images/Animals/.jpg'
              text=''
              path='/An9'
            />
            <CardItem
              src='images/Animals/.jpg'
              text=''
              path='/An10'
            />
          </ul>       
          </div>
        </div>
      </div>
  );
}