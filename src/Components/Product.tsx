import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemTocard, type CardItem } from "../Store/FeatureSlices/cardSlice";
// import Slider from "react-slick";

const Product = () => {

    const [selectedSize, setSelectedSize] = useState<string>("");
    const dispatch = useDispatch();

    // let settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 4,
    //     slidesToScroll: 4
    // };

    // const productImage: string[] = [
    //     "https://www.aristocracy.london/wp-content/uploads/2025/04/Hever-Navy-3-Piece-Nehru-Suit-2.jpg",
    //     "https://www.aristocracy.london/wp-content/uploads/2025/04/Hever-Navy-3-Piece-Nehru-Suit-3.jpg",
    //     "https://www.aristocracy.london/wp-content/uploads/2025/04/Hever-Navy-3-Piece-Nehru-Suit-4.jpg",
    //     "https://www.aristocracy.london/wp-content/uploads/2025/04/Hever-Navy-3-Piece-Nehru-Suit-5.jpg",
    // ]

    const handleAddToCart = ():void => {
        if(selectedSize === "") {
            alert("Please select a size before adding to the cart.");
            return;
        }
        const item: CardItem = {
            name: "Hever Navy 3 Piece Nehru Suit",
            size: parseInt(selectedSize),
            quantity: 1,
            price: 745.00
        };
        dispatch(addItemTocard(item))
        setSelectedSize(""); 
    }

    const handleSizeChange = (size: string): void => {
        console.log("Selected size:", size);
        setSelectedSize(size);
    };


    return (
        <>
            <div className='flex justify-around items-center py-10 px-30 gap-5'>
                {/* product image */}
                <div>
                    <img src='https://www.aristocracy.london/wp-content/uploads/2025/04/Hever-Navy-3-Piece-Nehru-Suit-1.jpg' alt='Hever Navy 3 Piece Nehru Suit' width={700} />

                    {/* <div className="slider-container">
                        <Slider {...settings}>
                            {productImage.map((image, index) => (
                                <div key={index}>
                                    <img src={image} width={100} alt={`Hever Navy 3 Piece Nehru Suit ${index + 1}`} />
                                </div>
                            ))}
                        </Slider>
                    </div> */}
                </div>

                {/* product description */}
                <div>
                    <div className='border-b border-zinc-300 pb-1 mb-2'>
                        <h6 className='text-xl font-medium text-zinc-800'>Hever Navy 3 Piece Nehru Suit</h6>
                        <p className='text-xl font-semibold text-zinc-700'>£745.00</p>
                    </div>
                    <p className='text-zinc-500'>Navy is a popular choice for formal suits and this magnificent design features a navy jacket with nehru collar, navy trousers and a floral pattern waistcoat with matching cravat. The style is further complemented with a cravat pin and luxury chain fastening to create the perfect outfit.</p>
                    <button className='text-sm cursor-pointer mt-4 font-medium'>Find Your Size</button>

                    <div className='flex items-center gap-4 mt-4'>
                        <span className="text-sm text-zinc-700">Size *</span>
                        <div className="w-full max-w-sm min-w-[200px]">
                            <div className="relative">
                                <select
                                    name="size"
                                    className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer"
                                    onChange={(e)=>handleSizeChange(e.target.value)}
                                    value={selectedSize}>
                                    <option value="">Select an option</option>
                                    <option value="36">36</option>
                                    <option value="38">38</option>
                                    <option value="40">40</option>
                                    <option value="42">42</option>
                                </select>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="h-5 w-5 ml-1 absolute top-2.5 right-2.5 text-slate-700">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="my-5">
                        <h6 className="text-sm text-zinc-700">Quantity: <span className="text-[#0a1a3c]">1</span></h6>
                    </div>

                    <div className='flex gap-4 mt-6'>
                        <button className='bg-[#0a1a3c] duration-300 hover:bg-amber-500 cursor-pointer text-white py-2 px-6 text-sm' onClick={handleAddToCart}>Add To Basket</button>
                        <button className='duration-300 cursor-pointer py-2 px-6 hover:bg-[#0a1a3c] hover:text-white text-sm'>Book Appointment</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product