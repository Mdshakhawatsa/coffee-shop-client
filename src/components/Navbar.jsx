import React from 'react';

const Navbar = () => {
    return (
        <div>
            {/* Top Banner with Logo and Text */}
            <div className="relative">
                <img src="./banner.jpg" alt="Banner" className="w-full h-[120px]  object-cover" />
                <div className="absolute inset-0 flex  items-center justify-center text-center">
                    <img className="h-[50px] w-[50px] lg:h-[90px] lg:w-[90px]" src="./logo.png" alt="Logo" />
                    <h1 className="text-white text-2xl lg:text-4xl font-rancho">Espresso Emporium</h1>
                </div>
            </div>
          
           
        </div>
    );
};

export default Navbar;
