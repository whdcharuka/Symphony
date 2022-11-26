import React from 'react'
import '../pages/Login.css';
import '../Cards.css';
import { useForm } from 'react-hook-form';
import CardItem from '../CardItem';
import { Link } from 'react-router-dom';

export default function Form() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);
    
  return (
    <div className='cardsitem'>
    <h6>Vehical Parts<Link to='/All'><button className='btn1'>All</button></Link>
      {/* <Link to='/Instock'><button className='btn2'>IN STOCK</button></Link>
      <Link to='/Outstock'><button className='btn3'>OUT OF STOCK</button></Link> */}
    </h6>
      <div className='cardsitem__container'>
        <div className='cardsitem__wrapper'>
          <ul className='cardsitem__items'>
            <CardItem
              src='images/Vehicalparts/engine.jpg'
              text='Wiper Bush'
              path='/Vp1'
            />
            <CardItem
              src='images/Vehicalparts/.jpg'
              text='Air-Filter'
              path='/Vp2'
            />
            <CardItem
              src='images/Vehicalparts/.jpg'
              text='Engine Bay'
              path='/Vp3'
            />
            {/* <CardItem
              src='images/Vehicalparts/.jpg'
              text='Fuel Filter'
              path='/Vp4'
            /> */}
            {/* <CardItem
              src='images/Vehicalparts/t.jpg'
              text='Head Light'
              path='/Vp5'
            /> */}
          </ul> 
          <ul className='cards__items'>
            <CardItem
              src='images/Vehicalparts/.jpg'
              text='Horn'
              path='/Vp6'
            />
            <CardItem
              src='images/Vehicalparts/.jpg'
              text='Meter and gauges'
              path='/Vp7'
            />
            <CardItem
              src='images/Vehicalparts/.jpg'
              text='Oil Filter'
              path='/Vp8'
            />
            {/* <CardItem
              src='images/Vehicalparts/.jpg'
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