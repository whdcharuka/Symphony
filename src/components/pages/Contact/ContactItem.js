import React from 'react'
import '../Signup.css';
import { useForm } from 'react-hook-form';

export default function Form() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);
    
  return (
    <section>
          <div className="cont">
              <div className="col-1">
                  <h2>Contact Us</h2>
                  <hr></hr>
                  <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    
                    {/* <label>First Name</label> */}
                      <input type="text" className='d' {...register("fname")} placeholder='First Name' />
                    
                    {/* <label>Last Name</label>   */}
                      <input type="text" className='d' {...register("lname")} placeholder='Last Name' />               
                    
                    {/* <label>Email</label>   */}
                      <input type="text" className='d' {...register("email")} placeholder='Email' />
                    
                    {/* <label>Phone Number</label> */}
                      <input type="text" className='d' {...register("number")} placeholder='Phone Number' />
                      {errors.mobile?.type === "required" && "Mobile Number is required"}
                      {errors.mobile?.type === "maxLength" && "Max Length Exceed"}

                    {/* <label>Message</label>   */}
                      <input type="text" className='e' {...register("message")} placeholder='Message' />
                      
                    <button className='btn'>Submit</button>
                  </form>
              </div>
          </div>
    </section>      
  )
}