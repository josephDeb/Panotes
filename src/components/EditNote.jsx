import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import HashLoader	 from "react-spinners/HashLoader";
import { MdArrowLeft } from "react-icons/md";
const EditNote = () => {
  const navigate = useNavigate()
  const {id} = useParams()
  const [loading, setLoading] = useState(false);
  useEffect(() => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 1000)
  }, [])

 

   const [data, setData] = useState({
      title: "",
      mynotes: ""
   });
  
   useEffect(() => {
      axios.get("http://localhost:8088/notesapp/notes/"+id)
      .then(result => {
        setData({
          ...data,
          title: result.data.Result[0].title,
          mynotes: result.data.Result[0].mynotes
        })
      }).catch(err => console.log(err))
   }, [])

   const handleUp = (e) => {
      e.preventDefault()
      axios.put("http://localhost:8088/notesapp/update_note/"+id, data)
      .then(result => {
        if(result.data.Status) {
          setLoading(true)
          setTimeout(() => {
            setLoading(false)
            navigate("/")
          }, 1000)
        } else{
          console.log("error")
        }
      }).catch(err => console.log(err))
   }
   
  return (
    <>
      {loading ? <div className="flex justify-center items-center h-[88vh] flex-col">
        <HashLoader 
        loading={loading}
        color={"#ffffff"}
        size={80}
        aria-label="loading spinner	"
        data-testid="loader"
        />
        <h1 className="text-white text-xl mt-8">Update Notes</h1>
      </div> 
      :
      <div className="w-full h-[73vh] flex justify-between items-center flex-col">
        <Link to={"/"} className="h-20 w-full">
              <MdArrowLeft className="text-white text-7xl mt-4"/>
        </Link>
          <div className="w-full flex flex-col gap-8">
              <div className="flex justify-center items-center">
                  <h1 className="text-white text-2xl font-bold space2">Editing notes</h1>
              </div>

              <form onSubmit={handleUp}  className="flex flex-col w-full">
                  <div className="w-full flex flex-col justify-center items-center">
                      <div className="w-[71%] h-16 flex justify-center items-center border-t-2 border-white hover:mb-4 transition-all duration-300">
                            <input value={data.title} onChange={(e) => setData({...data, title: e.target.value})} name="title"  className="h-12 w-full font-semibold text-xl text-center uppercase" type="text" placeholder="TITLE"></input>
                      </div>

                      <div className="w-[71%] h-[190px] flex justify-center items-center border-t-2 border-white mt-2 hover:my-4 transition-all duration-300">
                            <textarea value={data.mynotes} onChange={(e) => setData({...data, mynotes: e.target.value})}  name="mynotes"  required className="h-44 w-full font-semibold text-sm px-4 text-center py-2" placeholder="DESCRIPTION" type="text"></textarea>
                      </div>

                      <button className="box-3 mt-8 hover:mt-12 transition-all duration-300">
                        <div className="btn btn-three">
                           <span>UPDATE</span>
                        </div>
                     </button>
                  </div>
              </form>
          </div>
      </div>  
      }
      
    
    </>
  )
}

export default EditNote