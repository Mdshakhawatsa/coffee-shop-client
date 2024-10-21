import React from 'react';
import { Link } from 'react-router-dom';

const Hreo = () => {
    return (
        <div>
            <div className="relative ">
                <img className="w-full h-[400px] md:h-[600px] lg:h-[800px] object-cover" src="./banner2.png" alt="Main Banner" />
                <div className="absolute inset-0 flex justify-center items-center px-4 lg:px-0">
                    <div className="max-w-3xl text-center lg:text-left lg:ml-[850px] ">
                        <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-rancho">
                            Would you like a Cup of Delicious Coffee?
                        </h1>
                        <p className="mt-8 text-white text-sm md:text-base lg:text-lg font-raleway">
                            It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.
                        </p>
                        <Link to={'/learnmore'}>
                            <button className='py-2 px-6 mt-8 bg-[#E3B577] font-rancho text-2xl hover:border-2  hover:bg-transparent hover:text-white'>Learn More</button>

                        </Link>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Hreo;