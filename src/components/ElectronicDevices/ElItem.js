import React from 'react'
import '../pages/Login.css';
import { useForm } from 'react-hook-form';
import CardItem from '../CardItem';

export default function Form() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);
    
  return (
    <div className='cards'>
    <h6>Electronic Devices</h6>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/ElectronicDevices/.jpg'
              text=''
              path='/El1'
            />
            <CardItem
              src='images/ElectronicDevices/.jpg'
              text=''
              path='/El2'
            />
            <CardItem
              src='images/ElectronicDevices/.jpg'
              text=''
              path='/El3'
            />
            <CardItem
              src='images/ElectronicDevices/.jpg'
              text=''
              path='/El4'
            />
            <CardItem
              src='images/ElectronicDevices/.jpg'
              text=''
              path='/El5'
            />
          </ul> 
          <ul className='cards__items'>
            <CardItem
              src='images/ElectronicDevices/.jpg'
              text=''
              path='/El6'
            />
            <CardItem
              src='images/ElectronicDevices/.jpg'
              text=''
              path='/E7'
            />
            <CardItem
              src='images/ElectronicDevices/.jpg'
              text=''
              path='/El8'
            />
            <CardItem
              src='images/ElectronicDevices/.jpg'
              text=''
              path='/El9'
            />
            <CardItem
              src='images/ElectronicDevices/.jpg'
              text=''
              path='/El10'
            />
          </ul>       
          </div>
        </div>
      </div>
  );
}