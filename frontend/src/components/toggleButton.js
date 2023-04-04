import React,{useState,useEffect} from 'react'
import { FaStream } from 'react-icons/fa';

const Dashboard = () => {

    const [toggler, setToggler] = useState(true);
  
    

    const sidebarDisplayToggler = ()=>{
      var Sidebar = document.getElementById('Sidebar');
       if(Sidebar.style.display === "block"){
         setToggler(true);
         Sidebar.style.display = "none";
       }else{
         setToggler(false);
         Sidebar.style.display = "block";
       }
   }
  

  return (
    <>
        <button type="button" className="top-0 right-0 md:hidden absolute text-white m-3 p-5 bg-slate-500 hover:animate-spin" onClick={()=>sidebarDisplayToggler()}>
             <FaStream />
         </button>
    </>
  )
}

export default Dashboard