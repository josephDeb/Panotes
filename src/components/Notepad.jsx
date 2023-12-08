import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdAdd, MdEdit, MdDelete } from "react-icons/md";

import Navbar from "./Navbar";

const Notepad = () => {
  

    const [notes, setNotes] = useState([])

    const navigate = useNavigate()
    useEffect(() => {
        axios.get("http://localhost:8088/notesapp/notes")
        .then(result => {
            if(result) {
                setNotes(result.data.Result)
            } else {
                result.data.Error
            }
        }).catch(err => console.log(err))
    })

    const hamdleDelete = (id) => {
        window.location.reload()
        axios.delete("http://localhost:8088/notesapp/delete_note/"+id)
        .then(result => {
            if(result.data.Status) {
                navigate("/")
            } else {
                alert(result.data.Error) 
            }
        }).catch(err => console.log(err))
    }

  return (
    <>
      
        <div className="w-full h-[90vh]">
        <Navbar />
        <div className="flex flex-col justify-center items-center w-full relative pb-44">  
            <div className="flex justify-between items-center mt-8 w-full px-10">
                <h1 className="text-4xl text-white typewriter">My Notes</h1>

                <Link className="border-2 hover:bg-white hover:text-black text-white transition-all duration-300" to={"/add_note"}><MdAdd className="text-6xl hover:rotate-180 transition-all duration-200"/></Link>
          
            </div>

            {notes.length > 0 ? <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-12 w-full px-6">
            {notes.map((nt, i) => {
                    return <div key={i} className="w-full h-[260px] text-white flex flex-col border-2 rounded-[17px]">
                        
                        <div className="flex justify-center items-center w-full h-full">
                            <div className="w-[260px]  h-[88%] px-4 flex-col">
                            <h1 className=" text-lg font-bold py-2 uppercase">{nt.title}</h1>
                                <h1 className="text-[14px] font-extralight w-44">{nt.mynotes}</h1>
                            </div>
    
                            <div className="w-[160px] h-full flex justify-between pt-6 items-center flex-col pr-4">
                                <div className=" w-full">
                                    <img className="h-[170px] w-[161px] rounded-md hover:rotate-6 transition-all duration-300 object-cover" src={'http://localhost:8088/Images/'+nt.image}/>
                                </div>
    
                                <div  className="flex justify-start items-center h-[54px] gap-4  w-full">
                                    <Link to={"/edit_note/"+nt.id}  className="hover:bg-black hover:text-white hover:border-[1px] hover:border-white transition-all duration-200 text-sm bg-white text-black w-[70px] flex justify-center items-center py-1" > <MdEdit />EDIT</Link>
                                    <button onClick={() => hamdleDelete(nt.id)} className="hover:bg-black hover:text-white hover:border-[1px] hover:border-white transition-all duration-200 text-sm bg-white text-black w-[90px] flex justify-center items-center py-1"><MdDelete />DELETE</button>
                                </div>
                            </div>
                        </div>
      
                    </div>
                })}    
            </div>  
            :
            <div className="w-full flex justify-center items-center h-[40vh] flex-col gap-6 pt-44">
             
                <h1 className="text-xl text-white">Empty, you should create a new notes</h1></div>
        }
        </div>
    </div>

        
    </>
  )
}

export default Notepad