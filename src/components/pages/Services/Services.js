import React from 'react'
import '../Login.css';
import { useForm } from 'react-hook-form';
import Wrapper from '../../wrapper/Wrapper';

export default function Form() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);
    
  return (
   <section>
    <div className="mklp">
      <h1>Our Services</h1>
      <img src='images/Customer-Service.jpg' />
      <Wrapper/>
    </div>
</section>    
      
  );
}



// import React from 'react';
// import '../../../App.css';
// import ServicesItem from './ServicesItem';
// import Ser from './Ser';
// // import Categories from './Categories';
// // import CardsHome from './CardsHome';
// import Wrapper from "../../wrapper/Wrapper"

// export default function Products() {
//   return (
//     <>
//       {/* <div className='container d_flex'> */}
//         {/* <ServicesItem /> */}
//             {/* <div className='contact_box1'>
//               <Ser />
//             </div> */}
//       {/* </div> */}
//       <Ser />
//       {/* < Wrapper /> */}
//     </>
//   );
// }