import React from 'react';
import Navbar from './Navbar';

const LearnMore = () => {
    return (
        <div>
            <Navbar />
            <div className="bg-gradient-to-r from-[#dbbd9f] to-[#807260] p-10 rounded-lg shadow-xl max-w-6xl mx-auto mt-12">
                <h1 className="text-4xl lg:text-6xl font-bold text-center mb-6 text-[#331A15] font-rancho glow">
                    About Our Coffee
                </h1>
                <p className="text-[#291212] text-lg lg:text-xl leading-relaxed tracking-wide">
                    Our coffee beans are sourced from the finest farms around the world, ensuring a
                    <span className="text-[#e3b577] font-bold underline"> premium taste experience.</span>
                    We roast each batch to perfection, balancing natural flavors with a deep, rich aroma.
                </p>
                <p className="text-[#291212] text-lg lg:text-xl leading-relaxed tracking-wide mt-10">
                    At our coffee shop, we strive to provide an environment where you can relax, work, or meet with friends,
                    <span className="text-[#291212] font-bold"> all while enjoying the perfect cup of coffee.</span>
                </p>
                <p className="text-[#291212] text-lg lg:text-xl leading-relaxed tracking-wide mt-10">
                    At Espresso Emporium, we pride ourselves on offering a world-class coffee experience. Our journey begins with the finest beans, handpicked from sustainable farms across renowned coffee-growing regions like <span className='font-bold'>Ethiopia, Colombia, and Brazil</span>. Each bean tells a story of dedication, hard work, and tradition. We carefully roast them in small batches, ensuring that every cup bursts with rich, complex flavors — from nutty undertones to chocolatey depths and hints of bright citrus.
                </p>
                <p className="text-[#291212] text-lg lg:text-xl leading-relaxed tracking-wide mt-10">
                    But it's not just about the beans. We believe coffee is an experience. Whether you enjoy your cup bold and black, or with <span className='font-bold'>frothy milk and sweet syrups</span>, each brew is crafted with precision by our expert baristas. We don’t just serve coffee; we create moments. From the cozy aroma that greets you when you walk in, to the first sip that lingers on your palate, every aspect of our coffee is designed to awaken your senses.
                </p>
                <p className="text-[#291212] text-lg lg:text-xl leading-relaxed tracking-wide mt-10">

                    At our café, it's not just about caffeine — it's about connection, relaxation, and indulging in something truly special.
                </p>
                <div className="mt-8 text-center">
                    <button className="bg-[#331A15] text-white py-2 px-6 rounded-lg text-lg font-medium transition duration-300 transform hover:scale-105 hover:bg-[#e3b577] hover:text-black">
                        Discover More
                    </button>
                </div>
            </div>


        </div>
    );
};

export default LearnMore;