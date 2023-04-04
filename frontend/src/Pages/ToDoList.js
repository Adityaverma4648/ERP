import React, { useEffect, useState , useSelector } from 'react';
import {FaStar , FaEdit ,FaTrash } from "react-icons/fa";
import axios from "axios";

const intialState = [{
     
}];

const ToDoList = () => {

  const [time,SetTime] = useState(new Date());

  //  input states.....
     const toDoList = [];
     const [ formValue , setFormValue ] = useState(intialState);
     const { task , status } = formValue;
  
     const onInputChange = (e)=>{
      let {name , value } = e.target;
      setFormValue({...formValue, [name] : value}); 
  }
  
  useEffect(()=>{  
         var liveReload =  setInterval(()=>
          liveReloaderFunction() , 1000
         )
         return function cleanUp(){
                clearInterval(liveReload);
         }
   },[])
   
   const liveReloaderFunction = ()=>{
      SetTime(new Date());
   }


  //   AddToDOList ---- adding data to todolist
   const addToDoList = (e) =>{         
        axios.post("http://localhost:8080/todo/add",formValue).then((res)=>{
                
        }).catch((Error)=>{
           console.log("Could Not Add Work TO ToDoList : ",Error);
        })
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
                      <div className='text-red-300 text-xl my-4' >
                            <h5>
                                Add Your Work Here !
                            </h5>
                      </div>
                     <label htmlFor="task" className=' w-11/12 md:w-3/4 mt-1' >
                        <input type="text" placeholder='Enter the Task' className='w-full p-2 backdrop-blur-sm bg-white/30 border-0 border-black' name='task' onChange={(e)=>onInputChange(e)} />
                    </label>
                    <div className='bg-white/30 backdrop-blur-sm w-11/12 md:w-3/4 mt-1 flex flex-row justify-between items-center px-2 py-2' >
                    <label className="relative inline-flex items-center mr-5 mt-1 cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" checked />
                        <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                    </label>
                    <div className="ml-3 font-medium text-gray-900 dark:text-white/30">
                      Toggle Status
                    </div>
                    </div>
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