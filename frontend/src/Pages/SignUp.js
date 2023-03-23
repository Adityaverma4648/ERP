import React from "react";
import { useState, useEffect } from "react";
import {Link, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// loading register data to register at redux arrays then to redux API to backend urls

import { register } from "../redux/features/authSlice";

//  block ends

const initialState = {
  username: "",
  email: "",
  password: "",

};

const SignUp = () => {

  //  useState Hoooks

 const [formValue , setFormValue] = useState(initialState);
 const { username , email, password} = formValue;
 const {loading,error}  = useSelector((state)=>({...state.auth}));
 const navigate = useNavigate();
 const dispatch = useDispatch();

//  block ends

  useEffect(()=>{
         error && console.log(error);
  },[error])


  //  helper , getter , feature function----------------------------------------------------------------------------------------------------------------------------
  const onChecked = (e) => {
    var passwordInp = document.getElementById("passwordInp");
    // e.preventDefault();
    if (e.target.checked) {
      passwordInp.setAttribute("type", "text");
    } else {
      passwordInp.setAttribute("type", "password");
    }
  };

  const onInputChange = (e) =>{
    let {name , value } = e.target;
    setFormValue({...formValue, [name] : value});  // structuring suitable for mongo insertion
  };

  const onSubmission = (e) => {
        const formValue =({username,email,password})
        if(!username || !email ||  !password ){
             console.log(formValue);
            // dispatch(register({formValue,navigate}))
        }
  };
  //   end block here--------------------------------------------------------------------------------------------------------------------------------

  return (
    <div className="SignUp">
      <form id="signUpForm" onSubmit={(e)=>onSubmission(e)} >
        <center>
          <h3 className="colorWhite text-xl text-gray-100">SIGNUP</h3>
        </center>
        <input
          type="text"
          placeholder="userName"
          className="inpElem"
          name="username"
          onChange={(e)=>onInputChange(e)}
          required
        />

        <input
          type="email"
          placeholder="email"
          className="inpElem"
          name="email"
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
            onChange={(e)=>onInputChange(e)}
            required
          />
          <label htmlFor="showPassword" className="showPassword">
            <input
              type="checkbox"
              name="showPassword"
              className="showPasswordInp"
              onChange={(e)=>onChecked(e)}
            />
          </label>
        </div>
        <div className="submitInpCont">
          <input
            type="submit"
            className="my-1 submitInp bg-gray-500 text-gray-900 cursor-pointer hover:bg-green-600 hover:text-white"
            value="signUp"
          />
        </div>
          <div className="w-9/12 text-sm text-start my-4">
              <Link to="/Login" className="underline decoration-solid">
                     Already Have An Account ?
              </Link>
          </div>
      </form>
      {/* <div id="animationCont"></div> */}
      <div className="textBg">
        SIGNUP
      </div>

    </div>
  );
};

export default SignUp;
