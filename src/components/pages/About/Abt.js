import React from 'react'
import '../Login.css';
import { useForm } from 'react-hook-form';

export default function Form() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);
    
  return (
   <section>
    <div className="aboutus">
      <div className="col-1">
        <div className="col-2">
          <img src='images/aboutus.jpg' />
        </div>
        {/* <form id='form' className='flex flex-col'>
          
                    <h4>What we do</h4>
                      <span>Our main goal is to Share what we have and finding what we want through the app. SLT symphony is specialized in promoting your advertisements to millions of users. We manually review at the advertisements before publishing in our platform in order to make sure the quality is up to our standards. Contact Us for more details.</span>
   
                  </form> */}
        </div>
    </div>
</section>    
      
  );
}