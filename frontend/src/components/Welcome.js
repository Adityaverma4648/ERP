import React from 'react';
import {Link} from "react-router-dom";
import {FaSignInAlt,FaCompass} from "react-icons/fa";
import welcomeIllustration from "../assets/welcome.png";
const Welcome = () => {
  return (


    <div className="Welcome container bg-slate-300 h-1/3 mt-3 columns-2 flex shadow-2xl">
             <div className="welcomeText w-3/5 h-full flex flex-col items-center justify-center">
                  <span className="font-medium text-xl text-center">
                      Welcome to the ERP Web Application
                  </span>
                  <span className="w-3/5 md:w-5/6 font-medium text-sm text-gray-600">
                      Our Product will help you organize your employees..
                      To get acknowledged about the product please proceed and click explore button !
                  </span>
                  <div className='flex py-4'>
                    <Link to="/signUp">
                        <button type='button' className='border text-purple-600 border-purple-500 px-4 py-2 rounded mx-1 hover:bg-purple-500 hover:text-gray-100 flex'>
                          <FaSignInAlt className='mt-1' />
                          <span className='flex mx-1'>
                            SignUp
                          </span>
                      </button>
                    </Link>
                      
                       <Link to="/explore">
                         <button type='button' className='border text-indigo-600 border-indigo-500 px-4 py-2 rounded mx-1 hover:bg-indigo-500 hover:text-gray-100 flex'>
                         <FaCompass className='mt-1' />
                        <span className='mx-1'>
                           Explore
                        </span>
                       </button>
                       </Link>
                     
                  </div>
             </div>
             <div className="w-2/5 mx-1 illustratonCont flex items-center justify-center overflow-hidden">
                    <img src={welcomeIllustration} alt="welcome illustration" className='w-full md:w-h/5' />
             </div>

    </div>
  )
}

export default Welcome