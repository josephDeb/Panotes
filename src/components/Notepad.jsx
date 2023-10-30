import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdAdd, MdEdit, MdDelete } from "react-icons/md";

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
                navigate('/')
            } else {
                alert(result.data.Error) 
            }
        }).catch(err => console.log(err))
    }

  return (
    <div className="w-full">
        <div className="flex flex-col justify-center items-center w-full relative">  
            <div className="flex justify-between items-center mt-8 w-full px-10">
                <h1 className="text-4xl text-white">My Notes</h1>

                <Link className="border-2 hover:bg-white hover:text-black text-white" to={"/add_note"}><MdAdd className="text-6xl "/></Link>
            </div>

            <div className="grid grid-cols-1 gap-4 mt-12 w-full px-4">
            {notes.map((nt, i) => {
                return <div key={i} className="w-full h-[260px] text-white flex flex-col border-2 rounded-[17px]">
                    

                    <div className="flex justify-center items-center w-full h-full">
                        <div className="w-[260px]  h-[88%] px-4 flex-col">
                        <div className=" text-lg underline font-bold py-2 ">{nt.title}</div>
                            <h1 className="text-[12px] font-extralight w-44">{nt.mynotes}</h1>
                        </div>

                        <div className="w-[160px] h-full flex justify-between pt-6 items-center flex-col">
                            <div className=" w-full">
                                <img className="h-[170px] w-[161px]" src={'http://localhost:8088/Images/'+nt.image}/>
                            </div>

                            <div  className="flex justify-start items-center h-[54px] gap-4  w-full">
                                <Link to={"/edit_note/"+nt.id}  className="text-black bg-white border-2 w-[62px] text-center font-semibold flex justify-center items-center" > <MdEdit />EDIT</Link>
                                <button onClick={() => hamdleDelete(nt.id)} className="border-2 bg-white text-black font-semibold flex justify-center items-center w-[88px] relative"><MdDelete />DELETE</button>
                            </div>
                        </div>
                    </div>

                    

                    
                </div>
            })}
            </div> 
        </div>
    </div>
  )
}

export default Notepad