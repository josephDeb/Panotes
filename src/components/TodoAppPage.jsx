import React from 'react'

const TodoAppPage = () => {
  return (
    <div className='max-w-screen-xl xl:grid grid-cols-2 justify-center items-center w-full mx-auto '>
        <div className='w-full flex flex-col justify-center items-center mt-8 max-h-full'>
            <div className='m-8 flex flex-col justify-center items-center'>
             <h1 className='text-6xl font-bold'>TODO<span className='underline text-red-600'>LIST</span></h1>

             <p className='font-semibold mt-4 '>Make your TODO everyday, Keeps your <span className='underline text-red-600'>LIST</span> away.</p>
            </div>
           
           <div className='h-[404px] bg-red-500 w-full'>

           </div>
        </div>

        <div className='w-full flex justify-center items-center h-full'>
            <div className='w-full h-full bg-yellow-600'>

            </div>
        </div>
    </div>
  )
}

export default TodoAppPage