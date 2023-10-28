import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdAdd } from "react-icons/md";

const Notepad = () => {

    const [notes, setNotes] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8088/mynotes/notes")
        .then(result => {
            if(result) {
                setNotes(result.data.Result)
            } else {
                result.data.Error
            }
        }).catch(err => console.log(err))
    })

  return (
    <div className="w-full">
        <div className="flex flex-col justify-center items-center w-full relative">  
            <div className="flex justify-between items-center mt-8 w-full px-8">
                <h1 className="text-4xl text-white">My Notes</h1>
            </div>

            <div className="grid grid-cols-1 gap-4 mt-12 w-full px-8">
            {notes.map((nt, i) => {
                return <div key={i} className="w-full h-[260px] text-white flex flex-col border-2 rounded-[17px]">
                    <Link to={"/add_note"}><MdAdd className="text-6xl absolute top-7 right-12"/></Link>

                    <div className=" text-md font-bold px-4 py-2">{nt.title}</div>

                    <div className="flex justify-center items-center w-full h-full">
                        <div className="w-full h-[88%] px-4">
                            <h1 className="text-[12px] font-extralight">{nt.mynotes}</h1>
                        </div>

                        <div className="w-full h-full">
                            <div className="">
                                <img className="h-[161px] w-[88%]" src={'http://localhost:8088/Images/'+nt.image}/>
                            </div>

                            <div className="flex justify-center items-center h-[54px] gap-4">
                                <Link className="text-white border-2 w-14 text-center" >EDIT</Link>
                                <button className="border-2 w-20">DELETE</button>
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