import React from 'react'
import './Itemview.css';
import { useForm } from 'react-hook-form';
import CardItem from '../CardItem';

export default function Form() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);
    
  return (
    <div className='cards'>
    <h1>Browse items by category</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/car.png'
              path='/Itemview'
            />
          </ul>        
          </div>
        </div>
        <h1>Condition: Used <br></br>

            Description: <br></br>
            Sale due to migration
            Work in good </h1>
      </div>
  );
}