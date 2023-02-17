import React from 'react'
import '../../App.css';
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
                      <input type="text" className='d' {...register("bdy")} placeholder='Birthday' />
                      <input type="text" className='d' {...register("mob")} placeholder='Mobile Number' />
                      <input type="text" className='d' {...register("caddress")} placeholder='Current Address' />
                      <input type="text" className='d' {...register("email")} placeholder='Email' />
                      <input type="text" className='d' {...register("pwd")} placeholder='Password' />
                      <input type="text" className='d' {...register("confirmpwd")} placeholder='Confirm Password' />
                      <>Upload your GS certificate</>
                      <input type="file" className='d' {...register("gscer")} />
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


// import React from 'react';
// import { Form, Button } from 'semantic-ui-react';
// import { useForm } from "react-hook-form";

// import './Login.css';

// export default function FormValidation() {
//     const { register, handleSubmit, formState: { errors } } = useForm();
//     const onSubmit = (data) => {
//         console.log(data);
//     }
//     return (
//         <div>
//             <div className="col-2">
//                    <img src='images/istock.jpg' />
//                </div>
//             <div className="register">
//                <div className="col-1">
//                   <h2>Get Started with MAKER</h2>
//                   <span>Getting started is easy</span>
//             <Form onSubmit={handleSubmit(onSubmit)}>
//                 <Form.Field>
//                     <input
//                         placeholder='First Name'
//                         type="text"
//                         {...register("firstName", { required: true, maxLength: 10 })}
//                     />
//                 </Form.Field>
//                 {errors.firstName && <p>Please check the First Name</p>}
//                 <Form.Field>
//                     <input
//                         placeholder='Last Name'
//                         type="text"
//                         {...register("lastName", { required: true, maxLength: 10 })}
//                     />
//                 </Form.Field>
//                 {errors.lastName && <p>Please check the Last Name</p>}
//                 <Form.Field>
//                     <input
//                         placeholder='Email'
//                         type="email"
//                         {...register("email",
//                             {
//                                 required: true,
//                                 pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//                             })}
//                     />
//                 </Form.Field>
//                 {errors.email && <p>Please check the Email</p>}
//                 <Form.Field>
//                     <input
//                         placeholder='Password'
//                         type="password"
//                         {...register("password", {
//                             required: true,
//                             pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
//                         })}
//                     />
//                 </Form.Field>
//                 {errors.password && <p>Please check the Password</p>}
//                 <Button type='submit'>Submit</Button>
//             </Form>
//         </div>
//         </div>
//            </div>
//     )
// }