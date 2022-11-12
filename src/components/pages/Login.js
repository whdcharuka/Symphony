import React from 'react'
import './Login.css';
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
                  <img src='images/students.jpg' />
              </div>
          </div>
        </section>

        <h1>Already have an account? <h6>Login Here</h6></h1>
        <section>
            <div className="register">
                <div className="col-1">
                    <h2>Welcome Back</h2>
                      <span>Login to your account</span>

                      <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                          <input type="text" className='d' {...register("password")} placeholder='Email' />
                          <input type="text" className='d' {...register("confirmpwd")} placeholder='Password' />
                          {errors.mobile?.type === "required" && "Mobile Number is required"}
                          {errors.mobile?.type === "maxLength" && "Max Length Exceed"}
                          <button className='btn'>Create Account</button>
                      </form>

                  </div>
                        <div className="col-2">
                    <img src='images/photo.jpg' />
                  </div>
              </div>
          </section>
        </section>
  )
}