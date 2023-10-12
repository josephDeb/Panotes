import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import About from "./components/About"
import Service from "./components/Service"
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import HomePage from "./Pages/HomePage"
import TodoAppPage from "./components/TodoAppPage"
import Add from "./Pages/Add"
import Update from "./Pages/Update"


const App = () => {


  return (
    <>
      <Router>
      <Navbar />
          <Routes>
              <Route path="/home" element={<TodoAppPage />}/>
              <Route path="/about" element={<About />}/>
              <Route path="/about" element={<Service />}/>
              <Route path="/about" element={<Login />}/>
              <Route path="/about" element={<SignUp />}/>
              <Route path="/users" element={<HomePage />}/>
              <Route path="/add" element={<Add/>}/>
              <Route path="/update/:id" element={<Update />}/>
          </Routes>
          <ToastContainer />
      </Router>
    </> 
  )
};

export default App
