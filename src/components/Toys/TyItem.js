import React from 'react'
import '../pages/Login.css';
import { useForm } from 'react-hook-form';
import CardItem from '../CardItem';

export default function Form() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);
    
  return (
    <div className='cards'>
    <h6>TOYS</h6>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Toys/.jpg'
              text=''
              path='/Ty1'
            />
            <CardItem
              src='images/Toys/.jpg'
              text=''
              path='/Ty2'
            />
            <CardItem
              src='images/Toys/.jpg'
              text=''
              path='/Ty3'
            />
            <CardItem
              src='images/Toys/.jpg'
              text=''
              path='/Ty4'
            />
            {/* <CardItem
              src='images/Toys/.jpg'
              text=''
              path='/Ty5'
            /> */}
          </ul> 
          <ul className='cards__items'>
            <CardItem
              src='images/Toys/.jpg'
              text=''
              path='/Ty6'
            />
            <CardItem
              src='images/Toys/.jpg'
              text=''
              path='/Ty7'
            />
            <CardItem
              src='images/Toys/.jpg'
              text=''
              path='/Ty8'
            />
            <CardItem
              src='images/Toys/.jpg'
              text=''
              path='/Ty9'
            />
            {/* <CardItem
              src='images/Toys/.jpg'
              text=''
              path='/Ty10'
            /> */}
          </ul>       
          </div>
        </div>
      </div>
  );
}