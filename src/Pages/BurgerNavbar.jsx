/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"

const BurgerNavbar = ({open, handleBurger}) => {
 
  return (
    <div  className={`${open ? "-right-[107%] transition-all duration-300" : "right-0 transition-all duration-300"}flex justify-center items-center w-full h-[88vh] fixed z-[88] bg-black/90 transition-all duration-300`}>
        {open ? <></>
        :
        <div className="h-[80vh] w-full flex flex-col justify-between items-center gap-8 text-white">
            <div className="w-full flex flex-col justify-center items-center gap-8 text-white mt-44">
            <Link onClick={() => handleBurger()} to={'/home'} className="text-2xl font-bold">
              <div>Home</div>
            </Link>
            <div className="text-2xl font-bold">
              <div>About</div>
            </div>
            <div className="text-2xl font-bold">
              <div>Contact</div>
            </div>
            <div className="text-2xl font-bold">
              <div>Service</div>
            </div>
            </div>


            <div className="w-full flex flex-col justify-center items-center mb-6">
                <h1>PA<span className="underline">NOTE</span></h1>

                <h1>Created by: Joseph_dat_Dev</h1>
            </div>
        </div>  
      }  
      
    </div>
  )
}

export default BurgerNavbar