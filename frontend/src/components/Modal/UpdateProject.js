import React , {useState , useEffect} from 'react';
import axios from "axios";

const intialState = {
    title : "",
    email : "",
    description : "",
    timeTarget : ""
};

const UpdateProject = (props) => {

    const [formValue , setFormValue] = useState(intialState);
    const {title , email , description ,targetTime} = formValue;
   const [token, setToken] = useState("")

   useEffect(()=>{
      setToken(localStorage.getItem("login_token"))
   },[token])

    const onInputChange = (e) =>{
        let {name , value} =  e.target;
        setFormValue({...formValue, [name] : value})
    };
    const handleSubmission = async () =>{
        alert(JSON.stringify(formValue));
        try {
                const response = await axios.post("http://localhost:8080/project/assign", formValue ,
                {
                    headers: {
                      'Content-type': 'application/json; charset=UTF-8',
                      'Authorization': "Bearer " + token,
                    }
                });
                 const result = await response.json();
                 console.log(result);
                 alert(result);
            } catch (error) {
                 console.log(error);
            }
    };
  return (
        <div className='text-white w-1/2 h-3/4 bg-gradient-to-br from-gray-900 to-gray-700 z-50 absolute top-50 right-50 rounded-xl flex flex-col justify-start items-center' >
             <div className='w-full h-1/6 px-2 border border-gray-300/20 flex justify-start items-center' id='ModalHeader' >
                    <div className='p-2 text-xl' >
                      Update Project
                    </div>
             </div>
             <div className='w-full h-5/6 py-2' id='ModalBody' >
                 <form className='w-full min-h-full flex flex-col jusitfy-center items-center' onSubmit={handleSubmission} >
                 <label htmlFor="title" className='w-11/12 py-2 my-1' >
                         <span className='py-2'  >
                            Enter The Project Name :
                         </span>
                         <input type="text" 
                         name='title'
                         value={title} 
                         onChange={e =>onInputChange(e)}
                         className='w-full p-2 placeholder-gray-600 text-gray-600' 
                          placeholder='Project Name' 
                          required />
                    </label>
                    <label htmlFor="email" className='w-11/12 py-2 my-1' >
                         <span className='py-2'  >
                            Enter UserEmail :
                         </span>
                         <input type="text" 
                         name='email'
                         value={email} 
                         onChange={e =>onInputChange(e)}
                         className='w-full p-2 placeholder-gray-600 text-gray-600' 
                          placeholder='add User Email' 
                          required />
                    </label>
                    <label htmlFor="description" className='w-11/12 py-2 my-1' >
                         <span className='py-2'  >
                            Enter The Project Description:
                         </span>
                         <input type="text" 
                         className='w-full p-2 placeholder-gray-600 text-gray-600' 
                         name='description'
                         value={description}
                         onChange={e =>onInputChange(e)}
                        placeholder='Project Description' required  />
                    </label>
                    <label htmlFor="targetTime" className='w-11/12 py-2 my-1' >
                         <span className='py-2'  >
                            Enter The target Time :
                         </span>
                         <input 
                         type="datetime-local" 
                         className='w-full p-2 placeholder-gray-600 text-gray-600' 
                         name='targetTime'
                         value={targetTime}
                         onChange={e =>onInputChange(e)}
                         required  />
                    </label>
                    <div className='w-11/12 ' >
                        <input type="submit" className=' my-4 border border-slate-100 p-2' value="Create"  />
                    </div>
                    
                 </form>
             </div>
        </div>
  )
}

export default UpdateProject;