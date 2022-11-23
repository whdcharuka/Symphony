import React from 'react'
import '../Login.css';
import { useForm } from 'react-hook-form';

export default function Form() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);
    
  return (
   <section>
    <div className="cont">
      <div className="col-1">
        <div className="col-2">
          <img src='images/contactus.png' />
        </div>
            <form id='form' className='flex flex-col'>   
              <h4>Call or email us</h4>
                <span>Please get in touch with us and we will get back to you as soon as possible.</span>
                  <span>
                      9am - 6pm on weekdays<br></br>
                      8am - 5pm on weekends
                  </span>
              <div className='contactus'>
                <p>Email Us<br></br><img src='images/email.png'></img>  <span class="details">symphony@gmail.com</span>  <br></br><br></br>
                Call us<br></br><img src='images/phone-call.png'></img>  <span class="details">+94 2256 5987</span><br></br></p>
              </div>
            </form>
        </div>
    </div>
</section>    
      
  );
}