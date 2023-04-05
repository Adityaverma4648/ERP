import React,{useState} from 'react';
import ProjectModal from "./Modal/ProjectModal";

const Modal = (props) => {

  const [theme, setTheme] = useState("project");

  return (
    <div className='Modal h-60 w-60 bg-white flex flex-col justify-center items-center' id='Modal'>
       {theme === "project" ? <ProjectModal /> : console.log("Could Not Fetch A Form") }
        {/* <div className='w-full' id='ModalHeader' >
            Lorem ipsum dolor sit.
        </div>
        <div className='w-full' id='ModalBody' >
            Lorem ipsum dolor sit.
        </div>
        <div className='w-full' id='ModalFooter' >
            Lorem ipsum dolor sit.
        </div> */}
    </div>
  )
}

export default Modal