import React from 'react'
import './Login.css';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export default function Form() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);
    
  return (
        <section>
            <div className="register">
                <div className="col-1">
                    <h2>Reset Password</h2>
                      <span>Enter your email here!</span>

                      <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                          <input type="text" className='d' {...register("email")} placeholder='Email' />
                          {errors.mobile?.type === "required" && "Mobile Number is required"}
                          {errors.mobile?.type === "maxLength" && "Max Length Exceed"}
                          <button className='btn'>Reset Password</button>
                      </form>

                  </div>
                        <div className="col-10">
                            <img src='images/6333057.jpg' />
                        </div>
              </div>
          </section>
  )
}