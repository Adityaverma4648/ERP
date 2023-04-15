import React, { useState } from 'react';
import ProjectModal from "../components/Modal/ProjectModal";

const ModalContainer = ({handleVisibility},props) => {

  const [visibility, setVisibility] = useState(false);
  const [theme, setTheme] = useState("project");

  return (
    <div className='h-screen w-screen flex justify-center items-center absolute top-0' >
         {theme === "project"  ? <ProjectModal handleVisibility= {handleVisibility}  /> : console.log("Projects Modal Was Avoided")}
         <div className='top-0 w-screen absolute min-h-screen bg-black/50 z-30 flex justify-center items-center' onClick={(e)=>{handleVisibility(false)}} >
         </div> 
         
    </div>
  )
}

export default ModalContainer