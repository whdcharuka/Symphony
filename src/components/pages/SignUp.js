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
                    
                    {/* <label>Brand</label> */}
                      <input type="text" className='d' {...register("brand")} placeholder='Brand' />
                    
                    {/* <label>Model</label>   */}
                      <input type="text" className='d' {...register("model")} placeholder='Model' />
                    
                    {/* <label>Tittle</label> */}
                      <input type="text" className='d' {...register("tittle")} placeholder='Tittle' />
                    
                    {/* <label>Description</label>   */}
                      <input type="text" className='e' {...register("description")} placeholder='Description' />

                    <hr></hr>
                    <label>Add photo</label> 
                    <div>
                      <input type="file" className="file"></input>
                      {/* <input type="file" className="file"></input>
                      <input type="file" className="file"></input> */}
                    </div>
                    {/* <div className="wrapper">
                      <input type="file" className="file"></input>
                      <input type="file" className="file"></input>
                      <input type="file" className="file"></input>
                    </div> */}
                    
                    <hr></hr>
                    <h4>Contact details</h4>
                    {/* <label>Name</label> */}
                      <input type="text" className='d' {...register("name")} placeholder='Name' />
                    
                    {/* <label>Email</label> */}
                      <input type="text" className='d' {...register("email")} placeholder='Email' />
                    
                    {/* <label>Phone Number</label> */}
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