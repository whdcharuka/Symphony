import React from 'react'
import './Login.css';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export default function Form() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);
    
  return (
    <section>
        <section>
          <div className="register">
              <div className="col-1">
                  <h2>Get Started with MAKER</h2>
                  <span>Getting started is easy</span>

                  <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                      <input type="text" className='d' {...register("fullname")} placeholder='Full Name' />
                      <input type="text" className='d' {...register("email")} placeholder='Email' />
                      <input type="text" className='d' {...register("pwd")} placeholder='Password' />
                      <input type="text" className='d' {...register("confirmpwd")} placeholder='Confirm Password' />
                      {errors.mobile?.type === "required" && "Mobile Number is required"}
                      {errors.mobile?.type === "maxLength" && "Max Length Exceed"}
                      <button className='btn'>Create Account</button>
                  </form>
            </div>
              <div className="col-2">
                  <img src='images/istock.jpg' />
              </div>
          </div>
        </section>
    </section>
  )
}