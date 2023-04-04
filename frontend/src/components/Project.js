import React,{useState , useEffect} from 'react';
import Admin from "./ProjectsFeature/Admin";
import User from "./ProjectsFeature/User";
const Project = (props) => {

  const [role, setRole] = useState("");

  useEffect(()=>{
     setRole(props.role);
  },[props.role])

  

  return (
    <div className='container h-1/3 flex justify-center items-center bg-slate-300 mt-1' >
          <div className='w-11/12 text-start absolute flex justify-center items-center text-slate-400/30' style={{fontSize : "180px", userSelect : "none"}}>
              Projects
          </div>
          {role === "user" ? <Admin /> : <User /> }
          
          
        {/*  fetching ongoing Projects  */} 
                {/*  tracking Progess */}
    </div>
  )
}

export default Project