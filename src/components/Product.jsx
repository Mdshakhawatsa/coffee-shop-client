import React from 'react'
import './glow.css';
import { BsCup, BsEye, BsPen } from 'react-icons/bs';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const cardsData = [
    {
        imageSrc: '',
        title: ' Americano Coffee',
        chef: 'Mr. Matin Paul',
        price: "450 Taka"
    },
    {
        imageSrc: '',
        title: ' Espresso Coffee',
        chef: 'Mr. Matin Paul',
        price: "750 Taka"
    },
    {
        imageSrc: '',
        title: 'Cappuccino Coffee',
        chef: 'Mr. Matin Paul',
        price: "350 Taka"
    },
    {
        imageSrc: '',
        title: ' Black Coffee',
        chef: 'Mr. Matin Paul',
        price: "650 Taka"
    },
    {
        imageSrc: '',
        title: ' Black Coffee',
        chef: 'Mr. Matin Paul',
        price: "650 Taka"
    },
    {
        imageSrc: '',
        title: ' Black Coffee',
        chef: 'Mr. Matin Paul',
        price: "650 Taka"
    },
    {
        imageSrc: '',
        title: ' Black Coffee',
        chef: 'Mr. Matin Paul',
        price: "650 Taka"
    }
];

const Product = () => {
    return (
        <div className=" mt-[80px]   min-h-screen" style={{ backgroundImage: `url('./product.png')` }}
        >
            {/* <img src="./product.png" alt="" className="w-full  object-cover" /> */}
            <div className=" inset-0   text-center">
                <h1 className="text-black font-raleway">--- Sip & Savor ---</h1>
                <h1 className="text-[#331A15]   glow  mt-4 font-bold text-2xl lg:text-5xl font-rancho">Our Popular Products</h1>

                <Link to="/addCoffee">
                    <button className='py-2 px-4 mt-6 bg-[#E3B577] border-[#331A15] border-2 rounded font-rancho text-2xl hover:border-2  hover:bg-transparent text-white   glow '>
                        <div className='flex items-center gap-3  '>
                            <h1 className=''>Add Coffee</h1>
                            <BsCup className=' text-[#331A15]'></BsCup>
                        </div>
                    </button>
                </Link>
                {/*  */}

                <div className='mt-10 '>
                    {/* Card Grid */}
                    <div className='grid grid-cols-1 max-w-7xl mx-auto gap-5  md:grid-cols-2 lg:grid-cols-2 0'>
                        {cardsData.map((card, index) => (
                            // <div key={index} className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow'>
                            //     <img className='h-40 w-full object-cover rounded-md mb-4' src={card.imageSrc} alt={card.title} />
                            //     <h3 className='text-xl font-semibold text-gray-800 mb-2'>{card.title}</h3>
                            //     <p className='text-gray-600'>{card.description}</p>
                            // </div>
                            <div className="h-[300px]   flex justify-between items-center  bg-[#F5F4F1] lg:p-10 rounded-lg">
                                <div>
                                    <img src={card.imageSrc} alt="not found" />
                                </div>
                                <div className="text-left">
                                    <div>
                                        <h1 className='font-raleway font-semibold'>Name: <span className='font-normal ml-2'>{card.title}</span> </h1>
                                        <h1 className='font-raleway font-semibold'>Chef: <span className='font-normal ml-2'>{card.chef}</span> </h1>
                                        <h1 className='font-raleway font-semibold'>Price: <span className='font-normal ml-2'>{card.price}</span> </h1>
                                    </div>
                                </div>

                                <div className="space-y-5  text-white">
                                    <div className='bg-[#D2B48C] py-2 px-2 rounded'>
                                        <Link to={"/singleCoffeeDetails"}>
                                            <BsEye />
                                        </Link>
                                    </div>
                                    <div className='bg-[#3C393B] py-2 px-2 rounded'>
                                        <Link to={"/updateCoffee"}>
                                            <BsPen />
                                        </Link>
                                    </div>
                                    <div className='bg-[#EA4744] py-2 px-2 rounded'>
                                        <AiFillDelete />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;