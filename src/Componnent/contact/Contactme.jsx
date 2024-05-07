import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MdAddCall } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { RiHomeGearFill } from "react-icons/ri";
import { LiaUniversitySolid } from "react-icons/lia";

const Contactme = () => {
    return (
        <div>
            <div>
          <Helmet>
                <title>অনবদ্য-৩৭ | About</title>
            </Helmet>
        <h1 className='text 3xl'>Contact</h1>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src="/public/jim.jpg" className='rounded-xl' alt="" />
    <div>
      <h3>Md. Abdur Razzak Jim</h3>
      
      <div className='flex gap-1 justify-center'>
        <p className='mt-1'><LiaUniversitySolid /></p>
        <p>Premier University, Chittagong</p>
       </div>
      <div className='flex gap-2 justify-center'>
        <p className='mt-2'><CiMail /></p>
        <p><a target='blank' href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new">afranrazzak1984@gmail.com</a> </p>
       </div>
       
       <div className='flex gap-2 justify-center'>
        <p className='mt-2'><MdAddCall /></p>
        <p>+8801717663447</p>
       </div>
       <div className='flex justify-center'>
        <p className='mt-1'><RiHomeGearFill /></p>
        <p> Mojaffor Nogor Residential Area, <br /> <small> Technical mor, Bayazid
        Bostami, Chattogram</small> </p>
       </div>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default Contactme;