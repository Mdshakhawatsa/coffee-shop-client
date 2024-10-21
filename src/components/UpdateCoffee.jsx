import React from 'react';
import Contact from './Contact';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { BiLeftArrowAlt } from 'react-icons/bi';

const UpdateCoffee = () => {
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

                    <div className=" bg-[#F4F3F0] p-24 rounded">


                        <div className="flex flex-col justify-center items-center text-center ">
                            <h2 className="text-5xl btnGlow text-[#374151]  font-rancho">Update Existing Coffee Details</h2>
                            <p className="mb-10 mt-10 font-raleway lg:w-[820px]">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                        </div>
                        {/* <form onSubmit={handleAddCoffee}> */}
                        <form>
                            {/* 1st */}
                            <div className="md:flex gap-2 mb-6 font-raleway">

                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text font-bold text-[15px]">Coffee Name</span>
                                    </label>
                                    <label className="input-group">

                                        <input type="text" name="name" placeholder="Coffee name" className="border-none input input-bordered w-full" />
                                    </label>
                                </div>
                                {/*  */}
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text">Chef</span>
                                    </label>
                                    <label className="input-group ">

                                        <input type="text" name="quantity" placeholder="Enter coffee chef" className="border-none input input-bordered w-full" />
                                    </label>
                                </div>
                            </div>
                            {/* 2nd */}
                            <div className="md:flex gap-2 mb-6 font-raleway">
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text">Supplier </span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name="supplier" placeholder="Supplier name" className="border-none input input-bordered w-full" />
                                    </label>
                                </div>
                                {/*  */}
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text">Taste</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name="taste" placeholder="Taste" className="border-none input input-bordered w-full" />
                                    </label>
                                </div>
                            </div>
                            {/* 3rd */}
                            <div className="md:flex gap-2 mb-6 font-raleway">
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text">Category</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name="category" placeholder="Category" className="border-none input input-bordered w-full" />
                                    </label>
                                </div>
                                {/*  */}
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text">Details</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name="details" placeholder="Details" className="border-none input input-bordered w-full" />
                                    </label>
                                </div>
                            </div>
                            {/*  */}
                            <div className=" mb-6">

                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name="photo" placeholder="Photo URL" className="border-none input input-bordered w-full" />
                                    </label>
                                </div>
                            </div>
                            {/*  */}
                            <input type="submit" value="Update Coffee Details" className="btn btn-block bg-[#D2B48C] font-rancho text-2xl text-[#331A15] border-2 border-amber-950" />
                        </form>
                    </div>

                </div>


            </div>
            <Contact />
        </div>
    );
};

export default UpdateCoffee;