import { FaLock, FaSearch, FaShoppingCart } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import type { RootState } from '../Store/store'
import React, { useEffect, useRef, useState } from 'react';
import { decreaseProductQuantity, increaseProductQuantity, removeProductFromCard } from '../Store/FeatureSlices/cardSlice';
import { useDispatch } from 'react-redux';

const Navbar = () => {

    const { products, totalPrice } = useSelector((state: RootState) => state.cardSliceData);
    const [showCard, setShowCard] = useState<boolean>(false);
    const modalRef = useRef<HTMLDivElement>(null);

    const dispatch = useDispatch();

    useEffect(() => {
        const handleClickOutside = (event: { target: any; }) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setShowCard(false);
            }
        };
        if (showCard) {
            document.body.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.body.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showCard]);


    return (
        <>
            <div className=' h-10 flex justify-end px-50'>
                <ul className='flex text-xs font-medium text-[#0a1a3c] w-full mx-auto items-center justify-end gap-4 h-full'>
                    <li className='flex border-r-1 pr-3 gap-1 cursor-pointer hover:text-[#D4BB59]'>GBP<img src='/Images/flag.svg' width={15} /></li>
                    <li className='flex items-center border-r-1 pr-3 gap-1 cursor-pointer hover:text-[#D4BB59]'><FaLock size={12} />Checkout</li>
                    <li className='border-r-1 pr-3 cursor-pointer hover:text-[#D4BB59]'>Wishlist</li>
                    <li className='cursor-pointer hover:text-[#D4BB59]'>Login or Register</li>
                </ul>
            </div>

            <div className='bg-[#0a1a3c] h-30 flex items-center justify-around px-20 relative'>
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
                    <button className="relative group cursor-pointer bg-white p-2 text-[#0a1a3c] rounded-full duration-300 hover:border-[#D4BB59] hover:text-[#D4BB59]"
                        onClick={() => setShowCard(!showCard)}><FaShoppingCart />
                        <span className="absolute group-hover:bg-[#D4BB59] px-2 py-1 text-black bg-white text-xs font-medium rounded-full -top-3 -right-2">{products.length || 0}</span>
                    </button>
                </div>


                {
                    showCard && (

                        <div className='absolute overflow-y-scroll h-72 w-1/4 top-25 right-30 bg-white p-5 shadow-2xl' ref={modalRef}>

                            {
                                products.length > 0 ? (
                                    <>
                                        {

                                            products.map((item, index) => (
                                                <React.Fragment key={index} >
                                                    <div className='relative flex gap-2 items-center pb-5 border-b border-zinc-200'>
                                                        <button className='absolute cursor-pointer flex items-center justify-center h-5 w-5 top-2 right-2 rounded-full bg-[#0a1a3c] text-zinc-500 hover:text-zinc-100'
                                                        onClick={()=>dispatch(removeProductFromCard(item))}>x</button>
                                                        <img className='' src='https://www.aristocracy.london/wp-content/uploads/2025/04/Hever-Navy-3-Piece-Nehru-Suit-1.jpg' width={110} />
                                                        <div className='text-zinc-700'>
                                                            <h6>{item.name}</h6>
                                                            <p>Size: {item.size}</p>
                                                            <p>{item.quantity} * £{item.price}</p>
                                                            <div className='flex text-xs items-center gap-2 mb-5'>
                                                                Change Quantity:
                                                                <button className='border border-zinc-300 h-6 w-6 cursor-pointer flex items-center justify-center rounded hover:bg-zinc-100'
                                                                disabled={item.quantity === 1}
                                                                    onClick={() => dispatch(decreaseProductQuantity({ name: 'Hever Navy 3 Piece Nehru Suit', size: item.size }))}>-</button>
                                                                <button className='border border-zinc-300 h-6 w-6 cursor-pointer flex items-center justify-center rounded hover:bg-zinc-100'
                                                                    onClick={() => dispatch(increaseProductQuantity({ name: 'Hever Navy 3 Piece Nehru Suit', size: item.size }))}>+</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </React.Fragment>

                                            ))
                                        }
                                        <div className='mt-4'>
                                            <h6 className='text-xl text-zinc-700'>
                                                Subtotal: <span className='ps-10'>£{totalPrice}</span>
                                            </h6>
                                        </div>
                                    </>


                                ) :
                                    (
                                        <div className='text-center text-zinc-500'>Your cart is empty</div>
                                    )
                            }
                        </div>
                    )
                }
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