import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'


const Navbar = () => {
  // const [isLoggedIn, setLoggedIn] = useState(true);
  // const navigate = useNavigate(); // Initialize navigate from react-router-dom

  // Handle login
  // const handleLogin = () => {
    // setLoggedIn(false);
    // Navigate('/login'); // Redirect to the login page after login action
  // };

  // Handle logout
  // const handleLogout = () => {
    // setLoggedIn(true);
    // navigate('/'); // Redirect to the home page after logout action

  // }
  return (
    <>
    <div className="navbar bg-base-100  ">
  <div className="navbar-start">
    <div className="dropdown ">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li ><Link  to="/">Home</Link></li>
      
      <li ><Link to="/api">MealName</Link></li>
     
        
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to="/">Home</Link></li>
      
       <li><Link to="/api">MealName</Link></li>
      
      
    </ul>
  </div>
  <div className="navbar-end">

  {/* {isLoggedIn ? (
            <a className="btn" onClick={handleLogout}>Logout</a>
          ) : (
            <a className="btn" onClick={handleLogin}>Login</a>
          )} */}


  </div>
</div>
      
    </>
  )
}
export default Navbar



