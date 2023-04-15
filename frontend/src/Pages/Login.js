import React, { useState } from "react";
import {FaEye , FaEyeSlash} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Dashboard from "../components/toggleButton";

const initialState = {
    email : "",
   password : "",
};

const Login = () => {
  const navigate = useNavigate();
  const [formValue , setFormValue] = useState(initialState);
  const { email , password} = formValue;
  const [visibility, setVisibility] = useState(false);
  const [isLoggedIn, setIsLoggedIn ] = useState(false);
  const [token, setToken] = useState("");
  const [userEmail, setUserEmail] = useState("");


  const setCheckedFun = (e) => {
    var password = document.getElementById("password");
    if(visibility){
      setVisibility(false);
      password.setAttribute('type' , "text");
    }else{
     setVisibility(true);
     password.setAttribute('type' , "password");
    }
  };

  const onInputChange = (e)=>{
      let {name , value } = e.target;
      setFormValue({...formValue, [name] : value}); 
  }

  //  setting userData and sending it to App.js

  const handleSubmission = async (e) => {
        try {
          const response = await fetch("http://localhost:8080/auth/authenticate",{
          method : "POST",
          body : JSON.stringify(formValue), 
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          }
        })
           const result = await response.json();
           if(result.message === "success"){
               alert(result.message);
               setIsLoggedIn(true);
               setToken(result.token);
               setUserEmail(email)
               localStorage.setItem("userEmail", email);
               localStorage.setItem("login_token", result.token );
               navigate("/");
          }else{
               alert(result.message);
               setIsLoggedIn(false);
          }
        } catch (error) {
          console.log(error);
          alert(error);
        }
  };

  return (
    <div className="Login">
       <Dashboard />
      <form id="loginForm" onSubmit={(e)=>handleSubmission(e)}  >
        <center className="my-2" >
          <h3 className="text-xl text-semibold text-white">Login</h3>
        </center>
        <input
          type="text"
          placeholder="email"
          className="inpElem"
          name="email"
          value={email}
          onChange={(e)=>onInputChange(e)}
          required
        />
        <div className="passwordInpCont">
          <input
            type="password"
            placeholder="password"
            className="inpElem passwordInp"
            name="password"
            value={password}
            id="password"
            autoComplete="on"
            onChange={(e)=>onInputChange(e)}
            required
          />
          <button type="button" className="mx-1" onClick={(e)=>setCheckedFun(e)} >
              {visibility? <FaEye className="text-2xl mx-1" /> : <FaEyeSlash className="text-2xl mx-1" /> }
          </button>
        </div>
        <div className="submitInpCont">
          <input
            type="submit"
            className="submitInp bg-gradient-to-r from-indigo-500 to-yellow-300 cursor-pointer"
            value="Login"
          />
        </div>
        <div className="w-9/12 text-sm text-start my-4">
              <Link to="/SignUp" className="underline decoration-solid hover:text-white transition-all ease-in-out duration-500">
                     Does Not Have An Account Yet?
              </Link>
          </div>
      </form>
      <div className="textBg">LOGIN</div>
    </div>
  );
};

export default Login;
