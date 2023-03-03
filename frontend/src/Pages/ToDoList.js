import React from 'react'
import todoData from "../data/todo"; 


const ToDoList = () => {
  return (
    <div className='ToDoList w-screen h-screen flex items-center justify-center'>
        {/* {
          todoData?.map((d)=>{
              return <div>{d.task}</div>;
        })
        } */}

         <div className="container py-3 bg-slate-300">
              <span className='p-1 flex justify-end px-2 border-b border-black'>
                     Current Date container
              </span>
              <div className="toDoForm flex items-center justify-center flex-col my-2">
                    <div className='w-3/4 mt-1' >
                        <input type="text" placeholder='Enter the Task' className='w-full px-2 py-1 bg-transparent border border-black' />
                    </div>
                    <div className='w-3/4 mt-1' >
                        <input type="text" placeholder='Enter the Task' className='w-full px-2 py-1 bg-transparent border border-black' />
                    </div>
              </div>
         </div>

    </div>
  )
}

export default ToDoList;