import React, { useContext, useState } from 'react';
import { Link, useNavigate} from 'react-router';
import { AuthContext } from '../../Provider/AuthContext';
import usePageTitle from '../PageTitle/PageTitle';
import { auth } from '../../firebase/Firebase.init';
import toast from 'react-hot-toast';



const Login = () => {
  usePageTitle('Login')
    const  {signInUser,signInWithGoogle,setUser}=useContext(AuthContext);
    const [error,setError]=useState('');
    const navigate=useNavigate();
    const handleLogin=(event) => {
        event.preventDefault();
        const email= event.target.email.value;
        const password= event.target.password.value;
        // console.log(email, password);

        signInUser(email,password).then(async result => {
          console.log(result)
          await auth.currentUser.reload(); 
          setUser(auth.currentUser); 
          toast.success('LoggedIn successfully!');
          navigate('/');
        })
        
    }
    const handleLoginWithGoogle=()=>{
      signInWithGoogle()
      .then(async result => {
        console.log(result)
        await auth.currentUser.reload();
        setUser(auth.currentUser);
        toast.success('LoggedIn successfully!');
        navigate('/');
      })
    
      .catch(error => {
        setError(error);
      });
    }
    return (
      <div className="card bg-base-100 w-full mx-auto mt-20 lg:my-10 max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
      <h1 className="text-3xl text-center font-bold">Welcome Back!</h1>
      <p className='text-center'>Enter your email and password to access your account.</p>
        <form onSubmit={handleLogin} className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" name='email' placeholder="Email" required />
          <label className="label">Password</label>
          <input type="password" className="input" name='password' placeholder="Password" required />
          <div><a className="link link-hover">Forgot password?</a></div>
          {error && (
      <p className="text-red-500 font-medium text-sm mb-2">{error}</p>
      )}
          <button type='submit' className="btn btn-neutral mt-4">Login</button>
          <p className='text-center'>Or</p>
          <button onClick={handleLoginWithGoogle} className="btn bg-white text-black border-[#e5e5e5]">
<svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
Login with Google
          </button>
        <p className='text-center'>Don't Have An Account? <Link to="/register" className='text-blue-600'>Register</Link></p>
        </form>
      </div>
    </div>
  
   
    );
};

export default Login;