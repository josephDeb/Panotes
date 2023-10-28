import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import HashLoader	 from "react-spinners/HashLoader";

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
      axios.post("http://localhost:8088/mynotes/add_note", formData)
      .then(result => {
        if(result.data.Status) {
          setLoading(true)
          setTimeout(() => {
            setLoading(false)
            navigate("/")
          }, 4000)
        }
      })
      .catch(err => console.log(err))
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
      <div className="w-full h-[vh] flex justify-center items-center">
          <div className="w-full flex flex-col gap-8">
              <div className="flex justify-center items-center">
                  <h1 className="text-white text-2xl font-bold space2">Adding notes</h1>
              </div>

              <form onSubmit={handleAdd} className="flex flex-col w-full">
                  <div className="w-full flex flex-col justify-center items-center">
                      <div className="w-[71%] h-16 flex justify-center items-center border-t-2 border-white hover:my-4 transition-all duration-300">
                            <input name="title" required onChange={(e) => setValue({...value, title: e.target.value})} className="h-12 w-full font-semibold text-xl text-center space2" type="text" placeholder="TITLE"></input>
                      </div>

                      <div className="w-[71%] h-16 flex justify-center items-center border-t-2 border-white hover:my-4 transition-all duration-300">
                            <input name="mynotes" required onChange={(e) => setValue({...value, mynotes: e.target.value})} className="h-12 w-full font-semibold text-xl text-center space2" placeholder="DESCRIPTION" type="text"></input>
                      </div>

                      <div className="w-[71%] h-16 mt-4 flex justify-center items-center border-t-2 border-white hover:my-4 transition-all duration-300 ">
                            <input required onChange={(e) => setValue({...value, image: e.target.files[0]})} className="h-12 font-semibold text-md w-full text-white" type="file" name="image"></input>
                      </div>
                      

                      <div className="border-2 text-white w-[53%] mt-8 h-14 flex justify-center items-center hover:bg-white hover:text-black transition-all duration-300 hover:scale-125">
                        <button className="space3 font-semibold text-md">ADD</button>
                      </div>
                  </div>
              </form>
          </div>
      </div>  
    }
    </>
  )
}

export default AddNote