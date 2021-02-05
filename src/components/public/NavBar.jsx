import React from 'react'

// icons
import { FaShoppingBag } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { RiSearch2Fill } from 'react-icons/ri';
import { BsFillPersonFill } from 'react-icons/bs';

// react router
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="
      z-30
      text-5xl
      sm:text-6xl
      bottomeNav 
      col-start-1 
      col-end-7 
      fixed 
      bottom-0 
      py-4 
      bg-white 
      rounded-t-3xl
    ">
      <div className="flex justify-between px-10 sm:px-20 w-screen">
        <div>
          <NavLink  to="/"><AiFillHome /></NavLink>
        </div>
        <div>
          <NavLink  to="/search"><RiSearch2Fill /></NavLink>
        </div>
        <div>
          <NavLink  to="/"><BsFillPersonFill /></NavLink>
        </div>
        <div>
          <NavLink  to="/basket"><FaShoppingBag /></NavLink>
        </div>
      </div>
    </div>
  )
}
