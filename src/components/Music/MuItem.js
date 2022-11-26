import React from 'react'
import '../pages/Login.css';
import { useForm } from 'react-hook-form';
import CardItem from '../CardItem';
import { Link } from 'react-router-dom';

export default function Form() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);
    
  return (
    <div className='cards'>
    <h6>MUSIC<Link to='/All'><button className='btn1'>All</button></Link></h6>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Music/.jpg'
              text=''
              path='/Mu1'
            />
            <CardItem
              src='images/Music/.jpg'
              text=''
              path='/Mu2'
            />
            <CardItem
              src='images/Music/.jpg'
              text=''
              path='/Mu3'
            />
            <CardItem
              src='images/Music/.jpg'
              text=''
              path='/Mu4'
            />
            {/* <CardItem
              src='images/Music/.jpg'
              text=''
              path='/Mu5'
            /> */}
          </ul> 
          <ul className='cards__items'>
            <CardItem
              src='images/Music/.jpg'
              text=''
              path='/Mu6'
            />
            <CardItem
              src='images/Music/.jpg'
              text=''
              path='/Mu7'
            />
            <CardItem
              src='images/Music/.jpg'
              text=''
              path='/Mu8'
            />
            <CardItem
              src='images/Music/.jpg'
              text=''
              path='/Mu9'
            />
            {/* <CardItem
              src='images/Music/.jpg'
              text=''
              path='/Mu10'
            /> */}
          </ul>       
          </div>
        </div>
      </div>
  );
}