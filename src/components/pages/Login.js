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
                    <h2>Welcome Back</h2>
                      <span>Login to your account</span>

                      <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                          <input type="text" className='d' {...register("email")} placeholder='Email' />
                          <input type="text" className='d' {...register("pwd")} placeholder='Password' />
                          {errors.mobile?.type === "required" && "Mobile Number is required"}
                          {errors.mobile?.type === "maxLength" && "Max Length Exceed"}
                          <button className='btn'>Login</button>
                          <span>Forgot Password?<Link to='/Reset' className='abc'>  Reset Password </Link></span>
                      </form>

                  </div>
                        <div className="col-2">
                            <img src='images/istockphoto.jpg' />
                        </div>
              </div>
          </section>

          <div className="register">
                <div className="col-3">
                      <span>Don't have an account?<Link to='/register' className='abc'>  Register </Link></span>
                  </div>
              </div>
        </section>
  )
}



// import React from 'react';
// import { Form, Button } from 'semantic-ui-react';
// import { useForm } from "react-hook-form";

// import './Login.css';
// import { Link } from 'react-router-dom';

// export default function FormValidation() {
//     const { register, handleSubmit, formState: { errors } } = useForm();
//     const onSubmit = (data) => {
//         console.log(data);
//     }
//     return (
//         <div>
//             <div className="register">
//                <div className="col-1">
//                   <h2>Get Started with MAKER</h2>
//                   <span>Getting started is easy</span>
//             <Form onSubmit={handleSubmit(onSubmit)}>
//                 {/* <Form.Field>
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
//                 {errors.lastName && <p>Please check the Last Name</p>} */}
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
//         <div className="register">
//                 <div className="col-3">
//                       <span>Login to your account<Link to='/register' className='abc'>  Register </Link></span>
//                   </div>
//               </div>
//               {/* <div className="col-2">
//                    <img src='images/istock.jpg' />
//                </div> */}
//            </div>
//     )
// }