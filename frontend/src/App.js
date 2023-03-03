import './App.css';
import React,{useState} from 'react';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"; 
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Sidebar from './components/Sidebar';
import Explore from "./Pages/Explore.js";
import Event from "./Pages/Event";
import ToDoList from "./Pages/ToDoList";
import { FaStream } from 'react-icons/fa';

function App() {
    //  const [sidebarDisplayStatus, setsidebarDisplayStatus] = useState(true)
    //  const sidebarDisplayToggler=()=>{
    //        setsidebarDisplayStatus(false);
    //  }
  return (
    <>
      <BrowserRouter>
        {/* <div className="toggleSideBar top-0 right-0 absolute text-white m-3 p-5 bg-slate-500" onClick={sidebarDisplayToggler()}>
             <FaStream />
        </div> */}
        <Sidebar />
          <Routes>
             <Route path='/' element={<Home />} exact></Route>
             <Route path='/signUp' element={<SignUp />} exact></Route>
             <Route path='/explore' element={<Explore />} exact></Route>
             <Route path='/login' element={<Login />} exact></Route>
             <Route path='/event' element={<Event />} exact></Route>
             <Route path='/toDoList' element={<ToDoList />} exact></Route>
          </Routes>
      </BrowserRouter>
    </> 
  );
}

export default App;
