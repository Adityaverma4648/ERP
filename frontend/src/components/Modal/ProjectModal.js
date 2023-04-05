import React from 'react'

const ProjectModal = () => {

    const handleSubmission = () =>{
        return 0;
    }

  return (
        <div className='text-white w-1/2 h-1/2 bg-gray-400 z-50 absolute top-50 right-50 rounded-xl flex flex-col justify-start items-center' >
             <div className='w-full h-2/12 px-2 border border-gray-900' id='ModalHeader' >
                 Lorem ipsum dolor sit.
             </div>
             <div className='w-full h-8/12' id='ModalBody' >
                 <form action="" onSubmit={handleSubmission} >
                    <label htmlFor=""></label>
                 </form>
             </div>
             <div className='w-full h-2/12' id='ModalFooter' >
                 Lorem ipsum dolor sit.
             </div>
        </div>
  )
}

export default ProjectModal