import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaCompass,
  FaCalendar,
  FaCog,
  FaExclamationTriangle,
  FaSignOutAlt,
  FaStream,
  FaList
} from "react-icons/fa";


const Sidebar = () => {

  const NavigationElement = [{
     id : 1,
     element : "Home",
     route : "/",
     icon : <FaHome />
  },
  {
    id : 2,
    element : "Explore",
    route : "/explore",
    icon : <FaCompass />
 },
 {
  id : 3,
  element : "Events",
  route : "/event",
  icon : <FaCalendar />
},
{
  id : 4,
  element : "ToDoList",
  route : "/toDoList",
  icon : <FaList />
},
{
  id : 5,
  element : "Report",
  route : "/report",
  icon : <FaExclamationTriangle />
},
{
  id : 6,
  element : "SignOut",
  route : "/signOut",
  icon : <FaSignOutAlt />
},
{
    id : 7,
    element : "Setting",
    route : "/setting",
    icon : <FaCog />
  
}
]
  const [toggler, setToggler] = useState()

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
         <button  type="button" className="toggleSideBar top-0 right-0 absolute text-white m-3 p-5 bg-slate-500" onClick={sidebarDisplayToggler}>
             <FaStream />
        </button>
       <div className="Sidebar" id="Sidebar">
       <div className="py-1 h-3/4">
       <div className="logo flex items-center justify-center text-gray-100 ">
          <h4 className="py-5">
             LOGO
          </h4>
      </div>
       <ul className="py-4 mt-3 h-2/4">
          {
            NavigationElement?.slice(0,4).map((d)=>{
                    return <Link to= {d.route} key={d.id}>
                            <li className="w-full text-center text-lg text-gray-200 flex items-center justify-center p-5 my-4 hover:border-2 hover:border-sky-500  hover:text-slate-700">
                               {d.icon}
                            </li>
                          </Link>
          })
          }
        </ul>
       </div>
      <div className="sideBarLinks h-1/4">
           <ul>
           {
            NavigationElement?.slice(4,7).map((d)=>{
                    return <Link to= {d.route} key={d.id}>
                            <li className="w-full text-center text-lg text-gray-200 flex items-center justify-center p-5 my-4 hover:border-2 hover:border-sky-500  hover:text-slate-700" >
                               {d.icon}
                            </li>
                          </Link>
          })
          }
        </ul>
      </div>

        </div>
    </>
    
  );
};

export default Sidebar;
