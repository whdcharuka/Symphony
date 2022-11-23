import React from 'react'
import '../Signup.css';
import { useForm } from 'react-hook-form';

export default function Form() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);
    
  return (
    <section>
          <div className="aboutus">
              <div className="col-1">
                  <h2>Our Services</h2>
                  <hr></hr>
                  
                  <form id='form' className='flex flex-col'>
                  <h4>We provide the best services for our customers!</h4>
                      <span><ol>-24×7 Availability <br></br>
                                -Fast Delivery<br></br>
                                -Quality products<br></br>
                                -Reliability<br></br>
                                -A platform where you can find everything in few clicks<br></br>
                                -Flexible payment option(Cash on delivery)</ol> </span>

                  </form>
              </div>
          </div>
    </section>      
  )
}