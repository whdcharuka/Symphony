import React from 'react'
import '../Login.css';
import { useForm } from 'react-hook-form';

export default function Form() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);
    
  return (
   <section>
    <div className="mklp">
      <div className="col-1">
        <div className="col-2">
          <img src='images/Customer-Service.jpg' />
        </div>
        </div>
    </div>
</section>    
      
  );
}