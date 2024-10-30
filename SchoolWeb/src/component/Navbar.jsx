import React from "react";
import imagelogo from '../assets/logofevi.jpg'

function Navbar() {
  return (
    <div className="navbar bg-gray-900 sticky top-0 z-50">
      
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
            
          </div>
          
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a href="/">Homepage</a>
            </li>
            <li>
              <a href="/studentInfo">StudentInfo</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            
            <li>
              <a href="/login">AdminLogin</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <img className=" rounded-full w-12" src={imagelogo} alt="logo" />
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl">SDKL PUBLIC SCHOOL NIGHASAN KHERI</a>
      </div>
      <div className="navbar-end">
        
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Navbar;