import React from 'react';

const Follow = () => {
    // Array of image paths from the public folder
    const images = [
        './cups/Rectangle 9.png', 
        './cups/Rectangle 10.png',
        './cups/Rectangle 11.png',
        './cups/Rectangle 12.png',
        './cups/Rectangle 13.png',
        './cups/Rectangle 14.png',
        './cups/Rectangle 15.png',
        './cups/Rectangle 16.png',
    ];

    return (
        <div className='max-w-7xl mx-auto mt-32'>
            {/* Text Section */}
            <div className='text-center'>
                <h1 className="text-black font-raleway">Follow Us Now</h1>
                <h1 className="text-[#331A15] glow mt-4 font-bold text-2xl lg:text-5xl font-rancho">Follow on Instagram</h1>
            </div>

            {/* Images Section */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mt-8'>
                {images.map((image, index) => (
                    <div key={index} className='overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow'>
                        <img src={image} a className='w-full h-full object-cover' />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Follow;
