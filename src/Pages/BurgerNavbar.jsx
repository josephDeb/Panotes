/* eslint-disable react/prop-types */

const BurgerNavbar = ({open}) => {
  return (
    <div  className={`${open ? "-right-[107%] transition-all duration-300" : "right-0 transition-all duration-300"}flex justify-center items-center w-full h-[71vh] bg-white fixed z-[88] `}>
        {open ? <></>
        :
        <div className="h-full w-full flex justify-center items-center">
            <div>
              
            </div>
        </div>  
      }  
      
    </div>
  )
}

export default BurgerNavbar