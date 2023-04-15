import React,{useState} from 'react';
import ProjectModal from "./Modal/ProjectModal";

const Modal = (props) => {

  const [theme, setTheme] = useState("project");

  return (
    <div className='Modal h-60 w-60 bg-white flex flex-col justify-center items-center' id='Modal'>
       {theme === "project" && <ProjectModal /> }
    </div>
  )
}

export default Modal