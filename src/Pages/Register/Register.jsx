import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthContext';
import usePageTitle from '../PageTitle/PageTitle';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';

const Register = () => {
  usePageTitle('SignUp')
  const navigate=useNavigate();
  const {createUser,signInWithGoogle,setUser,updatedUser}=useContext(AuthContext);
  const [error, setError] = useState('');

  const handleRegister = (event) => {
    event.preventDefault();
    const name= event.target.name.value;
    const photo=event.target.photo.value
    const email= event.target.email.value;
    const password= event.target.password.value;
    // console.log(name, email, password);
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!passwordRegex.test(password)) {
      setError("Password must be at least 6 characters long, include one uppercase letter, one lowercase letter, and one number.");
      return;
    }
  
    setError(''); // Clear any previous error

    createUser(email, password)
    .then(result => {
      const user = result.user;
      updatedUser({ displayName: name, photoURL: photo })
        .then(() => {
          const updated = { ...user, displayName: name, photoURL: photo };
          setUser(updated);
          navigate('/'); 
        })
        .catch((error) => {
          console.log(error);
          setUser(user); 
          toast.success('LoggedIn successfully!');
          navigate('/');
        });
    })
    .catch(error => {
      console.error(error.message);
    });
  }  
const handleSignUpWithGoogle=()=>{
    signInWithGoogle()
    .then(result => {
      console.log(result);
      toast.success('Account Created successfully!');
      navigate('/');
    })
    .catch(error => {
      console.log(error);
    });
}
    return (
      <div className="card bg-base-100 w-full mx-auto mt-20 lg:my-10 max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
      <h1 className="text-3xl text-center font-bold">Create Your Account</h1>
        <form onSubmit={handleRegister} className="fieldset">
          <label className="label">Name</label>
          <input type="text" className="input" name='name' placeholder="Enter your name" />
          <label className="label">Photo URL</label>
          <input type="text" className="input" name='photo' placeholder="Enter photo URL" />
          <label className="label">Email</label>
          <input type="email" className="input" name='email' placeholder="Email" required />
          <label className="label">Password</label> 
          <input type="password" className="input" name='password' placeholder="Password" required />
          {error && (
        <p className="text-red-500 font-medium text-sm mb-2">{error}</p>
            )}
          <button type='submit' className="btn btn-neutral mt-4">Create Account</button>
          <button onClick={handleSignUpWithGoogle} className="btn bg-white text-black border-[#e5e5e5]">
<svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
Countinue with Google
          </button>
        <p className='text-center'>Already Have An Account? <Link to="/login" className='text-blue-600'>Login</Link></p>
        </form>
      </div>
    </div>

    );
};

export default Register;