import React, { useContext } from 'react';
import Logo from '../../assets/logo.png';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../Provider/AuthContext';
const Navbar = () => {
  const {user, signOutUser}=useContext(AuthContext);
  const handleSignOut=()=>{
    signOutUser()
    .then(()=>{
      // console.log('sign out success')
  })
  .catch((error)=>{
  console.log(error.message)
  })
  }  
    return (
      <div className="navbar bg-base-100 shadow-sm mt-4 rounded-3xl w-11/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
           <li><NavLink  className={({isActive})=>(isActive ? 'font-semibold underline text-[#176AE5]':'')} to="/">Home</NavLink></li>
           <li><NavLink  className={({isActive})=>(isActive ? 'font-semibold underline text-[#176AE5]':'')} to="/profile">My Profile</NavLink></li>
           <li><NavLink  className={({isActive})=>(isActive ? 'font-semibold underline text-[#176AE5]':'')} to="/about">About</NavLink></li>
{/* mobile logout */}

<li><NavLink to='/login' onClick={handleSignOut}>
  {user? 'Logout' : 'Login'}
  </NavLink></li>
          </ul>
        </div>
       <div className='hidden lg:flex items-center'>
        <img className='w-8 h-8' src={Logo} alt="" />
       <a className="text-xl font-bold">AppNest</a>
       </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        <li><NavLink  className={({isActive})=>(isActive ? 'font-bold underline text-black':'')} to="/">Home</NavLink></li>
        <li><NavLink  className={({isActive})=>(isActive ? 'font-bold underline text-black':'')} to="/profile">My Profile</NavLink></li>
        <li><NavLink  className={({isActive})=>(isActive ? 'font-bold underline text-black':'')} to="/about">About</NavLink></li>
        </ul>
      </div>
      <div className="navbar-end">
     
      <div onClick={handleSignOut}>
  {user ? (
    <div className="avatar flex items-center">
      <div className="ring-primary ring-offset-base-100 w-10 mr-2 rounded-full ring-2 ring-offset-2">
        <img src={user?.photoURL || "https://i.ibb.co/2nYpJmS/default-avatar.png"} alt="User" />
      </div>
      <Link className='hidden lg:block' to='/login'>
        <button className='btn bg-black text-white rounded-xl px-6'>Logout</button>
      </Link>
    </div>
  ) : (
    <Link className='hidden lg:block' to='/login'>
      <button className='btn bg-black text-white rounded-xl px-6'>Login</button>
    </Link>
  )}
</div>

            </div>
    </div>
    );
};

export default Navbar;