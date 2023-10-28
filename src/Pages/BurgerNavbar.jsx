/* eslint-disable react/prop-types */

const BurgerNavbar = ({open}) => {
  return (
    <div  className={`${open ? "-right-[107%] transition-all duration-300" : "right-0 transition-all duration-300"}flex justify-center items-center w-full h-[88vh] fixed z-[88] bg-black`}>
        {open ? <></>
        :
        <div className="h-full w-full flex flex-col justify-center items-center gap-8 text-white">
            <div className="text-4xl font-bold">
              <div>Home</div>
            </div>
            <div className="text-4xl font-bold">
              <div>About</div>
            </div>
            <div className="text-4xl font-bold">
              <div>Contact</div>
            </div>
            <div className="text-4xl font-bold">
              <div>Service</div>
            </div>
        </div>  
      }  
      
    </div>
  )
}

export default BurgerNavbar