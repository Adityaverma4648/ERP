import React, { useEffect, useState } from 'react';
import {useStateValue} from "../redux/StateProvider";



const ToDoList = () => {


  const [{ toDoList, user }, dispatch] = useStateValue();
   
  const [time,SetTime] = useState(new Date());

  //  input states.....
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
  
    // toDolistfetching initialized-------------------------------------------------------------------------------------------------------------------------------------------------
             
    //  block ends here----------------------------------------------------------------------------------------------------------------------------------------------------


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

   const addToDoList = (e) =>{         
        dispatch({
          type: 'ADD_TO_TODOLIST',
          item:{
              id : (toDoList.length)+1,
              task : task,
              taskDesc :taskDesc,
              completionTime : completionTime
          }
         });
         e.preventDefault();
         e.target.reset()
   }

  

  return (
    <div className='ToDoList w-screen h-screen flex items-center justify-center'>
         <div className="w-1/2 py-3 bg-slate-300">
              <span className='p-1 flex items-center justify-between px-2 border-b text-sm text-900 border-black '>
                      <span>
                     {new Date().toLocaleDateString()}  
                     </span>
                       <span>
                     {time.toLocaleTimeString()}
                       </span>
                      
              </span>
              <div className="w-full flex items-center justify-center bg-gray-900 text-gray-300">
                               
                   <table className="table-fixed border-collapse border-gray-500">
                   <thead>
                         <tr>
                           <th className='bg-gray-700' >S.No</th>
                           <th className='bg-gray-700' >Task</th>
                           <th className='bg-gray-700' >Description</th>
                           <th className='bg-gray-700' >CompletionTime</th>
                           <th className='bg-gray-700' >Status</th>
                         </tr>
                       </thead>
                     <tbody>
   
                    {toDoList?.map((d)=>{
                         return <tr id={d.id}>
                            <td>
                              {d.id}
                            </td>
                            <td>
                              {d.task}
                            </td>
                            <td>
                              {d.taskDesc}
                            </td>
                            <td>
                              {d.completionTime}
                            </td>
                            <td>
                                 Set Status
                            </td>
                         </tr>
                    })}
                    </tbody>
                 </table>
              </div>
              <div className="toDoForm flex items-center justify-center flex-col my-2">
                     <form className='w-1/2 flex items-center justify-center flex-col' id="toDoForm" onSubmit={(e)=>addToDoList(e)}>
                     <div className='w-3/4 mt-1' >
                        <input type="text" placeholder='Enter the Task' className='w-full px-2 py-1 bg-transparent border border-black' onChange={(e)=>taskHandler(e)} />
                    </div>
                    <div className='w-3/4 mt-1' >
                        <input type="text" placeholder='Enter a short descriptionTask' className='w-full px-2 py-1 bg-transparent border border-black' onChange={(e)=>taskDescriptionHandler(e)}  />
                    </div>
                    <div className='w-3/4 mt-1' >
                        <input type="datetime-local" placeholder='Enter Completion time' className='w-full px-2 py-1 bg-transparent border border-black' onChange={(e)=>completionTimeHandler(e)} />
                    </div>
                    <div className='w-3/4 mt-1' >
                        <input type="submit" className='w-full px-2 py-1 bg-transparent border border-black' />
                    </div>
                     </form>
              </div>
         </div>

    </div>
  )
}

export default ToDoList;