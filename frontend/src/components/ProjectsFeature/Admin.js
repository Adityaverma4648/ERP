import React,{useState, useEffect} from 'react';
import ModalContainer from '../../Pages/ModalContainer';
import { FaTrash , FaEdit } from "react-icons/fa";
import axios from "axios"

const Admin = () => {

  const [project, setProject] = useState([""]);
  const [token, setToken] = useState("");
  const [visibility, setVisibility] = useState(false);
  const [theme, setTheme] = useState("project");
  
  useEffect(()=>{
        let token = localStorage.getItem("login_token");
        setToken(token);
  },[token])

  const projectFetcher = async(token) =>{
    try {
      const response = await axios.get("http://localhost:8080/project/fetchProjects" ,{
         headers: {
             'Content-type': 'application/json; charset=UTF-8',
             'Authorization': "Bearer " + token,
        }});
      //  const result = await response.json();
       alert(JSON.stringify(response));
       return JSON.stringify(response); 
      } catch (error) {
        console.log(error);
        alert(error);
      }
  }

  const handleVisibility = (value) =>{
     setVisibility(value);
  }
  
    useEffect(() => {
      if(token){  
          const data = projectFetcher(token);
          alert("FROM USEEFFECT");
          alert(JSON.stringify(data));
          setProject(data);
      }
    }, [])
    

  return (
      <>
         {visibility && <ModalContainer handleVisibility={handleVisibility} />}
        <div className="z-30 w-full h-full p-2 flex flex-col justify-start items-center" id='adminProjectFeature'>
               {/*  Modal button  */}
                <div className='w-full flex justify-end items-center'>
                    <button type='button' className='w-40 border border-slate-900 bg-transparent p-2' onClick={()=>setVisibility(true)} >Add Projects</button>
                </div>
                {/*  modal button ends here */}
                 <div className='w-full py-6 flex justify-center items-center' >
                    <div className='w-full h-40 flex flex-col justify-center items-center' id="fetchHistoryProject">

                           {/*  block heading  */}
                           <div className='w-10/12 flex justify-start items-center py-1 px-2' >
                                 <div className='text-xl font-semibold' >
                                 Latest Projects
                                 </div>
                            </div>
                            {/*  block heading ends here */}


                            {/*  fetch 2 latests projects  */}
                            <ul className='w-10/12 h-full flex flex-wrap justify-center items-center'>
                                 
                                 {project.map((d,index)=>{
                                    return (
                                       <li key={index} className='h-60 w-4/12 m-1 flex flex-col justify-evenly items-center bg-white/20 border border-slate-900/50 py-1' >
                                              <div>
                                                 {d.id}
                                              </div>
                                              <div className='text-lg font-semibold' >
                                                 {d.project_name}
                                              </div>
                                              <div className='text-gray-600' >
                                                 {d.description}
                                              </div>
                                              <div className='flex justify-evenly items-center' >
                                                  <button type='button' className='border-0 mx-2'>
                                                      <FaTrash color='red' className='text-xl' />
                                                  </button>
                                                  <button type='button' className='border-0 mx-2'>
                                                      <FaEdit color='black' className='text-xl' />
                                                  </button>
                                              </div>
                                       </li> 
                                    )
                                 })}
                        </ul>
                    </div>
                 </div>
            </div>
      </>
  )
}

export default Admin