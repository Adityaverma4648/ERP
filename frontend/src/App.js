import './App.css';
import React,{useState , useEffect} from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom"; 
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Sidebar from './components/Sidebar';
import Explore from "./Pages/Explore.js";
import Event from "./Pages/Event";
import ToDoList from "./Pages/ToDoList";
import Report from "./Pages/Report";
import Setting from "./Pages/Setting";
import axios from "axios";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState("user")
  const [userEmail, setUserEmail] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {   
    const user = localStorage.getItem("userEmail");
    const myToken = localStorage.getItem("login_token");
    if(user){
      const modifiedUser  = user[0].toUpperCase();
      setUserEmail(modifiedUser);
    }
    if(myToken){
      setToken(token);
    }
  }, [userEmail,token])
  
  const statusChecker = () =>{
    if(localStorage.getItem("login_token")){
         setIsLoggedIn(true);
    }
  }
  const userDataFetcher = async() =>{
    try {
      const response = await axios.post("http://localhost:8080/auth/fetch",{
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'Authorization': "Bearer " + token,
      }
      })
      const userData = response.json();
      console.log(userData);
      return userData;
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
     statusChecker();
  }, [])
  

  return (
    <>
      <BrowserRouter>
        <Sidebar userEmail={userEmail} isLoggedIn={isLoggedIn} role={role} />
          <Routes>
             <Route path='/' element={<Home isLoggedIn={isLoggedIn} />} ></Route>
             {/*  auth Routes */}
             <Route exact path='/signUp' element={<SignUp isLoggedIn={isLoggedIn} token={token} />} ></Route>
             <Route exact path='/login' element={<Login />}></Route>
             {/*  auth Routes Ends here */}

             {/*  Pages Routes */}
             <Route path='/explore' element={<Explore isLoggedIn={isLoggedIn}  />} token={token} ></Route>
             <Route path='/event' element={<Event isLoggedIn={isLoggedIn}  />}  token={token}></Route>
             <Route path='/toDoList' element={<ToDoList isLoggedIn={isLoggedIn}  />} token={token} ></Route>
             <Route path='/report' element={<Report isLoggedIn={isLoggedIn} />}  token={token} ></Route>
             <Route path='/setting' element={<Setting isLoggedIn={isLoggedIn} />}  token={token} ></Route>
             {/*  Pages Routes Ends here */}
          </Routes>
      </BrowserRouter>
    </> 
  );
}

export default App;
