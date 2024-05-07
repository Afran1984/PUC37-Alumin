import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../Provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";
import { useRef, useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../../firebase/firebaseConfig";

const Login = () => {
    const {signInUser, signInWithGoogle} = useContext(authContext)
    const emailRef = useRef(null);
    const navlink = useNavigate()


    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log('Email:', email);
        console.log('Password:', password);
        // singIn
        signInUser(email, password)
        .then(result =>{
            console.log(result.user);
            e.target.reset();
            if(result.user.emailVerified){
                navlink('/dashbord');
            }
            else{
                alert(<div role="alert" className="alert shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <div>
                  <h3 className="font-bold">New message!</h3>
                  <div className="text-xs">You have 1 unread message</div>
                </div>
                <button className="btn btn-sm">See</button>
              </div>)
            }
            
        })
        .catch(error =>{
            console.log(error.message);
        })
    }
    const handelLogInGoogle =() =>{
        signInWithGoogle()
        
        .then(result=>{
            console.log(result.user)
        })
        .catch(error =>{
            console.log(error.message);
        })
        navlink('/dashbord');
        
    }

    const handelForgetPassword = () => {
        const email = emailRef.current.value;
        if (!email) {
            console.log('please Provide an Email');
            return;
        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            console.log('please give me valid email');
            return;
        }
        // sent Valid emailation 

        sendPasswordResetEmail(auth, email)
        .then(()=>{
            alert('please check your Email');
        })
        .catch(error =>{
            console.log(error.message);
        })
    };

    return (
        <div>
            <Helmet>
                <title>অনবদ্য-৩৭ | Home</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200" style={{backgroundImage: `url("/anob.jpg")`}}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                {/* <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div> */}
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required ref={emailRef} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                            <a onClick={handelForgetPassword} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p>You have no Account? <Link to="/register">Register</Link> </p>
                    <div className="flex gap-4 justify-center">
                        <p><button onClick={handelLogInGoogle}><FcGoogle /></button></p>
                        <p><button><FaGithub /></button></p>
                        <p><button><FaLinkedin /></button></p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    );
};

export default Login;
