import React from 'react';
import Welcome from "../components/Welcome";

const Home = () => {
  return (
    <div className='Home flex flex-col'>
          <div className="homeHeadingCont container mt-3 rounded-full bg-slate-300 text-gray-700 container px-5 py-4 my-1 flex justify-between">
              <span className="font-bold  text-3xl">
                  Dashboard
              </span>
              <div>
                   <span>
                      profile
                   </span>
              </div>
          </div>
          <Welcome />

            <div className="container">
                
            </div>

    </div>
  )
}

export default Home;