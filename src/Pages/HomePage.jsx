import React from 'react'

import {FaTrash, FaPen,FaPlus} from 'react-icons/fa6'
import {AiFillEye} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const HomePage = () => {


  return (
    <div className='h-screen max-w-screen-xl mx-auto '>
        <div className='w-full xl:grid xl:grid-cols-2 flex flex-col justify-center items-center'>
            <form className='flex flex-col justify-center items-center w-full'>
                <div>
                    <h1 className='text-4xl font-semibold mt-16 xl:mt-28 '>
                        Create a TODO
                    </h1>
                    
                </div>

                <div className='xl:hidden mt-8 w-[88%] mx-auto flex justify-between items-center border-2 border-gray-400 bg-slate-200 h-20 px-8 '>
                <div>
                    <h1 className='text-black font-semibold'>Hello I am Joseph</h1>
                </div>

                <div className='flex gap-8 text-xl'>
                    <FaPen className='cursor-pointer text-green-500'/>
                    <FaTrash className='text-[#ed1d24] cursor-pointer'/>
                </div>
            </div>

            <div className='hidden xl:flex mt-8  flex-col justify-center text-right items-center w-full gap-6 xl:gap-8'>
                <div className='flex justify-end items-center text-right w-full px-8 '>
                    <span className='mr-4 font-semibold'>Title of list : </span> <input className=' text-center border-2 border-gray-600 h-12 xl:w-[80%] w-[71%]'></input>
                </div>
                
                <div className='flex justify-end items-center text-right w-full px-8 '>
                    <span className='mr-4 font-semibold'>Description : </span> <input className=' text-center border-2 border-gray-600 h-12 xl:w-[80%] w-[71%]'></input>
                </div>

                <div className='flex justify-end items-center text-right w-full px-8 '>
                    <span className='mr-4 font-semibold'>Date & Time : </span> <input className=' text-center border-2 border-gray-600 h-12 xl:w-[80%] w-[71%]'></input>
                </div>

                
            </div>

            <div className='hidden xl:flex w-full justify-center items-center mt-8 xl:mt-16'>
                
                <Link to={'/addTodo'} className='bg-gradient-to-br from-red-600 to-red-900 w-[100%] flex justify-center items-center py-2 xl:py-4 rounded-xl'>
                    <button className='text-xl font-bold text-white'>Submit</button>
                </Link>
            </div>

            <div className='flex xl:hidden w-full justify-center items-center mt-8'>
                
                <Link to={'/addTodo'} className='bg-gradient-to-br from-red-600 to-red-900 w-[88%] flex justify-center items-center py-2 rounded-xl'>
                    <button className='text-3xl font-bold text-white'><FaPlus /></button>
                </Link>
            </div>
        </form>

            <div className='hidden xl:flex mt-8 w-[88%] mx-auto justify-between items-center border-2 border-gray-400 bg-slate-200 h-20 px-8 '>
               
                <div className='flex gap-4 justify-center items-center'>
                <div className='flex justify-center items-center'>
                    <input type='checkbox' className='h-8 w-6 cursor-pointer'></input>
                </div>

                    <h1 className='text-black font-semibold'>Hello I am Joseph</h1>
                </div>

                <div className='flex gap-8 text-xl'>
                    <AiFillEye className='text-2xl cursor-pointer'/>
                    <FaPen className='cursor-pointer text-green-500'/>
                    <FaTrash className='text-[#ed1d24] cursor-pointer'/>
                </div>
            </div>

            
        </div>
    </div>
  )
}

export default HomePage