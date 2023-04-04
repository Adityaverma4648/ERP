import React from "react";
import {FaEye , FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import Dashboard from "../components/Dashboard.js";

const initialState = {
  username: "",
  email: "",
  password: "",

};

const SignUp = () => {

  //  useState Hoooks

 const [formValue , setFormValue] = useState(initialState);
 const { username , email, password} = formValue;
 const [visibility, setVisibility] = useState(false);
 const navigate = useNavigate();

  //  helper , getter , feature function----------------------------------------------------------------------------------------------------------------------------
  const setCheckedFun = (e) => {
    var password = document.getElementById('password');
     if(visibility){
       setVisibility(false);
       password.setAttribute('type' , "text");
     }else{
      setVisibility(true);
      password.setAttribute('type' , "password");
     }
  };

  const onInputChange = (e) =>{
    let {name , value } = e.target;
    setFormValue({...formValue, [name] : value});  // structuring suitable for mongo insertion
  };

  const onSubmission = async (e) => {
                 alert(JSON.stringify(formValue));
              try {
                const response = await fetch("http://localhost:8080/auth/register",{
                method : "POST",
                body : JSON.stringify(formValue), 
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                }
              })

              const result = await response.json();
              console.log(result);
              if(result === "success"){
                localStorage.setItem("signUp_Token" , result.token);
                alert(result.message);
                navigate("/login");
              }else{
                navigate("/signUp");
                alert(result.message);
              }
              } catch (error) {
                console.error("Error:", error);
                alert("Error:", error);
              }
              
      
      
  };
  //   end block here--------------------------------------------------------------------------------------------------------------------------------

  return (
    <div className="SignUp">
       <Dashboard />
      <form id="signUpForm" onSubmit={(e)=>onSubmission(e)} >
        <center>
          <h3 className="colorWhite text-xl text-gray-100">SIGNUP</h3>
        </center>
        <input
          type="text"
          placeholder="userName"
          className="inpElem"
          name="username"
          value={username}
          onChange={(e)=>onInputChange(e)}
          required
        />

        <input
          type="email"
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
            name="password"
            className="inpElem passwordInp"
            id="password"
            value={password}
            onChange={(e)=>onInputChange(e)}
            autoComplete="on"
            required
          />
          <button type="button" className="mx-1" onClick={(e)=>setCheckedFun(e)} >
              {visibility? <FaEye className="text-2xl" /> : <FaEyeSlash className="text-2xl" /> }
          </button>
        </div>
        <div className="submitInpCont">
          <input
            type="submit"
            
            className="my-1 submitInp bg-gradient-to-r from-blue-500 to-pink-500 cursor-pointer transition-all ease-in-out duration-500 hover:bg-green-600 hover:text-white"
            value="signUp"
          />
        </div>
          <div className="w-9/12 text-sm text-start my-4">
              <Link to="/Login" className="underline decoration-solid hover:text-white transition-all ease-in-out duration-500">
                     Already Have An Account ?
              </Link>
          </div>
      </form>
      <div className="textBg">
        SIGNUP
      </div>

    </div>
  );
};

export default SignUp;
