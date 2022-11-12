import React from 'react'
import './Signup.css';
import { useForm } from 'react-hook-form';

export default function Form() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);
    
  return (
    <section>
          <div className="share">
              <div className="col-1">
                  <h2>Fill in the details</h2>
                  <hr></hr>
                  <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <p>Brand</p>
                      <input type="text" className='d' {...register("brand")} placeholder='Brand' />
                    <p>Model</p>  
                      <input type="text" className='d' {...register("model")} placeholder='Model' />
                    <p>Tittle</p>
                      <input type="text" className='d' {...register("tittle")} placeholder='Tittle' />
                    <p>Description</p>  
                      <input type="text" className='d' {...register("description")} placeholder='Description' />
                      <hr></hr>
                    <p>Add photo</p>
                      <hr></hr>
                    <h4>Contact details</h4>
                    <p>Name</p>
                      <input type="text" className='d' {...register("name")} placeholder='Name' />
                    <p>Email</p>
                      <input type="text" className='d' {...register("email")} placeholder='Email' />
                    <p>Phone Number</p>
                      <input type="text" className='d' {...register("number")} placeholder='Phone Number' />
                      {errors.mobile?.type === "required" && "Mobile Number is required"}
                      {errors.mobile?.type === "maxLength" && "Max Length Exceed"}
                      <button className='btn'>Share Item</button>
                  </form>
            </div>
          </div>
        </section>
        
  )
}