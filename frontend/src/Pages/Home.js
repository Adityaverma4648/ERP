import React,{useEffect, useState} from 'react';
import Welcome from "../components/Welcome";
import Project from '../components/Project';
import {FaStream} from "react-icons/fa";
import LockedFeature from "../components/LockedFeature";

const Home = (props,{handleVisibility}) => {

  const [toggler, setToggler] = useState(true);
  const [isLoggedIn, setIsLoggedIn ] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [role, setRole] = useState("user");
  const [token, setToken] = useState("")

  const sidebarDisplayToggler = ()=>{
    var Sidebar = document.getElementById('Sidebar');
     if(Sidebar.style.display === "block"){
       setToggler(true);
       Sidebar.style.display = "none";
     }else{
       setToggler(false);
       Sidebar.style.display = "block";
     }
 }
 useEffect(()=>{
    setIsLoggedIn(props.isLoggedIn);
    setToken(props.token);
 },[props.isLoggedIn, props.token])
 
 useEffect(()=>{
  const userEmail = localStorage.getItem("userEmail")
     setUserEmail( userEmail );
 },[userEmail])

  return (
    <div className='Home flex flex-col'>
          <div className="mt-1 bg-slate-300 text-gray-700 container px-5 py-4 my-1 flex justify-between">
           <span className="font-bold  text-3xl">
               Dashboard
           </span>
        <div>
        <button type="button" className="top-0 right-0 md:hidden absolute text-white m-3 p-5 bg-slate-500 hover:animate-spin" onClick={()=>sidebarDisplayToggler()}>
       <FaStream />
         </button>
        </div>
         </div>
          <Welcome />
          {isLoggedIn ? <Project handleVisibility={handleVisibility} role={role} /> : <LockedFeature block="project" />}
          
    </div>
  )
}

export default Home;