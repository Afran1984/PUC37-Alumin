import React from 'react';
import { Helmet } from 'react-helmet-async';

const AboutUs = () => {
    return (
        <div>
          <Helmet>
                <title>অনবদ্য-৩৭ | About</title>
            </Helmet>
        <h1 className='text 3xl'>ABOUT US</h1>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src="/public/jim.jpg" className='rounded-xl' alt="" />
    <div>
      <h3>Md. Abdur Razzak Jim</h3>
      <p>University: Premier University, Chittagong</p>
      <p>ID: 1903710201984</p>
      <p>Batch: 37th</p>
      <p>Section: C</p>
      <p></p>
    </div>
  </div>
</div>
        </div>
    );
};

export default AboutUs;