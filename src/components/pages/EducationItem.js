import React from 'react'
import './Login.css';
import { useForm } from 'react-hook-form';
import CardItem from '../CardItem';

export default function Form() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);
    
  return (
    <>
    <div className='cards'>
      <h6>Education</h6>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='images/Education/car.png'
                path='/Itemview'
                text='Details'
              />
              <CardItem
                src='images/Education/smartphone (2).png'
                path='/Itemview'
                text='Details'
              />
              <CardItem
                src='images/Education/smartphone (2).png'
                path='/Itemview'
                text='Details'
              />
              <CardItem
                src='images/Education/smartphone (2).png'
                path='/Itemview'
                text='Details'
              />
              <CardItem
                src='images/Education/smartphone (2).png'
                path='/Itemview'
                text='Details'
              />
            </ul> 
            <ul className='cards__items'>
              <CardItem
                src='images/Education/car.png'
                path='/Itemview'
                text='Details'
              />
              <CardItem
                src='images/Education/smartphone (2).png'
                path='/Itemview'
                text='Details'
              />
              <CardItem
                src='images/Education/smartphone (2).png'
                path='/Itemview'
                text='Details'
              />
              <CardItem
                src='images/Education/smartphone (2).png'
                path='/Itemview'
                text='Details'
              />
              <CardItem
                src='images/Education/smartphone (2).png'
                path='/Itemview'
                text='Details'
              />
            </ul>          
          </div>
        </div>
      </div>
      </>
  );
}