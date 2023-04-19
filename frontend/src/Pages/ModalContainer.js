import React, { useEffect, useState } from 'react';
import ProjectModal from "../components/Modal/ProjectModal";
import AddUser from "../components/Modal/AddUser";
import UpdateProject from '../components/Modal/UpdateProject';
import AddTask from "../components/Modal/AddTask";
const ModalContainer = ({handleVisibility ,  myTheme}) => {

  const [visibility, setVisibility] = useState(false);
  const [theme, setTheme] = useState("");

  useEffect(()=>{
    setTheme(myTheme);
  },[])

  return (
    <div className='h-screen w-screen flex justify-center items-center absolute top-0' >
         {theme === "project"  && <ProjectModal handleVisibility= {handleVisibility}  /> }

         {theme === "addUser"  && <AddUser handleVisibility= {handleVisibility}  />}

         {theme === "updateProject"  && <UpdateProject handleVisibility= {handleVisibility}  />}

         {theme === "addTask"  && <AddTask handleVisibility= {handleVisibility}  />}
         <div className='top-0 w-screen absolute min-h-screen bg-black/50 z-30 flex justify-center items-center' onClick={(e)=>{handleVisibility(false)}} >
         </div> 
         
    </div>
  )
}

export default ModalContainer;