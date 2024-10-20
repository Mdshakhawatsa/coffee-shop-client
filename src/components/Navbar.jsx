import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="relative ">
                <img src="./banner.jpg" alt="" className="lg:w-full lg:h-[120px]" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <img className='h-[90px] w-[75px]' src="./logo.png" alt="" />
                    <h1 className="text-white text-4xl font-rancho ">Espresso Emporium</h1>
                </div>
            </div>

            {/* banner */}
            <div className='relative '>
                <img className='lg:h-[800px] w-full ' src="./banner2.png" alt="" />
                <div className='absolute inset-0 lg:w-[724px] flex justify-center items-center lg:ml-[850px] '>
                    <div>
                        <h1 className='lg:text-5xl text-4xl text-white font-rancho  '>Would you like a Cup of Delicious Coffee?</h1>
                        <h1 className=' mt-6 lg:text-sm text-white font-raleway  '>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</h1>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;