import React, { useEffect, useState } from "react";
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


const Sidebar = (props) => {

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
    id : 7,
    element : "Setting",
    route : "/setting",
    icon : <FaCog />
  
}
]

   const [userEmail, setUserEmail] = useState("");
   const [isLoggedIn, setIsLoggedIn] = useState(false);

    const logOutHandler = (e) =>{
      setIsLoggedIn(false);
      localStorage.clear();
      alert("Logout SuccessFull");
    }
     
    useEffect(()=>{
        setIsLoggedIn(props.isLoggedIn);
        setUserEmail(props.userEmail);
    },[props.isLoggedIn, props.userEmail])

  return (
    <>  
       <div className="Sidebar" id="Sidebar">
       <div className="py-1 h-3/4 w-full">
       <div className="logo flex flex-col items-center justify-center text-gray-100 ">
          <h4 className="py-5">
             ERP
          </h4>
          <div className="w-20 h-20 flex justify-center items-center  bg-slate-300 text-xl text-black" id="userProfile">
               {userEmail[0]}
          </div>
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
          <li className="w-full text-center text-lg text-gray-200 flex items-center justify-center py-5 my-1  hover:border-t hover:border-b hover:border-slate-400 cursor-pointer hover:text-slate-100" onClick={(e)=>logOutHandler(e)} >
               <FaSignOutAlt />                     
          </li>
        </ul>
      </div>
    </div>
    </>
    
  );
};

export default Sidebar;
