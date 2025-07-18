import React from 'react'

const Product = () => {
    return (
        <>
            <div>
                {/* product image */}
                <div>
                    <img src='https://www.aristocracy.london/wp-content/uploads/2025/04/Hever-Navy-3-Piece-Nehru-Suit-1.jpg' alt='Hever Navy 3 Piece Nehru Suit' width={500} />

                    <div>  // product image slider

                    </div>
                </div>

                {/* product description */}
                <div>
                    <div>
                        <h6>Hever Navy 3 Piece Nehru Suit</h6>
                        <p>£745.00</p>
                    </div>
                    <p>Navy is a popular choice for formal suits and this magnificent design features a navy jacket with nehru collar, navy trousers and a floral pattern waistcoat with matching cravat. The style is further complemented with a cravat pin and luxury chain fastening to create the perfect outfit.</p>
                    <button>Find Your Size</button>

                    <div>
                        <span>Size *</span>
                        <div className="grid">
                            <select className="col-start-1 row-start-1 appearance-none bg-gray-50 dark:bg-gray-800 ...">
                                <option>Yes</option>
                                <option>No</option>
                                <option>Maybe</option>
                            </select>
                            <svg className="pointer-events-none col-start-1 row-start-1 ...">
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product