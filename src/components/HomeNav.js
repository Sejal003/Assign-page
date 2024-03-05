import React from 'react'
import { IoIosArrowDropdown } from "react-icons/io";
import { CiCircleCheck } from "react-icons/ci";
import { IoInformationCircleOutline } from "react-icons/io5";
import { TbMathGreater } from "react-icons/tb";


const HomeNav = () => {
    return (
        <div className='lg:mx-60 md:mx-32 sm:mx-12'>
            <div>
                <h1 className='text-5xl mt-6 mb-4 text-gray-800'>Best Website builders in the US</h1>
                <hr />
            </div>
            <div className='flex justify-between my-4 gap-5'>
                <div className='flex gap-5'>
                    <div className='flex item-center justify-center gap-1'><CiCircleCheck className='text-gray-700 mt-1' />
                        <h3 className='text-sm text-gray-600'>Last Updated - February 22, 2020</h3>
                    </div>
                    <div className='flex item-center justify-center gap-1'><IoInformationCircleOutline className='text-gray-700 mt-1' />
                        <h3 className='text-sm text-gray-600'>Advertising Disclosure</h3>
                    </div>
                </div>
                <div>
                    <div className='flex justify-center gap-1'>
                        <h3 className='text-sm text-gray-600'>Top Relevant</h3>
                        <IoIosArrowDropdown className='text-gray-700 mt-1' />
                    </div>
                </div>
            </div>
            <hr />
            <div className="flex gap-6 mt-4 mx-4 overflow-hidden ">
                  <button className='bg-gray-100 px-5 py-2.5 hover:text-blue-600 rounded-md text-xs text-gray-600'>Tools</button>
                  <button className='bg-gray-100 px-5 py-2.5 hover:text-blue-600 rounded-md text-xs text-gray-600'>AWS Builder</button>
                  <button className='bg-gray-100 px-5 py-2.5 hover:text-blue-600 rounded-md text-xs text-gray-600'>Start Build</button>
                  <button className='bg-gray-100 px-5 py-2.5 hover:text-blue-600 rounded-md text-xs text-gray-600'>Build Supplies</button>
                  <button className='bg-gray-100 px-5 py-2.5 hover:text-blue-600 rounded-md text-xs text-gray-600'>Tooling</button>
                  <button className='bg-gray-100 px-5 py-2.5 hover:text-blue-600 rounded-md text-xs text-gray-600'>BlueHosting</button>
            </div>
            <div className="flex gap-4 mt-4 overflow-hidden ">
                  <button className='text-xs text-gray-500  hover:text-blue-600'>Home</button><TbMathGreater className='text-gray-500 text-xs mt-1 '/>
                  <button className='text-xs text-gray-500 hover:text-blue-600'>Hosting for all</button><TbMathGreater className='text-gray-500 text-xs mt-1'/>
                  <button className='text-xs text-gray-500 hover:text-blue-600'>Hosting</button><TbMathGreater className='text-gray-500 text-xs mt-1'/>
                  <button className='text-xs text-gray-500 hover:text-blue-600'>Hosting6</button><TbMathGreater className='text-gray-500 text-xs mt-1'/>
                  <button className='text-xs text-gray-500 hover:text-blue-600'>Hosting5</button>
            </div>
        </div>
    )
}

export default HomeNav

