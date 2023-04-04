import React,{useState, useEffect} from 'react'

const Admin = () => {

  const [project, setProject] = useState([""]);

  const projectFetcher = () =>{
      console.log("hello");
      
  }

  return (
    <div className="z-50 h-full p-2 flex flex-col justify-start items-center" id='adminProjectFeature'>
    <div className='w-full flex justify-end items-center'>
        <button type='button' className='w-40 border-0 bg-red-500 p-2' >Add Projects</button>
    </div>
    <div className='w-full flex justify-center items-center' >
       <div className='' id="fetchHistoryProject">
          {/*  fetch 2 latests projects  */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sit, dignissimos totam mollitia cumque dicta asperiores animi deserunt cum vel consequatur eius autem recusandae eveniet ea architecto perspiciatis ut ullam?
       </div>
    </div>
</div>
  )
}

export default Admin