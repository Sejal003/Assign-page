import React from 'react'

const Deal = () => {
  return (
    <div className='lg:mx-60 md:mx-32 sm:mx-12'>
        <div className='my-7'>
        <h3 className=' text-3xl text-gray-700'>Related deals you might like for</h3>
        </div>
    <div className='  lg:flex md:flex sm:flex item-center justify-center gap-5 mb-10'>
      <div className="card">
        <div className='w-full flex item-center justify-center'>
        <img src="/logos/ass-img.png" alt="image" className='w-40 my-10'/>
        </div>
        <div className='flex-col p-5 gap-3'>
           <div className="flex item-center gap-2 mt-1">
            <span className='badge'>20% OFF</span>
            <span className='badge'>Limited time</span>
           </div>
           <div className='flex justify-center'>
           <h2 className='font-bold text-gray-500'>Webbuilder 1</h2>
           </div>
           <p className='text-gray-400 mt-2'>Computer  Modern clasic with wix support</p>
           <div className='flex gap-2 mt-1 '>
            <span className='text-gray-500 text-xl'>$39.96</span>
            <span className='text-gray-400 text-sm line-through mt-1'>$49.96</span>
            <span className='text-red-400 text-sm mt-1'>(20% Off)</span>
           </div>
           <button className="bg-blue-500 hover:bg-blue-600 duration-300 px-5 py-2.5 font-[Poppins]
           rounded-md text-white w-full mt-2">View Deal</button>
        </div>
      </div>
      <div className="card">
      <div className='w-full flex item-center justify-center'>
        <img src="/logos/ass-img.png" alt="image" className='w-40 my-10'/>
        </div>
        <div className='flex-col p-5 gap-3'>
           <div className="flex item-center gap-2 mt-1">
            <span className='badge'>20% OFF</span>
            <span className='badge'>Limited time</span>
           </div>
           <div className='flex justify-center'>
           <h2 className='font-bold text-gray-500'>Webbuilder 1</h2>
           </div>
           <p className='text-gray-400 mt-2'>Computer  Modern clasic with wix support</p>
           <div className='flex gap-2 mt-1 '>
            <span className='text-gray-500 text-xl'>$39.96</span>
            <span className='text-gray-400 text-sm line-through mt-1'>$49.96</span>
            <span className='text-red-400 text-sm mt-1'>(20% Off)</span>
           </div>
           <button className="bg-blue-500 hover:bg-blue-600 duration-300 px-5 py-2.5 font-[Poppins]
           rounded-md text-white w-full mt-2">Veiw Deal</button>
        </div>
      </div>
      <div className="card">
      <div className='w-full flex item-center justify-center'>
        <img src="/logos/ass-img.png" alt="image" className='w-40 my-10'/>
        </div>
        <div className='flex-col p-5 gap-3'>
           <div className="flex item-center gap-2 mt-1">
            <span className='badge'>20% OFF</span>
            <span className='badge'>Limited time</span>
           </div>
           <div className='flex justify-center'>
           <h2 className='font-bold text-gray-500'>Webbuilder 1</h2>
           </div>
           <p className='text-gray-400 mt-2'>Computer  Modern clasic with wix support</p>
           <div className='flex gap-2 mt-1 '>
            <span className='text-gray-500 text-xl'>$39.96</span>
            <span className='text-gray-400 text-sm line-through mt-1'>$49.96</span>
            <span className='text-red-400 text-sm mt-1'>(20% Off)</span>
           </div>
           <button className="bg-blue-500 hover:bg-blue-600 duration-300 px-5 py-2.5 font-[Poppins]
           rounded-md text-white w-full mt-2">View Deal</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Deal
