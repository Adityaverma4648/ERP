import React, { useEffect, useState } from 'react';
import {FaStar , FaEdit ,FaTrash ,FaPlus } from "react-icons/fa";


const ToDoList = () => {

   
  const [time,SetTime] = useState(new Date());

  //  input states.....
     const toDoList = []
     const [task, setTask] = useState('');
     const [taskDesc, setTaskDesc] = useState('');
     const [completionTime, setCompletionTime] = useState('');
    const [ status, setStatus] = useState(false)
  
  const taskHandler = (e) =>{
       setTask(e.target.value)
  }
  const taskDescriptionHandler = (e)=>{
        setTaskDesc(e.target.value)
  }
    const completionTimeHandler = (e)=>{
          setCompletionTime(e.target.value)
    }
  
  useEffect(()=>{  
    //  clock functionality--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    //  component did mount as use effect mounts on rendering for once.......................  
    
         var liveReload =  setInterval(()=>
          liveReloaderFunction() , 1000
    //   every one second new time is fed to useEffect
         )
    // component will Unmount using by returning a function.................... 

         return function cleanUp(){
                clearInterval(liveReload);
    //  previouds time is destroyed verytime its called
         }
    //   clock block ends here---------------------------------------------------------------------------------------------------------------------------------------------------------------------
   },[])
   
   const liveReloaderFunction = ()=>{
      SetTime(new Date());
   }


  //   AddToDOList ---- adding data to todolist
   const addToDoList = (e) =>{         
        // dispatch({
        //   type: 'ADD_TO_TODOLIST',
        //   item:{
        //       id : (toDoList.length)+1,
        //       task : task,
        //       taskDesc :taskDesc,
        //       completionTime : completionTime
        //   }
        //  });
        //  e.preventDefault();
        //  e.target.reset();
   }

    // const updateWork = (e) =>{
         
    // }
  

  return (
    <div className='ToDoList w-screen h-screen flex items-center justify-center overflow-hidden'>
         <div className="w-10/12 h-3/4 md:w-1/2 bg-gradient-to-br from-gray-900 to-"> 
         <div className="w-full bg-red-400 py-3 flex flex-row items-center justify-between px-2">
            <h5 className='text-xl font-semibold text-red-700' >
              To Do List
            </h5>
            <span className='text-red-600 flex items-center justify-center' >
                <FaEdit className='mx-1' />
                 Add what's Important 
               <FaStar className='mx-1'  />
            </span>
         </div>
         {/*  time Date Block------------------------------------------------------------------------------------- */}
          <div className='p-1 flex items-center justify-between px-2 border-b text-sm text-900 text-gray-300 my-1 border-gray-700' id='timeDateBlock' >
                      <span>
                      Today : {new Date().toLocaleDateString()}  
                     </span>
                       <span>
                     {time.toLocaleTimeString()} : Time
                       </span>
                      
          </div>
          {/* block ends here---------------------------------------------------------------------------------- */}
              <div className="w-full h-2/5 flex flex-col items-center justify-center py-5 bg-gray-900 text-gray-300 overflow-y-scroll border-b border-gray-700">
                
                    {toDoList?.map((d)=>{
                         return <div key={d.id} className='w-11/12 bg-white flex items-center justify-center border-b border-gray-400 px-2 text-black py-2'  id={d.id}>
                            <span className='mx-1 md:w-2/12 w-1/12 text-lg' >
                              {d.id} .
                            </span>
                            <div className='w-6/12 flex flex-col' >
                                <span className='text-lg' >
                                  {d.task.toUpperCase()}
                                </span>
                                <small>
                                  {d.taskDesc}
                                </small>
                            </div>
                            <small className='w-2/12' >
                              {d.completionTime}
                            </small>
                            <div className='w-2/12 flex justify-evenly items-center' >
                                 <button type='button' >
                                       <FaEdit />
                                 </button>
                                 <button type='button' className=''  >
                                       <FaTrash />
                                 </button>
                            </div>
                         </div>
                    })}
                 
              </div>
              <div className="w-full h-2/5 flex flex-col items-center justify-center my-2">
                     <form className='w-full h-full md:w-3/4 md:h-3/4 flex items-center justify-center flex-col' id="toDoForm" onSubmit={(e)=>addToDoList(e)} >
                      <div className='text-red-300 text-xl' >
                            <h5>
                                Add Your Work Here !
                            </h5>
                      </div>
                     <label for="task" className=' w-11/12 md:w-3/4 mt-1' >
                        <input type="text" placeholder='Enter the Task' className='w-full p-2 backdrop-blur-sm bg-white/30 border-0 border-black' onChange={(e)=>taskHandler(e)} />
                    </label>
                    <label for="description" className=' w-11/12 md:w-3/4 mt-1' >
                        <input type="text" placeholder='Enter a short descriptionTask' className='w-full p-2 backdrop-blur-sm bg-white/30 border-0 border-black' onChange={(e)=>taskDescriptionHandler(e)}  />
                    </label>
                    <label for="date" className=' w-11/12 md:w-3/4 mt-1' >
                        <input type="datetime-local" className='w-full p-2 backdrop-blur-sm bg-white/30 border-0 border-black placeholder-slate-500' onChange={(e)=>completionTimeHandler(e)} />
                    </label>
                    <div className=' w-11/12 md:w-3/4 mt-1' >
                        <input type="submit" className='w-full p-2 backdrop-blur-sm bg-white/30 border-0 border-black' />
                    </div>
                     </form>
              </div>
         </div>

    </div>
  )
}

export default ToDoList;