import React from 'react'

const LockedFeature = () => {
  return (
    <div className='container h-1/3 px-2 mt-1 flex justify-center items-center bg-slate-300' >
      <div className='w-11/12 text-start absolute flex justify-center items-center text-slate-400/30' style={{fontSize : "180px", userSelect : "none"}}>
              Projects
          </div>
      <div className='w-1/2 text-center h-full flex justify-center items-center' id="illustration">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nesciunt ipsa itaque, neque dolor sint ipsum harum placeat. Eaque voluptatibus praesentium maiores ab molestiae ducimus in reiciendis quas libero fugiat.
      </div>
      <div className='w-1/2 h-full flex justify-center items-center' >
          Login To Use This Feature 
      </div>
    </div>
  )
}

export default LockedFeature