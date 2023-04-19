import React, { useState , useEffect } from 'react';
import { FaEdit, FaPlus } from 'react-icons/fa';
import {useLocation} from "react-router-dom";
import ModalContainer from './ModalContainer';

const Projects = (props) => {

   const location = useLocation();
   const { id } = location.state;
   const [project, setProject] = useState([]);
   const [visibility, setVisibility] = useState(false);
   const [theme, setTheme] = useState("addUser");
   const [Task, setTask] = useState([]);

   const projectFetcher = async(token) =>{
    try {
      const response = await fetch("http://localhost:8080/project/fetchProjects",{
          method : "GET", 
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Authorization': "Bearer " + token,
          }
        });
         const result = await response.json();
         const data = result.projects;
         console.log(data);
         let array = data.filter((d) => {
          return d.id === id;
        });
         setProject(array);
      } catch (error) {
        console.log(error);
      }
  }
  useEffect(() => {
    projectFetcher(props.token);
 }, [props.token]);

   const fetchUser = async () =>{
    try {
      const response = await fetch("http://localhost:8080/project/fetchProjects",{
          method : "GET", 
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Authorization': "Bearer " + props.token,
          }
        });
         const result = await response.json();
         const data = result.projects;
         console.log(data);
         let array = data.filter((d) => {
          return d.id === id;
        });
         setProject(array);
      } catch (error) {
        console.log(error);
      }
   }

  const addUser = () =>{
     setVisibility(true);
     setTheme("addUser");
  }
  
  const updateProject = ()=>{
    setVisibility(true);
     setTheme("updateProject");
  }

  const handleVisibility = (value) =>{
     setVisibility(value);
  }

  const addTask = () =>{
    setVisibility(true);
    setTheme("addTask");
  }

  return (
     <>
     {visibility && theme==="addUser" && <ModalContainer myTheme="addUser" handleVisibility={handleVisibility} />}
     {visibility && theme==="updateProject" && <ModalContainer myTheme="updateProject" handleVisibility={handleVisibility} />}
     {visibility && theme==="addTask" && <ModalContainer myTheme="addTask" handleVisibility={handleVisibility} />}

    <div className='w-screen h-screen flex justify-center items-center Home'>
      {project.map((d)=>{
         return(
          <div className='md:w-3/4 w-11/12 h md:h-3/4 bg-slate-300 p-5 flex flex-col justify-between items-center shadow-xl' >
            <div className='w-full flex flex-col justify-center items-center' >
            <div className='w-full flex md:flex-row flex-col justify-between items-center border-b border-gray-500/50 py-2' >
                <div className='text-lg font-semibold text-gray-700' >
                  {d.projectName}
                </div>
                <div className='flex '>
                  <div className='font-semibold text-gray-700' >
                  Created At : 
                  </div>
                  <strong className='mx-1 font-light text-gray-500'>{d.createdAt.slice(0,10)}</strong>
                  <div className="mx-1">
                     <button type='button' className='border-0 bg-transparent' >
                     <FaEdit className='text-lg cursor-pointer' onClick={updateProject} />
                     </button>
                  </div>
                </div>
               
             </div>

             <div className='w-full flex md:flex-row flex-col justify-between items-center  py-2' >
                   {/*  fetch All task related to this project */}

                   {/*  fetch ends here */}
                  <div className='w-72 h-72 border border-gray-400 flex flex-col justify-center items-center cursor-pointer' onClick={addTask}>
                      <FaPlus className='text-3xl' color='rgba(0,0,0,0.2)' />
                      <span className='text-2xl font-semibold text-black/20' >
                         Add Task
                      </span>
                  </div>
             </div>
            </div>


             <div className='w-full flex md:flex-row flex-col justify-between items-center border-t border-gray-500/50 py-2' >
                <div className=' text-gray-700 flex ' >
                   <div className='w-10 h-10 rounded-full bg-gray-600 flex justify-center items-center text-white' >
                     {d.user.email[0].toUpperCase()}
                   </div>

                   <div className='w-10 h-10 rounded-full bg-gradient-to-r from-red-600 to-blue-500 flex justify-center items-center text-white' >
                     <FaPlus />
                   </div>
                </div>
                <div className='flex justify-end items-center'>
                  <button type='button' className='border border-gray-500/50 p-2' onClick={addUser}  >
                      Assign Users
                  </button>
                </div>
             </div>

          </div>
         )
      })}
    </div>
    </>
  )
}

export default Projects