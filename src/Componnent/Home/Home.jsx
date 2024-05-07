
// import { useContext } from "react-router-dom";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";


const Home = () => {
    const {user, logOut} = useContext(authContext);

    const handelLogOut = () =>{
        logOut()
        .then(()=>{
            console.log('Sigmout');
        })
        .catch(error =>{
            console.log(error.message);
        })
    }
    const Linkes = <>
            
            {
                user ? <>
                <Link className="btn ml-3" to="/dashbord">Dashbord</Link>
                <Link className="btn ml-3" to="/album">Photo Galary</Link>
                <Link className="btn ml-3" to="/order">Notification</Link>
                <Link className="btn ml-3" to="/profile">Profile</Link>
                
                
                </>
                : <>
                {/* <Link className="btn ml-3" to="/login">Login</Link> */}
                <Link className="btn ml-3" to="/register">Register</Link>   
                </>  
                
            }
            </>

            const contexInfo = useContext(authContext);
            console.log(contexInfo);
            
            // const varifide = user.emailVerified;
            // console.log(varifide);
    return (
        
        <div>
            <Helmet>
                <title>অনবদ্য-৩৭ | Home</title>
            </Helmet>
                    <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {Linkes}
                        </ul>
                        </div>
                        {/* <a className="btn btn-ghost text-xl">PUC Alumni</a> */}
                        <img className="w-3/12 rounded-xl" src="../../../public/ano.jpg" alt="" />
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                        {Linkes}
                        </ul>
                    </div>
                    <div className="navbar-end">

                        {
                            user ? <><span className="text-sm mx-4">{user.displayName || user.email}</span>
                            <div className="avatar">
                                <div className="w-4/6 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={user.photoURL}/>
                                </div>
                            </div>
                            <a onClick={handelLogOut} className="btn btn-sm mx-3">Sign Out</a>
                             </>
                             : <Link to="/login">
                                <button className="btn btn-sm mx-4">Login</button>
                             </Link>

                        }
                        
                    </div>
            </div>

        </div>
                    
    );
};

export default Home;
