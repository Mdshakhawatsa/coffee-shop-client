import React from 'react';
import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { ImLocation } from 'react-icons/im';
import { IoCall } from 'react-icons/io5';
import { LiaLinkedin, LiaLinkedinIn } from 'react-icons/lia';
import { MdMail } from 'react-icons/md';
import { TfiTwitter, TfiTwitterAlt } from 'react-icons/tfi';

const Contact = () => {
    return (
        <div>
            <div className="mt-[80px] h-[800px]" style={{ backgroundImage: `url('./contact.jpg')` }}>
             
                <div className='lg:flex justify-between items-center pt-20  max-w-7xl mx-auto'>
                    
                    {/* left-side */}
                    <div>
                    <img className="h-[50px] w-[50px] lg:h-[90px] lg:w-[90px]" src="./logo.png" alt="Logo" />

                        <div className=" mt-7 ">
                            <h1 className=" text-[#331A15]  glow text-2xl lg:text-5xl   font-rancho">Espresso Emporium</h1>
                            <p className='lg:w-[600px] font-raleway lg:text-xl mt-10'>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                        </div>
                        <div className='flex gap-3 text-3xl text-[#331A15]  mt-10'>
                            <FaFacebook />
                            <TfiTwitterAlt />
                            <BsInstagram />
                            <BsLinkedin />
                        </div>
                        <h1 className=" text-[#331A15] glow text-2xl lg:text-5xl font-rancho mt-10">Get in Touch</h1>
                        <div className='flex items-center gap-10 mt-10 '>
                            <div className='text-[#331A15] space-y-5'>
                                <IoCall />
                                <MdMail />
                                <ImLocation />
                            </div>
                            <div className='text-[#000000] space-y-4'>
                                <h1>+88 017817646455</h1>
                                <h1>mdffsa999@gmail.com</h1>
                                <h1>72, Wall street, King Road, Dhaka</h1>
                            </div>

                        </div>
                    </div>

                    {/* right side */}
                    <div className='lg:mt-32'>
                        <h1 className=" text-[#331A15]  glow text-2xl lg:text-5xl font-rancho">Connect With Us</h1>

                        <div className='mt-10'>
                            <form className="">
                                <div>
                                    <input type="name" placeholder="Name" className="mb-4 hover:border-[#D2B48C] hover:border-2 lg:w-[500px] w-[400px] h-[50px] px-5" required />
                                </div>
                                <div>
                                    <input type="email" placeholder="E-mail" className="mb-4 lg:w-[500px] w-[400px] h-[50px] px-5 hover:border-[#D2B48C] hover:border-2" required />
                                </div>
                                <div>
                                    {/* <input type="text" placeholder="Massage" className="w-[500px] h-[200px] px-5" required /> */}
                                    <textarea type="text" className="mb-4 lg:w-[500px] lg:h-[200px] w-[400px] p-5" placeholder='Messsage' id=""></textarea>
                                </div>
                            </form>
                            <button className='border-2 border-[#331A15] px-6 py-2 text-[#331A15] font-rancho text-2xl rounded-full '>
                                Send Message
                            </button>
                        </div>

                    </div>
                </div>

            </div>




            {/* footer */}
            <div className=" flex justify-center items-center  h-[50px]" style={{ backgroundImage: `url('./footer.jpg')` }}>
                <h1 className='text-white   font-bold  font-rancho '>
                    Copyright Espresso Emporium ! All Rights Reserved
                </h1>
            </div>
        </div>
    );
};

export default Contact;
