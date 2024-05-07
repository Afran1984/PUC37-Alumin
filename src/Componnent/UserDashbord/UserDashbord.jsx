import React from 'react';
import { Helmet } from 'react-helmet-async';

const UserDashbord = () => {
    return (
        <div>
            <Helmet>
                <title>অনবদ্য-৩৭ | Home</title>
            </Helmet>
            <div className="hero min-h-screen" style={{backgroundImage: `url("/anob.jpg")`}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                
                <a target='blank' href="https://drive.google.com/drive/folders/1-bO4QeyV20_4Ygt8VmX1YGyiQaJBTvC2"><button className="btn">Get Started</button></a>
                </div>
            </div>
        </div>
        </div>
        
    );
};

export default UserDashbord;