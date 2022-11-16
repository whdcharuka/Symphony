import React from 'react'
import './Login.css';
import { useForm } from 'react-hook-form';
import CardItem from '../CardItem';

export default function Form() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);
    
  return (
    <div className='cards'>
    <h1>Browse items by category</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/car.png'
              text='Details'
              path='/Itemview'
            />
            <CardItem
              src='images/smartphone (2).png'
              text='Details'
              path='/Itemview'
            />
            <CardItem
              src='images/house.png'
              text='Details'
              path='/Itemview'
            />
          </ul> 
          <ul className='cards__items'>
            <CardItem
              src='images/car.png'
              text='Details'
              path='/Itemview'
            />
            <CardItem
              src='images/smartphone (2).png'
              text='Details'
              path='/Itemview'
            />
            <CardItem
              src='images/house.png'
              text='Details'
              path='/Itemview'
            />
          </ul>       
          </div>
        </div>
      </div>
  );
}





// with nav bar

// import "../../App.css";
// import { motion } from "framer-motion";
// // import {
// //   AccountCircleRounded,
// //   AssignmentTurnedInRounded,
// //   AttachMoneyRounded,
// //   BarChartRounded,
// //   ColorLensRounded,
// //   DashboardRounded,
// //   SettingsRemoteRounded,
// //   TocRounded,
// // } from "@material-ui/icons";
// import Item from "../../components/Item";
// import { useState } from "react";

// function Form() {
//   const [open, setOpen] = useState(true);

//   const handleToggle = () => {
//     setOpen(!open);
//   };

//   const sideContainerVariants = {
//     true: {
//       width: "15rem",
//     },
//     false: {
//       transition: {
//         delay: 0.6,
//       },
//     },
//   };

//   const sidebarVariants = {
//     true: {},
//     false: {
//       width: "3rem",
//       transition: {
//         delay: 0.4,
//       },
//     },
//   };

//   const profileVariants = {
//     true: {
//       alignSelf: "center",
//       width: "4rem",
//     },
//     false: {
//       alignSelf: "flex-start",
//       marginTop: "2rem",
//       width: "3rem",
//     },
//   };
//   return (
//     <div className="App">
//       <motion.div
//         data-Open={open}
//         variants={sideContainerVariants}
//         initial={`${open}`}
//         animate={`${open}`}
//         className="sidebar_container"
//       >
//         {/* sidebar div */}
//         <motion.div
//           className="sidebar"
//           initial={`${open}`}
//           animate={`${open}`}
//           variants={sidebarVariants}
//         >
//           {/* lines_icon */}
//           <motion.div
//             whileHover={{
//               scale: 1.2,
//               rotate: 180,
//               backgroundColor: "rgba(255, 255, 255, 0.3)",
//               backdropFilter: "blur(3.5px)",
//               WebkitBackdropFilter: "blur(3.5px)",
//               border: "1px solid rgba( 255, 255, 255, 0.18 )",
//               transition: {
//                 delay: 0.2,
//                 duration: 0.4,
//               },
//             }}
//             onClick={handleToggle}
//             className="lines_icon"
//           >
//             {/* <TocRounded /> */}
//           </motion.div>
          
//           <div className="groups">
//             <div className="group">
//               <img className="" />
//               {/* <Item icon={<DashboardRounded />} name="Vehical Parts" />
//               <Item icon={<BarChartRounded />} name="Electronic  Devices" />
//               <Item icon={<AttachMoneyRounded />} name="Home & Garden" />
//               <Item icon={<AssignmentTurnedInRounded />} name="Animals" />{" "}
//               <Item icon={<AccountCircleRounded />} name="Services" />
//               <Item icon={<SettingsRemoteRounded />} name="Hobby,Sport & Kids" />
//               <Item icon={<ColorLensRounded />} name="Foods" />
//               <Item icon={<AssignmentTurnedInRounded />} name="Education" />{" "}
//               <Item icon={<AccountCircleRounded />} name="Essentials" />
//               <Item icon={<SettingsRemoteRounded />} name="Fashion & Buty" />
//               <Item icon={<ColorLensRounded />} name="Other" /> */}
//             </div>
//           </div>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// }

// export default Form;
