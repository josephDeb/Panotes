import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import HashLoader	 from "react-spinners/HashLoader";
import { MdArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";
const AddNote = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);
  useEffect(() => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 1000)
  }, [])

  const [value, setValue] = useState({
    mynotes: '',
    title: '',
    image: ''
  })

  const handleAdd = (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("mynotes", value.mynotes);
      formData.append("title", value.title);
      formData.append("image", value.image);
      axios.post("http://localhost:8088/notesapp/add_note", formData)
      .then(result => {
        if(result.data.Status) {
          setLoading(true)
          setTimeout(() => {
            setLoading(false)
            navigate("/")
          }, 2000)
        }
      })
      .catch(err => console.log(err))
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
        <h1 className="text-white text-xl mt-8">Create notes</h1>
      </div> 
      :
      <div className="w-full h-[80vh] flex justify-between items-center flex-col">
        <Link to={"/"} className="h-20 w-full">
              <MdArrowLeft className="text-white text-7xl mt-4 ml-2"/>
        </Link>
          <div className="w-full flex flex-col gap-8">
              <div className="flex justify-center items-center">
                  <h1 className="text-white text-2xl font-bold space2">Adding notes</h1>
              </div>

              <form onSubmit={handleAdd} className="flex flex-col w-full">
                  <div className="w-full flex flex-col justify-center items-center">
                      <div className="w-[71%] h-16 flex justify-center items-center border-t-2 border-white hover:my-4 transition-all duration-300">
                            <input name="title" required onChange={(e) => setValue({...value, title: e.target.value})} className="h-12 w-full font-semibold text-xl text-center uppercase" type="text" placeholder="TITLE"></input>
                      </div>

                      <div className="w-[71%] h-[190px] flex justify-center items-center border-t-2 border-white hover:my-4 transition-all duration-300">
                            <textarea name="mynotes" required onChange={(e) => setValue({...value, mynotes: e.target.value})} className="h-44 w-full font-semibold text-[15px] text-center px-2 py-4" placeholder="DESCRIPTION" type="text"></textarea>
                      </div>

                      <div className="w-[71%] h-10 mt-4 flex justify-center items-center border-t-2 border-white hover:mt-4 transition-all duration-300">
                            <input required onChange={(e) => setValue({...value, image: e.target.files[0]})} className="text-white w-full font-semibold cursor-pointer r r text-[17px]" type="file" name="image"></input>
                      </div>
                      

                      <button className="box-3 mt-8 hover:mt-12 transition-all duration-300">
                        <div className="btn btn-three">
                           <span>ADD</span>
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

export default AddNote