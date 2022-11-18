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
      <h1>Wiper bush</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='images/Vehicalparts/wiper bush caravan.jpg'
              />
              <CardItem
                src='images/Vehicalparts/wiper bush E24.jpg'
              />
              <CardItem
                src='images/Vehicalparts/wiper bush EF250.jpg'
              />
            </ul> 
            <ul className='cards__items'>
              <CardItem
                src='images/Vehicalparts/wiper bush mazda bongo.jpg'
              />
              <CardItem
                src='images/Vehicalparts/wiper bush NKR-NPR-TFR.jpg'
              />
              <CardItem
                src='images/Vehicalparts/wiper bush hiace.jpg'
              />
            </ul>          
          </div>
        </div>
      </div>
      </>
  );
}