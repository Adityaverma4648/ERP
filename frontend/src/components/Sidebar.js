import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaCompass,
  FaCalendar,
  FaCog,
  FaExclamationTriangle,
  FaSignOutAlt,
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
 
  // const Tooltip = (e)=>{
  //    return 0;
  // }


  return (
    <>  
         
       <div className="Sidebar" id="Sidebar">
       <div className="py-1 h-3/4 w-full">
       <div className="logo flex items-center justify-center text-gray-100 ">
          <h4 className="py-5">
             LOGO
          </h4>
      </div>
       <ul className="w-full py-4 mt-3 h-2/4">
          {
            NavigationElement?.slice(0,4).map((d)=>{
                    return <Link to= {d.route} key={d.id}>
                            <li className="w-full text-center text-lg text-gray-200 flex items-center justify-center py-5 my-4 hover:border-t hover:border-b hover:border-slate-400  hover:text-slate-100" >
                               {d.icon}
                            </li>
                          </Link>
          })
          }
        </ul>
       </div>
      <div className="sideBarLinks w-full h-1/4">
           <ul className="">
           {
            NavigationElement?.slice(4,7).map((d)=>{
                    return <Link to= {d.route} key={d.id}>
                            <li className="w-full text-center text-lg text-gray-200 flex items-center justify-center py-5 my-1  hover:border-t hover:border-b hover:border-slate-400  hover:text-slate-100" >
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
