import { useEffect, useState } from 'react'

import {FaTrash, FaPen,FaPlus} from 'react-icons/fa6'
import {AiFillEye} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import axios from 'axios'


const HomePage = () => {

  const [todos, setTodos] = useState([]);
  console.log(todos.title)


  
  const handleSubmit = async () => {
    try{
      const response = await axios.get('http://localhost:8081/todos');
      setTodos(response.data);
    } catch(error) {
      console.log(error)
    }
    
  }

  useEffect(()=>{
      handleSubmit()
  }, [])

  const idb = (id) => {
    alert(id)
  }

  return (
    <div className='h-screen max-w-screen-xl mx-auto '>
        <div className='w-full xl:w-[53%] xl:mx-auto flex flex-col justify-between items-center h-full'>
           
           <div className='mt-28 flex flex-col w-full h-full gap-8'>
               {todos.map((td, i)=> {
                    return <div key={i} className='flex  w-[88%] mx-auto justify-between items-center border-2 border-gray-400 bg-slate-200 h-20 px-8 '>
                     <div className='flex gap-4 justify-center items-center'>
                         <div className='flex justify-center items-center'>
                         <input type='checkbox' className='h-8 w-6 cursor-pointer'></input>
                         </div>
    
                         <h1 className='text-black font-semibold'>{td.title}</h1>
                    </div>
    
                      <div className='flex gap-8 text-xl'>
                        <AiFillEye className='text-2xl cursor-pointer'/>
                        <Link to={`/update/${td.id}`}>
                        <FaPen onClick={() => idb(td.id)} className='cursor-pointer text-green-500'/>
                        </Link>       
                        <FaTrash className='text-[#ed1d24] cursor-pointer'/>
                      </div>

                    </div>
                })}
           </div>
        

            <div className='flex w-full justify-center items-center mb-8'>
                
                <Link to={'/add'} className='bg-gradient-to-br from-red-600 to-red-900 w-[88%] flex justify-center items-center py-3 rounded-xl cursor-pointer'>
                    <FaPlus className='text-3xl font-bold text-white'/>
                </Link>
               </div>
                
                
          
          
        </div>
    </div>
  )
}

export default HomePage