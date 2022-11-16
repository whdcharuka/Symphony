import React from 'react'
import './Login.css';
import { useForm } from 'react-hook-form';
import CardItem from '../CardItem';

export default function Form() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);
    
  return (
    <div className='cards'>
    <h6>Toys</h6>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/car.png'
              text='Details'
              path='/Itemview'
            />
            <CardItem
              src='images/smartphone (2).png'
              text='Details'
              path='/ElectronicDevices'
            />
            <CardItem
              src='images/house.png'
              text='Details'
              path='/HomeGarden'
            />
            
            <CardItem
              src='images/smartphone (2).png'
              text='Details'
              path='/ElectronicDevices'
            />
            <CardItem
              src='images/house.png'
              text='Details'
              path='/HomeGarden'
            />
          </ul> 
          <ul className='cards__items'>
            <CardItem
              src='images/car.png'
              text='Details'
              path='/vehicalparts'
            />
            <CardItem
              src='images/smartphone (2).png'
              text='Details'
              path='/ElectronicDevices'
            />
            <CardItem
              src='images/house.png'
              text='Details'
              path='/HomeGarden'
            />
            
            <CardItem
              src='images/smartphone (2).png'
              text='Details'
              path='/ElectronicDevices'
            />
            <CardItem
              src='images/house.png'
              text='Details'
              path='/HomeGarden'
            />
          </ul>       
          </div>
        </div>
      </div>
  );
}