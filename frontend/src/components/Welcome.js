import React from 'react';
import {Link} from "react-router-dom";
import {FaSignInAlt,FaCompass} from "react-icons/fa";

const Welcome = () => {
  return (


    <div className="container bg-gray-300 h-1/3 mt-5 columns-2 flex shadow-2xl">
             <div className="w-3/5 h-full flex flex-col items-center justify-center">
                  <span className="font-medium text-xl">
                      Welcome to the ERP Web Application
                  </span>
                  <span className="w-3/5 md:w-5/6 font-medium text-md text-gray-600">
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas eligendi voluptatibus id officia debitis corporis, sint consequuntur cupiditate error! Vitae. 
                     <br />
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo voluptatum sed rerum nesciunt?
                  </span>
                  <div className='flex py-4'>
                    <Link to="/signUp">
                        <button type='button' className='border border-purple-500 px-4 py-2 rounded mx-1 hover:bg-gray-400 flex'>
                          <FaSignInAlt className='mt-1' />
                          <span className='flex mx-1'>
                            SignUp
                          </span>
                      </button>
                    </Link>
                      
                       <Link to="/explore">
                         <button type='button' className='border border-indigo-500 px-4 py-2 rounded mx-1 hover:bg-gray-400 flex'>
                         <FaCompass className='mt-1' />
                        <span className='mx-1'>
                           Explore
                        </span>
                       </button>
                       </Link>
                     
                  </div>
             </div>
             <div className="w-2/5 bg-sky-300 mx-1">
                 lorem5
             </div>

    </div>
  )
}

export default Welcome