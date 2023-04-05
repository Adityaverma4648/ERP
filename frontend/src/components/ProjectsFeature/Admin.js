import React,{useState, useEffect} from 'react';
import ModalContainer from '../../Pages/ModalContainer';

const Admin = () => {

  const [project, setProject] = useState([""]);
  const [visibility, setVisibility] = useState(false);
  const [theme, setTheme] = useState("project");
  
  const projectFetcher = () =>{
      console.log("hello");
  }

  const handleVisibility = (value) =>{
     setVisibility(value);
  }

  return (
      <>
         {visibility ? <ModalContainer handleVisibility={handleVisibility} /> : console.log('Modal Was Avoided')}
        <div className="z-30 h-full p-2 flex flex-col justify-start items-center" id='adminProjectFeature'>
    <div className='w-full flex justify-end items-center'>
        <button type='button' className='w-40 border border-slate-900 bg-transparent p-2' onClick={()=>setVisibility(true)} >Add Projects</button>
    </div>
    <div className='w-full flex justify-center items-center' >
       <div className='' id="fetchHistoryProject">
          {/*  fetch 2 latests projects  */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sit, dignissimos totam mollitia cumque dicta asperiores animi deserunt cum vel consequatur eius autem recusandae eveniet ea architecto perspiciatis ut ullam?
       </div>
    </div>
</div>
      </>
  )
}

export default Admin