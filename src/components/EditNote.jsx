import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import HashLoader	 from "react-spinners/HashLoader";
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
          navigate("/")
        } else{
          console.log("error")
        }
      }).catch(err => console.log(err))
   }
   
  return (
    <>
      {loading ? <div className="flex justify-center items-center h-[88vh]">
        <HashLoader 
        loading={loading}
        color={"#ffffff"}
        size={80}
        aria-label="loading spinner	"
        data-testid="loader"
        />
      </div> 
      :
      <div className="w-full h-[62vh] flex justify-center items-center">
          <div className="w-full flex flex-col gap-8">
              <div className="flex justify-center items-center">
                  <h1 className="text-white text-2xl font-bold space2">Editing notes</h1>
              </div>

              <form onSubmit={handleUp}  className="flex flex-col w-full">
                  <div className="w-full flex flex-col justify-center items-center">
                      <div className="w-[71%] h-16 flex justify-center items-center border-t-2 border-white hover:my-4 transition-all duration-300">
                            <input value={data.title} onChange={(e) => setData({...data, title: e.target.value})} name="title"  className="h-12 w-full font-semibold text-sm text-center " type="text" placeholder="TITLE"></input>
                      </div>

                      <div className="w-[71%] h-[190px] flex justify-center items-center border-t-2 border-white hover:my-4 transition-all duration-300">
                            <input value={data.mynotes} onChange={(e) => setData({...data, mynotes: e.target.value})}  name="mynotes"  required className="h-44 w-full font-semibold text-sm px-4 text-start" placeholder="DESCRIPTION" type="text"></input>
                      </div>

                      <div className="border-2 text-white w-[53%] mt-8 h-14 flex justify-center items-center hover:bg-white hover:text-black transition-all duration-300 hover:scale-125">
                        <button className="space3 font-semibold text-md">UPDATE</button>
                      </div>
                  </div>
              </form>
          </div>
      </div>  
      }
      
    
    </>
  )
}

export default EditNote