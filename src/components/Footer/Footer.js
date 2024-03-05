import React from 'react'
import ItemsContainer from "./ItemsContainer";

const Footer = () => {
    return (

        <footer className="bg-gray-800 text-white">
            <div className="md:flex md:justify-center md:items-center sm:px-12 px-4 bg-gray-800 py-7">
                <h3 className="lg:text-3xl text-2xl md:mb-0 mb-6 lg:leading-normal font-regular md:w-1/4"
                >
                    <span className="text-blue-400">Sign up</span> and get exclusive special deals
                </h3>
                <div>
                    <input
                        type="text"
                        placeholder="Enter Your Email"
                        className="text-gray-800 lg:ml-9 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
                    />
                    <button
                        className="bg-blue-500 hover:bg-blue-600 duration-300 px-5 py-2.5 font-[Poppins]
           rounded-md text-white md:w-auto w-full"
                    >
                       Sign Up
                    </button>
                </div>
            </div>
            <ItemsContainer />
            <div className="flex items-center justify-center text-center pt-2 text-gray-400 text-sm pb-8"
            >
                <span>© 2020 Appy. All rights reserved.</span>
                <span>Terms · Privacy Policy</span>
            </div>
        </footer>
    )
}

export default Footer
