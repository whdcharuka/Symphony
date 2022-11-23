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
                  <h2>About Us</h2>
                  <hr></hr>
                  
                  <form id='form' className='flex flex-col'>
                    
                    <h4>About Our Company</h4>
                      <span>SLT Symphony is one of the Largest Online sharing Marketplaces in Sri Lanka that offers perfect classified advertisements to build your own businesses. This platform is uniquely designed to promote your advertisements and consumers can easily browse through all categories and locations.</span>

                    <h4>What we do</h4>
                      <span>Our main goal is to Share what we have and finding what we want through the app. SLT symphony is specialized in promoting your advertisements to millions of users. We manually review at the advertisements before publishing in our platform in order to make sure the quality is up to our standards. Contact Us for more details.</span>
   
                  </form>
              </div>
          </div>
    </section>      
  )
}