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
              <h5>Call or email us</h5>
                <h6 className='emailus'>Please get in touch with us and we will get back to you as soon as possible.</h6>
                  <h6 className='emailus'>
                      9am - 6pm on weekdays<br></br>
                      8am - 5pm on weekends
                  </h6>
              <div className='contactus'>
                <p><img src='images/email.png'></img>  <h6 className='emailus'>symphony@gmail.com</h6><br></br>
                   <img src='images/phone-call.png'></img>  <h6 className='emailus'>+94 2256 5987</h6><br></br></p>
              </div>
            </form>
        </div>
    </div>
</section>    
      
  );
}