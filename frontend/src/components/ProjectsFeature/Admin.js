import React,{useState, useEffect} from 'react';
import ModalContainer from '../../Pages/ModalContainer';
import { FaTrash , FaLink } from "react-icons/fa";
import axios from "axios"
import {Link} from "react-router-dom";

const initalState = {
   email : "",
   title : "",
   description : ""
};

const Admin = () => {

  const [project, setProject] = useState([""]);
  const [token, setToken] = useState("");
  const [visibility, setVisibility] = useState(false);
  const [formValue, setFormValue] = useState(initalState);
  const { email , title , description} = formValue;

  const onInputChange = (e) =>{
   let {name , value } = e.target;
      setFormValue({...formValue, [name] : value}); 
  }
  
  useEffect(()=>{
        let token = localStorage.getItem("login_token");
        setToken(token);
  },[token])

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
         setProject(data);
      } catch (error) {
        console.log(error);
      }
  }
  const removeProject = async (id) =>{
   try {
      const response = await fetch(`http://localhost:8080/project/remove/${id}`,{
          method : "GET", 
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Authorization': "Bearer " + token,
          }
        });
           const result = await response.json();
          if(result){ 
             alert(result.statusMessage);
          }else{
           console.log("Failed To Do This Operation");
          }
      } catch (error) {
        console.log(error);
      }
  }
  useEffect(() => {
      projectFetcher(token);
   }, [token])
   
 

  const handleSubmission = async (id)=>{
   try {
      const response = await fetch(`http://localhost:8080/project/remove/${id}`,{
          method : "PUT", 
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Authorization': "Bearer " + token,
          }
        });
           const result = await response.json();
          if(result){ 
           const data = result.projects;
           setProject(data);
           return data;
          }else{
           console.log("failed");
          }
      } catch (error) {
        console.log(error);
      }
  }

  const handleVisibility = (value) =>{
     setVisibility(value);
  }
  


  return (
      <>
         {visibility && <ModalContainer handleVisibility={handleVisibility} />}
         
         {/* modal starts here */}
 
         {/* <div class="modal fade" id="updateForm" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                   Update Project
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
              <form className='w-full min-h-full flex flex-col jusitfy-center items-center' onSubmit={handleSubmission} >
              <label htmlFor="email" className='w-11/12 py-2 my-1' >
                         <span className='py-2'  >
                            Update The Email :
                         </span>
                         <input type="email" 
                         className='w-full p-2 border border-black placeholder-gray-600 text-gray-600' 
                         name='email'
                         value={email}
                         onChange={e =>onInputChange(e)}
                        placeholder='Update Email' required  />
                    </label>
                    <label htmlFor="title" className='w-11/12 py-2 my-1' >
                         <span className='py-2'  >
                            Enter The Project Name :
                         </span>
                         <input type="text" 
                         name='title'
                         value={title} 
                         onChange={e =>onInputChange(e)}
                         className='w-full p-2 border border-black placeholder-gray-600 text-gray-600' 
                          placeholder='Project Name' 
                          required />
                    </label>
                    <label htmlFor="description" className='w-11/12 py-2 my-1' >
                         <span className='py-2'  >
                            Enter The Project Description:
                         </span>
                         <input type="text" 
                         className='w-full p-2 border border-black placeholder-gray-600 text-gray-600' 
                         name='description'
                         value={description}
                         onChange={e =>onInputChange(e)}
                        placeholder='Project Description' required  />
                    </label>
                    <div className='w-11/12 ' >
                        <input type="submit" className=' my-4 border border-slate-100 p-2' value="Create"  />
                    </div>
                    
                 </form>
              </div>
              <div class="modal-footer">
               <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div> */}
 
         {/*  modal ends here */}
        <div className="z-30 w-full h-full p-2 flex flex-col justify-start items-center" id='adminProjectFeature'>
               {/*  Modal button  */}
                <div className='w-full h-2/12 flex justify-between items-center border-b border-gray-400/50 py-2'>

                     <div className='text-xl font-semibold' >
                        Latest Projects
                     </div>

                    <button type='button' className='w-40 border border-slate-900 bg-transparent p-2' onClick={()=>setVisibility(true)} >Add Projects</button>
                </div>
                {/*  modal button ends here */}
                 <div className='w-full h-10/12 py-6 flex flex-wrap justify-center items-center lg:overflow-x-scroll' >
         
                                 {project?.map((d,index)=>{
                                    
                                    return (
                                       <div key={index} className='h-60 xl:w-80 lg:w-3/12 md:w-5/12 w-11/12 m-1 flex flex-col justify-between items-center bg-white/20 border border-slate-900/50 p-2' >
                                          <div className="w-full">
                                             <div className="w-full flex flex-row justify-between items-start">
                                          <div className='text-lg font-semibold' >
                                                 {d.projectName}
                                              </div>
                                              <div className='w-1/3 h-full flex py-2 justify-end items-center' >
                                                  <button type='button' className='border-0 mx-1' onClick={(e)=>{removeProject(d.id)}} >
                                                      <FaTrash color='rgba(255, 0, 0, 0.8)' className='text-md' />
                                                  </button>
                                                  <Link to="/projects" state={{id : d.id}} className='mx-1 flex justify-center items-center' >
                                                    <button type='button' className='border-0' >
                                                       <FaLink color='rgba(0, 0, 0, 0.8)' className='text-md' />
                                                    </button>
                                                  </Link>
                                              </div>
                                             </div>

                                             <div className='w-11/12 flex justify-start items-center text-sm' >
                                                {d.description}
                                             </div>
                                          </div>

                                           
                                           <div className='w-full flex justify-evenly items-center text-sm text-gray-600' >
                                              <div>
                                                Created at : {d.createdAt}
                                              </div>
                                              <div className='w-10 h-10 flex justify-center items-center text-black' >
                                                  <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" className='rounded-full' alt="avatar" />
                                              </div>
                                          </div>
                                       </div> 
                                    );
                                 })}
                  
                    </div>
                 </div>
      </>
  )
}

export default Admin