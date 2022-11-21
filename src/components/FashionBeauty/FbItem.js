import React from 'react'
import '../pages/Login.css';
import { useForm } from 'react-hook-form';
import CardItem from '../CardItem';

export default function Form() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);
    
  return (
    <div className='cards'>
    <h6>Fashion & Beauty</h6>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/FashionBeauty/.jpg'
              text=''
              path='/Fb1'
            />
            <CardItem
              src='images/FashionBeauty/.jpg'
              text=''
              path='/Fb2'
            />
            <CardItem
              src='images/FashionBeauty/.jpg'
              text=''
              path='/Fb3'
            />
            <CardItem
              src='images/FashionBeauty/.jpg'
              text=''
              path='/Fb4'
            />
            <CardItem
              src='images/FashionBeauty/.jpg'
              text=''
              path='/Fb5'
            />
          </ul> 
          <ul className='cards__items'>
            <CardItem
              src='images/FashionBeauty/.jpg'
              text=''
              path='/Fb6'
            />
            <CardItem
              src='images/FashionBeauty/.jpg'
              text=''
              path='/Fb7'
            />
            <CardItem
              src='images/FashionBeauty/.jpg'
              text=''
              path='/Fb8'
            />
            <CardItem
              src='images/FashionBeauty/.jpg'
              text=''
              path='/Fb9'
            />
            <CardItem
              src='images/FashionBeauty/.jpg'
              text=''
              path='/Fb10'
            />
          </ul>       
          </div>
        </div>
      </div>
  );
}