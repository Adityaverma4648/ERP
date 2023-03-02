import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaCompass,
  FaCalendar,
  FaCog,
  FaExclamationTriangle,
  FaSignOutAlt,
  FaStream
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
  element : "Report",
  route : "/report",
  icon : <FaExclamationTriangle />
},
{
  id : 5,
  element : "SignOut",
  route : "/signOut",
  icon : <FaSignOutAlt />
},
{
    id : 6,
    element : "Setting",
    route : "/setting",
    icon : <FaCog />
  
}
]

const [toggler,setToggler] = useState(false);

  return (
    <>  
        <div className="toggleSideBar top-0 left-0 absolute text-white m-3 p-5 bg-slate-500" onClick={(e)=>{setToggler(true)}} >
             <FaStream />
        </div>
       <div className="Sidebar" id="Sidebar">
       <div className="py-1 h-3/4">
       <div className="logo flex items-center justify-center text-gray-100 ">
          <h4 className="py-5">
             LOGO
          </h4>
      </div>
       <ul className="py-4 mt-3 h-2/4">
          {
            NavigationElement?.slice(0,3).map((d)=>{
                    return <Link to= {d.route}>
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
            NavigationElement?.slice(3,6).map((d)=>{
                    return <Link to= {d.route}>
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
