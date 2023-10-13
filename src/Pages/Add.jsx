import axios from 'axios';
import {useState,} from 'react'

import { useNavigate } from 'react-router-dom';

import { toast } from "react-toastify";

const Add = () => {
    const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    if(title === "" || description === "" || date === "") {
        toast.warning("Please Fill out the line")
        alert("Please Fill out the line")
       }
          
        try {
            

            const response =await axios.post("http://localhost:8081/todos", {title: title, description: description, date: date});
            toast.success(`${title} Successfuly Added`)
            console.log(response)
            navigate("/users")
        } catch (error) {
            console.log(error)
            toast.error("ERROR")
        }
  }



  return (
    <div
     className='h-screen max-w-screen-xl  block'>
       <form onSubmit={handleSubmit} className='flex flex-col xl:w-[53%] xl:mx-auto justify-center items-center gap-4 mt-8 h-full'>

              <div className='m-4'>
                <h1 className='text-4xl'>Create a TODO</h1>
              </div>

                <div className='flex flex-col gap-2 justify-end items-center text-right w-full px-8 '>
                    <span className='mr-4 font-semibold'>Title of list : </span> <input value={title} required  onChange={(e) => setTitle(e.target.value)} type='text'  className=' text-center border-2 border-gray-600 h-12 xl:w-[80%] w-[71%]'></input>
                </div>
                
                <div className='flex flex-col gap-2  justify-end items-center text-right w-full px-8 '>
                    <span className='mr-4 font-semibold'>Description : </span> <input   value={description} required  onChange={(e) => setDescription(e.target.value)} type='text'  className=' text-center border-2 border-gray-600 h-12 xl:w-[80%] w-[71%]'></input>
                </div>

                <div className='flex flex-col gap-2  justify-end items-center text-right w-full px-8 '>
                    <span className='mr-4 font-semibold'>Date & Time : </span> <input value={date} required    onChange={(e) => setDate(e.target.value)} type='text'  className=' text-center border-2 border-gray-600 h-12 xl:w-[80%] w-[71%]'></input>
                </div>

                
                <button className='bg-gradient-to-br from-red-600 to-red-900 w-[88%] flex justify-center items-center py-3 rounded-xl cursor-pointer mt-8'>
                    <h1 className='text-xl font-semibold text-white'>Submit</h1>
                </button>
                
                
            </form>

    </div>
  )
}

export default Add