import {BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import Navbar from "./components/Navbar";
import Notepad from "./components/Notepad";
import EditNote from "./components/EditNote";



const App = () => {


  return (
    <>
      <Router>
        <Navbar />
          <Routes>
              <Route path="/" element={<Notepad />}/>
              <Route path="/edit_note/:id" element={<EditNote />}/>
          </Routes>
          <ToastContainer />
      </Router>
    </> 
  )
};

export default App
