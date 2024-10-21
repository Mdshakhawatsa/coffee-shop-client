import React from 'react';
import Navbar from './Navbar';
import Contact from './Contact';
import { BiLeftArrowAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const SingleCoffeDetails = () => {
    return (
        <div>


            <div className="bg-no-repeat" style={{ backgroundImage: `url('./addcoffee.png')` }}>
                <Navbar />

                <div className="max-w-7xl mx-auto ">
                    <Link to={"/"}>
                        <button className="flex items-center gap-4 text-3xl text-[#374151] btnGlow font-rancho mt-10 mb-10 hover:bg-[#D2B48C] px-2 py-3 rounded-xl">
                            <BiLeftArrowAlt />
                            <h1>Back to home</h1>

                        </button>
                    </Link>

                    <div className="flex justify-center items-center gap-32 bg-[#F4F3F0] p-24 rounded">

                        {/* l */}
                        <div>
                            <img className='h-96 w-72' src="/coffee.png" alt="not found" />

                        </div>
                        {/* r */}
                        <div>
                            <h1 className='text-3xl font-rancho glow text-[#331A15]'> Niceties</h1>
                            <div className='mt-10'>
                                <h1 className='font-semibold font-raleway'>Name:</h1>
                                <h1 className='font-semibold font-raleway'>Chef: </h1>
                                <h1 className='font-semibold font-raleway'>Supplier:</h1>
                                <h1 className='font-semibold font-raleway'>Taste :</h1>
                                <h1 className='font-semibold font-raleway'>Category :</h1>
                                <h1 className='font-semibold font-raleway'>Details:</h1>
                            </div>


                        </div>



                    </div>


                </div>
                <Contact />
            </div>


        </div>
    );
};

export default SingleCoffeDetails;