import {BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import Navbar from "./components/Navbar";
import Notepad from "./components/Notepad";
import { useEffect, useState} from "react";
import HashLoader	 from "react-spinners/HashLoader";
import AddNote from "./components/AddNote";
import EditNote from "./components/EditNote";


const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 4000)
  }, [])

  return (
    <>
     {loading ? <div className="flex justify-center items-center h-screen">
      <HashLoader	
        loading={loading}
        color={"#ffffff"}
        size={80}
        aria-label="HashLoader	"
        data-testid="loader"
      />
     </div>
     :
     <Router>
     <Navbar />
       <Routes>
           <Route path="/" element={<Notepad />}/>
           <Route path="/add_note" element={<AddNote />}/>
           <Route path="/edit_note/:id" element={<EditNote />}/>
       </Routes>
       <ToastContainer />
   </Router>
    }
    </> 
  )
};

export default App
