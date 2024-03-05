import React from 'react'
import { FaStar } from "react-icons/fa";
// <FaStar />
import { FaStarHalfAlt } from "react-icons/fa";
// <FaStarHalfAlt />
import { FaRegStar } from "react-icons/fa6";
// {/* <FaRegStar /> */}
import { IoInformationCircleOutline } from "react-icons/io5";
import { IoIosArrowDropdown } from "react-icons/io";
import { GoTrophy } from "react-icons/go";
import { IoDiamondOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";

const Services = () => {
    return (
        <div className='lg:mx-60 md:mx-32 sm:mx-12'>
            <div className='bg-orange-400 text-white h-8 w-32 flex items-center justify-center gap-2 mt-10 rounded-md'><GoTrophy /> Best Choice</div>
            <div className="card2">
            <div className=' h-8 rounded-full mt-8 text-xl text-gray-500'>1</div>
                <div className='mx-10'>
                   <img src="/logos/ass-img.png" alt="image" className='w-80 mt-20' />
                    <div className='flex justify-center'>
                        <h2 className='text-gray-500 text-sm mt-2'>Builder 1</h2>
                    </div>
                </div>
                <div className='flex-col'>
                    <p className='text-gray-600 mt-6 text-base'> <span className='font-bold'>WixPro 72-Inch Responsive Website Builder-</span> Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)</p>
                    <h3 className='font-medium text-base text-gray-700 mt-2'>Main highlights</h3>
                    <p className='text-gray-600 mt-2 text-base ml-2'>[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.</p>
                    <div className='flex mb-4'>
                    <button className="bg-gray-100 hover:bg-blue-600 duration-300 px-5 py-2.5 font-[Poppins]
           rounded-md text-blue-500 mt-2 text-base">Show more </button>
           <IoIosArrowDropdown className='text-blue-500 mt-6' />
                    </div>
                    
                </div>
                <div className='flex-col mx-10'>
                    <div className='flex justify-center w-40'>
                        <div className='bg-blue-100 w-32 rounded-md'>
                            <IoInformationCircleOutline className='text-blue-300 mt-1' />
                            <h4 className='font-regular text-blue-800 px-10 text-3xl'>9.8</h4>
                            <p className='text-sm px-6 my-2'>Exceptional</p>
                            <div className='flex gap-1 px-4 mb-4'>
                                <FaStar className='text-yellow-400 text-sm' />
                                <FaStar className='text-yellow-400 text-sm' />
                                <FaStar className='text-yellow-400 text-sm' />
                                <FaStar className='text-yellow-400 text-sm' />
                                <FaStar className='text-yellow-400 text-sm' />
                            </div>
                        </div>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-600 duration-300 px-5 py-2.5 font-[Poppins]
           rounded-md text-white w-full mt-24">View</button>
                </div>
            </div>
            <div className='bg-orange-400 text-white h-8 w-32 flex items-center justify-center gap-2 mt-10 rounded-md'><IoDiamondOutline /> Best Value</div>
            <div className="card2">
            <div className=' h-8 rounded-full mt-8 text-xl text-gray-500'>2</div>
                <div className='mx-10'>
                   <img src="/logos/ass-img.png" alt="image" className='w-80 mt-20' />
                    <div className='flex justify-center'>
                        <h2 className='text-gray-500 text-sm mt-2'>Builder</h2>
                    </div>
                </div>
                <div className='flex-col'>
                    <p className='text-gray-600 mt-6 text-base'> <span className='font-bold'> SiteCraft 68-Inch Ultimate Web Design Studio-</span> Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)</p>
                    <h3 className='font-medium text-base text-gray-700 mt-2'>Main highlights</h3>
                    <p className='text-gray-600 mt-2 text-base ml-2'>[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.</p>
                    <div className='flex mb-4'>
                    <button className="bg-gray-100 hover:bg-blue-600 duration-300 px-5 py-2.5 font-[Poppins]
           rounded-md text-blue-500 mt-2 text-base">Show more </button>
           <IoIosArrowDropdown className='text-blue-500 mt-6' />
                    </div>
                    
                </div>
                <div className='flex-col mx-10'>
                    <div className='flex justify-center w-40'>
                        <div className='bg-blue-100 w-32 rounded-md'>
                            <IoInformationCircleOutline className='text-blue-300 mt-1' />
                            <h4 className='font-regular text-blue-800 px-10 text-3xl'>9.5</h4>
                            <p className='text-sm px-6 my-2'>Exceptional</p>
                            <div className='flex gap-1 px-4 mb-4'>
                                <FaStar className='text-yellow-400 text-sm' />
                                <FaStar className='text-yellow-400 text-sm' />
                                <FaStar className='text-yellow-400 text-sm' />
                                <FaStar className='text-yellow-400 text-sm' />
                                <FaStarHalfAlt className='text-yellow-400 text-sm' />
                            </div>
                        </div>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-600 duration-300 px-5 py-2.5 font-[Poppins]
           rounded-md text-white w-full mt-24">View</button>
             </div>
            </div>

            <div className="card2 mt-10">
            <div className=' h-8 rounded-full mt-8 text-xl text-gray-500'>3</div>
                <div className='mx-10'>
                   <img src="/logos/ass-img.png" alt="image" className='w-80 mt-20' />
                    <div className='flex justify-center'>
                        <h2 className='text-gray-500 text-sm mt-2'>Builder 1</h2>
                    </div>
                </div>
                <div className='flex-col'>
                    <p className='text-gray-600 mt-6 text-base'> <span className='font-bold'>WixPro 72-Inch Responsive Website Builder-</span> Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)</p>
                    <h3 className='font-medium text-base text-gray-700 mt-2'>Main highlights</h3>
                    <p className='text-gray-600 mt-2 text-base ml-2'>[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.</p>
                    <div className='flex mb-4'>
                    <button className="bg-gray-100 hover:bg-blue-600 duration-300 px-5 py-2.5 font-[Poppins]
           rounded-md text-blue-500 mt-2 text-base">Show more </button>
           <IoIosArrowDropdown className='text-blue-500 mt-6' />
                    </div>
                    
                </div>
                <div className='flex-col mx-10'>
                    <div className='flex justify-center w-40'>
                        <div className='bg-blue-100 w-32 rounded-md'>
                            <IoInformationCircleOutline className='text-blue-300 mt-1' />
                            <h4 className='font-regular text-blue-800 px-10 text-3xl'>9.3</h4>
                            <p className='text-sm px-6 my-2'>Exceptional</p>
                            <div className='flex gap-1 px-4 mb-4'>
                                <FaStar className='text-yellow-400 text-sm' />
                                <FaStar className='text-yellow-400 text-sm' />
                                <FaStar className='text-yellow-400 text-sm' />
                                <FaStar className='text-yellow-400 text-sm' />
                                <FaStarHalfAlt className='text-yellow-400 text-sm' />
                            </div>
                        </div>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-600 duration-300 px-5 py-2.5 font-[Poppins]
           rounded-md text-white w-full mt-24">View</button>
                </div>
            </div>
          
            <div className="card2 mt-10">
            <div className=' h-8 rounded-full mt-8 text-xl text-gray-500'>4</div>
                <div className='mx-10'>
                   <img src="/logos/ass-img.png" alt="image" className='w-80 mt-40' />
                    <div className='flex justify-center'>
                        <h2 className='text-gray-500 text-sm mt-2'>CDK</h2>
                    </div>
                </div>
                <div className='flex-col'>
                    <p className='text-gray-600 mt-6 text-base'> <span className='font-bold'> CDK Resposive Builder:</span> An extensive library of widgets and apps, and detailed step-by-step guides</p>
                    <div className="flex item-center gap-2 mt-1">
                        <span className='badge'>26% OFF</span>
                    </div>
                    <h3 className='font-medium text-base text-gray-700 mt-2'>Main highlights</h3>
                    <div className='text-gray-600 mt-2 text-base ml-2 bg-pink-100 rounded-md'>
                        <div className='py-2'>
                        <div className='flex gap-4'>
                          <p className='bg-white ml-4 px-2 text-blue-500'>9.9</p>
                          <h3 className='text-sm text-gray-600'>Building Responsive</h3>
                        </div>
                        <div className='flex gap-4 mt-2'>
                          <p className='bg-white ml-4 px-2 text-blue-500'>8.9</p>
                          <h3 className='text-sm text-gray-600'>Cool</h3>
                        </div>
                        <div className='flex gap-4 mt-2'>
                          <p className='bg-white ml-4 px-2 text-blue-500'>8.9</p>
                          <h3 className='text-sm text-gray-600'>Docs</h3>
                        </div>
                        </div>   
                    </div>
                    <h3 className='font-regular text-base text-gray-700 mt-2'>Why we love it</h3>
                    <div className='text-gray-600 mt-2 text-base'>
                        <div className='py-2'>
                        <div className='flex gap-4'>
                          <p className=' ml-4 px-2 text-blue-600 rounded-full'><FaCheck /></p>
                          <h3 className='text-sm text-gray-600'>Documentation</h3>
                        </div>
                        <div className='flex gap-4 mt-2'>
                          <p className=' ml-4 px-2 text-blue-600'><FaCheck /></p>
                          <h3 className='text-sm text-gray-600'>Easy Use</h3>
                        </div>
                        <div className='flex gap-4 mt-2'>
                          <p className=' ml-4 px-2 text-blue-600'><FaCheck /></p>
                          <h3 className='text-sm text-gray-600'>Out of box</h3>
                        </div>
                        </div>   
                    </div>
                    <div className='flex mb-4'>
                    <button className="bg-gray-100 hover:bg-blue-600 duration-300 px-5 py-2.5 font-[Poppins]
           rounded-md text-blue-500 mt-2 text-base">Show more </button>
           <IoIosArrowDropdown className='text-blue-500 mt-6' />
                    </div>
                </div>
                <div className='flex-col mx-10'>
                    <div className='flex justify-center w-40'>
                        <div className='bg-blue-100 w-32 rounded-md'>
                            <IoInformationCircleOutline className='text-blue-300 mt-1' />
                            <h4 className='font-regular text-blue-800 px-10 text-3xl'>9.1</h4>
                            <p className='text-sm px-6 my-2'>Exceptional</p>
                            <div className='flex gap-1 px-4 mb-4'>
                                <FaStar className='text-yellow-400 text-sm' />
                                <FaStar className='text-yellow-400 text-sm' />
                                <FaStar className='text-yellow-400 text-sm' />
                                <FaStar className='text-yellow-400 text-sm' />
                                <FaRegStar className='text-yellow-400 text-sm' />
                            </div>
                        </div>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-600 duration-300 px-5 py-2.5 font-[Poppins]
           rounded-md text-white w-full mt-64">View</button>
                </div>

            </div>
        </div>
    )
}

export default Services
