import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { authContext } from '../../Provider/AuthProvider';

const Profile = () => {
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

    return (
        <div>
            <Helmet>
                <title>অনবদ্য-৩৭ | Profile</title>
            </Helmet>
        <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={user.photoURL} className="max-w-sm w-9/12 rounded-lg shadow-2xl" />
            <div>
            <h1 className="text-2xl">Name: {user.displayName}</h1>
            <p>Email: {user.email}</p>
            <p>uid: {user.uid}</p>
            <button onClick={handelLogOut} className="btn btn-sm btn-outline mt-10">logOut</button>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Profile;