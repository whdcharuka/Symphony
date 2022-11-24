import React from 'react'
import '../pages/Login.css';
import { useForm } from 'react-hook-form';
import CardItem from '../CardItem';

export default function Form() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);
    
  return (
    <div className='cards'>
    <h6>Vehical Parts</h6>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Vehicalparts/wiper bush.jpg'
              text='Wiper Bush'
              path='/Vp1'
            />
            <CardItem
              src='images/Vehicalparts/air-filter.jpg'
              text='Air-Filter'
              path='/Vp2'
            />
            <CardItem
              src='images/Vehicalparts/engine.jpg'
              text='Engine Bay'
              path='/Vp3'
            />
            {/* <CardItem
              src='images/Vehicalparts/fuel filter.jpg'
              text='Fuel Filter'
              path='/Vp4'
            /> */}
            {/* <CardItem
              src='images/Vehicalparts/head light.jpg'
              text='Head Light'
              path='/Vp5'
            /> */}
          </ul> 
          <ul className='cards__items'>
            <CardItem
              src='images/Vehicalparts/horn.jpg'
              text='Horn'
              path='/Vp6'
            />
            <CardItem
              src='images/Vehicalparts/meter and gauges.jpg'
              text='Meter and gauges'
              path='/Vp7'
            />
            <CardItem
              src='images/Vehicalparts/oil filter.jpg'
              text='Oil Filter'
              path='/Vp8'
            />
            {/* <CardItem
              src='images/Vehicalparts/wiper blades.jpg'
              text='Wiper Blades'
              path='/Vp9'
            /> */}
            {/* <CardItem
              src='images/Vehicalparts/wiper bush caravan.jpg'
              text='Wiper bush caravan'
              path='/Vp10'
            /> */}
          </ul>       
          </div>
        </div>
      </div>
  );
}