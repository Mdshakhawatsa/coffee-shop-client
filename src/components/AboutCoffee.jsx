import React from 'react';

// Data for the cards
const cardsData = [
    {
        imageSrc: './icons/1.png',
        title: 'Awesome Aroma',
        description: 'You will definitely be a fan of the design & aroma of your coffee.'
    },
    {
        imageSrc: './icons/2.png',
        title: 'High Quality',
        description: 'We served the coffee to you maintaining the best quality.'
    },
    {
        imageSrc: './icons/3.png',
        title: 'Pure Grades',
        description: 'The coffee is made of the green coffee beans which you will love'
    },
    {
        imageSrc: './icons/4.png',
        title: 'Proper Roasting',
        description: 'Your coffee is brewed by first roasting the green coffee beans'
    }
];

const AboutCoffee = () => {
    return (
        <div className='bg-[#ECEAE3] lg:h-[300px] flex justify-center items-center'>
            <div className='max-w-7xl mx-auto '>
                {/* Card Grid */}
                <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {cardsData.map((card, index) => (
                        <div key={index}>
                            <img src={card.imageSrc} alt={card.title} />
                            <h3 className='font-rancho text-3xl mt-5 mb-5'>{card.title}</h3>
                            <p className='font-raleway font-medium'>{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutCoffee;
