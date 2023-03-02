import React from 'react';
import Welcome from "../components/Welcome";

const Home = () => {
  return (
    <div className='Home flex flex-col'>
          <div className="container py-4 my-1 flex justify-between">
              <span className="font-bold text-gray-100 text-3xl">
                  Dashboard
              </span>
              <div>
                   <span className='text-gray-100'>
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