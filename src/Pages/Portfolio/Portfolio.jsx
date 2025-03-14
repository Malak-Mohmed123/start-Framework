
import {  FaStar } from "react-icons/fa";
import poert1 from "./../../assets/poert1.png";
import port2 from "./../../assets/port2.png";
import port3 from "./../../assets/port3.png";
import test from './Portfolio.module.css';
import { NavLink } from "react-router-dom";





export default function Portfolio() {



  return (
    <>
     <div className="w-auto  flex flex-col justify-center items-center h-auto portfolio">
       <h1 className="text-[#2C3E50] uppercase text-3xl font-bold my-5">portfolio component</h1>
       <div className="flex flex-row items-baseline text-[#2C3E50]">
       <hr className="w-20 h-1 my-8 bg-[#2C3E50] border-0 rounded-sm dark:bg-gray-700 text-[#2C3E50]"></hr>
       <div className=" mx-2"><FaStar/></div>
       <hr className="w-20 h-1 my-8 bg-[#2C3E50] border-0 rounded-sm dark:bg-gray-700 text-[#2C3E50]"></hr>
     </div>
     <ul className="flex flex-row gap-4 py-5">
     <li className="test.parent">
      <img src={poert1} className="h-auto max-w-sm rounded-lg" />
          <NavLink to={'/Click'} className={test.pe}>.</NavLink>
        </li>
        <li className="test.parent">
      <img src={port2} className="h-auto max-w-sm rounded-lg" />
          <NavLink to={'/Click2'} className={test.pe}>.</NavLink>
        </li>
        <li className="test.parent">
      <img src={port3} className="h-auto max-w-sm rounded-lg" />
          <NavLink to={'/Click3'} className={test.pe}>.</NavLink>
        </li>
     
     </ul> 

     <ul className="flex flex-row gap-4 py-5">
     <li className="test.parent">
      <img src={poert1} className="h-auto max-w-sm rounded-lg" />
          <NavLink to={'/Click'} className={test.pe}>.</NavLink>
        </li>
        <li className="test.parent">
      <img src={port2} className="h-auto max-w-sm rounded-lg" />
          <NavLink to={'/Click2'} className={test.pe}>.</NavLink>
        </li>
        <li className="test.parent">
      <img src={port3} className="h-auto max-w-sm rounded-lg" />
          <NavLink to={'/Click3'} className={test.pe}>.</NavLink>
        </li>
     
     </ul> 
     </div>
   

     </>
     
  )
  
}
