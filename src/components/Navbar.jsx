import { useState } from 'react'
import {MdMenu} from 'react-icons/md'
import { MdClose } from 'react-icons/md';
import BurgerNavbar from '../Pages/BurgerNavbar';
const Navbar = () => {
    const [open, setOpen] = useState(false);
    const handleBurger = () => {
        setOpen(!open)
    }
  return (
    <div className='w-full rowFlex flex-col'>
        <div className='w-full h-16 
        flex justify-end items-center'>
            <div className='w-12 py-2 ' onClick={() => handleBurger()}>
                {open ? <MdMenu className='text-white text-4xl transition-all duration-300'/>
                :
                <MdClose className='text-white text-4xl transition-all duration-300'/>
                }
            </div>           
        </div>
        
        <div className='w-full'>
            <BurgerNavbar open={open}/>
        </div>

    </div>
  )
}

export default Navbar