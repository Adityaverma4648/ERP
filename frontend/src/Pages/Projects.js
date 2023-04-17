import React, { useState , useEffect } from 'react';
import { FaPlus } from 'react-icons/fa';
import {useLocation} from "react-router-dom";

const Projects = (props) => {

   const location = useLocation();
   const { id } = location.state;
   const [project, setProject] = useState([]);

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


  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      {project.map((d)=>{
         return(
          <div className='md:w-3/4 w-11/12 h md:h-3/4 bg-gray-300 p-5 flex flex-col justify-between items-center' >
             <div className='w-full flex md:flex-row flex-col justify-between items-center border-b border-gray-500/50 py-2' >
                <div className='text-lg font-semibold text-gray-700' >
                  {d.projectName}
                </div>
                <div className='flex '>
                  <div className='font-semibold text-gray-700' >
                  Created At : 
                  </div>
                  <strong className='mx-1 font-light text-gray-500'>{d.createdAt}</strong>
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
                  <button type='button' className='border border-gray-500/50 p-2' >
                      Assign Users
                  </button>
                </div>
             </div>

          </div>
         )
      })}
    </div>
  )
}

export default Projects