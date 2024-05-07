import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../Provider/AuthProvider";
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { sendEmailVerification } from "firebase/auth";

const Reginster = () => {
  const {createUser} = useContext(authContext)
  const navlink = useNavigate()



  const handelRegistration = e =>{
    e.preventDefault();
    const name = e.target.name.value;
    const id = e.target.id.value;
    const batch = e.target.batch.value;
    const contact = e.target.contact.value;
    const section = e.target.section.value;
    const email = e.target.email.value;
    const password = e.target.password.value;


    console.log(name, id, batch, contact, section, email, password);

    // create User
    createUser(email, password)
    .then(result =>{
      console.log(result.user);
      e.target.reset();
      navlink('/login');
      // send Verification Email
      sendEmailVerification(result.user) 
      .then(() =>{
        alert('please check your email & verify your Account');
      })

    })
    .catch(error =>{
      console.log(error.meaasge)
    })
  }
    return (
        <div>
          <Helmet>
                <title>অনবদ্য-৩৭ | Home</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Please Regestration!</h1>
     
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handelRegistration} className="card-body" style={{backgroundImage: `url("/anob.jpg")`}}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="name" name='name' placeholder="Enter Your Full Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Student ID</span>
          </label>
          <input type="id" name='id' placeholder="Enter University Id" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Batch</span>
          </label>
          <input type="batch" name='batch' placeholder="Your University Batch No" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Contact No</span>
          </label>
          <input type="contact" name='contact' placeholder="contact No" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Section</span>
          </label>
          <input type="section" name='section' placeholder="Your Section" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
        <p>Do you have Already Account? <Link to="/login">Login</Link></p>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Reginster;