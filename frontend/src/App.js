import './App.css';
import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom"; 
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Sidebar from './components/Sidebar';
import Explore from "./Pages/Explore.js";
import Event from "./Pages/Event";
import ToDoList from "./Pages/ToDoList";
function App() {
 
  return (
    <>
      <BrowserRouter>
        <Sidebar />
          <Routes>
             <Route path='/' element={<Home />} ></Route>
             <Route exact path='/signUp' element={<SignUp />} ></Route>
             <Route path='/explore' element={<Explore />} ></Route>
             <Route exact path='/login' element={<Login />}></Route>
             <Route path='/event' element={<Event />} ></Route>
             <Route path='/toDoList' element={<ToDoList />} ></Route>
          </Routes>
      </BrowserRouter>
    </> 
  );
}

export default App;
