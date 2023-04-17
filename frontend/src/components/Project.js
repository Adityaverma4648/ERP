import React,{useState , useEffect} from 'react';
import Admin from "./ProjectsFeature/Admin";
import User from "./ProjectsFeature/User";
const Project = (props) => {

  const [role, setRole] = useState("");
  const [visibility, setVisibility] = useState(false);


  useEffect(()=>{
     setRole(props.role);
  },[props.role])

  
  return (
    <div className='container h-auto flex flex-col justify-center items-center bg-slate-300 mt-1' >
          <div className='w-11/12 h-2/12 text-start absolute flex justify-center items-center text-slate-400/30' style={{fontSize : "180px", userSelect : "none"}}>
              Projects
          </div>
          <div className='w-11/12 h-10/12 flex justify-center items-center' >
             {role === "user" ? <Admin /> : <User /> }
          </div> 
    </div>
  )
}

export default Project