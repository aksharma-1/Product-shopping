import React from 'react'
import { FaLock, FaSearch, FaShoppingCart } from 'react-icons/fa'

const Navbar = () => {
    return (
        <>
            <div className=' h-10 flex justify-end px-50'>
                <ul className='flex text-xs font-medium text-[#0a1a3c] w-full mx-auto items-center justify-end gap-4 h-full'>
                    <li className='flex border-r-1 pr-3 gap-1 cursor-pointer hover:text-[#D4BB59]'>GBP<img src='/public/Images/flag.svg' width={15} /></li>
                    <li className='flex items-center border-r-1 pr-3 gap-1 cursor-pointer hover:text-[#D4BB59]'><FaLock size={12} />Checkout</li>
                    <li className='border-r-1 pr-3 cursor-pointer hover:text-[#D4BB59]'>Wishlist</li>
                    <li className='cursor-pointer hover:text-[#D4BB59]'>Login or Register</li>
                </ul>
            </div>

            <div className='bg-[#0a1a3c] h-30 flex items-center justify-around px-20'>
                <div>
                    <img src='https://www.aristocracy.london/wp-content/uploads/2018/12/Aristocracy-London-Logo.png' width={250} />
                </div>
                <div className='flex items-center gap-4 text-white'>
                    <ul className='flex items-center gap-8'>
                        <li className='cursor-pointer  hover:text-[#D4BB59]'>Prêt à Porter</li>
                        <li className='cursor-pointer text-[#D4BB59] border-y border-[#D4BB59] py-2 hover:text-[#D4BB59]'>Appointments</li>
                        <li className='cursor-pointer hover:text-[#D4BB59]'>Made to Measure</li>
                        <li className='cursor-pointer hover:text-[#D4BB59]'>The Fashion House</li>
                        <li className='cursor-pointer hover:text-[#D4BB59]'>Contact Us</li>
                    </ul>
                </div>

                <div className='flex items-center gap-2'>
                    <button className='border cursor-pointer border-white p-2 text-white rounded-full hover:border-[#D4BB59] duration-300 hover:text-[#D4BB59]'>
                        <FaSearch />
                    </button>
                    <button className="relative group cursor-pointer bg-white p-2 text-[#0a1a3c] rounded-full duration-300 hover:border-[#D4BB59] hover:text-[#D4BB59]"><FaShoppingCart />
                        <span className="absolute group-hover:bg-[#D4BB59] px-2 py-1 text-black bg-white text-xs font-medium rounded-full -top-3 -right-2">0</span>
                    </button>
                </div>
            </div>

            <div className='px-30 border-b border-zinc-300'>
                <ul className='flex items-center gap-8 text-zinc-400 text-sm py-4'>
                    <li className='cursor-pointer hover:text-[#D4BB59]'>Home</li>
                    <li className='cursor-pointer hover:text-[#D4BB59]'>3 Piece Suits,</li>
                    <li className='cursor-pointer hover:text-[#D4BB59]'>Nehru Suits,</li>
                    <li className='cursor-pointer hover:text-[#D4BB59]'>Wedding Suits,</li>
                    <li className='text-zinc-800'>Hever Navy 3 Piece Nehru Suit</li>
                </ul>
            </div>
        </>
    )
}

export default Navbar