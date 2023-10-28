import {BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import Navbar from "./components/Navbar";



const App = () => {


  return (
    <>
      <Router>
        <Navbar />
          <Routes>
  
          </Routes>
          <ToastContainer />
      </Router>
    </> 
  )
};

export default App
