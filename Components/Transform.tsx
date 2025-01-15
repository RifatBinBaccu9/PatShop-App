import React from 'react'

const Transform = () => {
  return (
    <div className='bg-white text-black'>
        <div className='w-full h-[511px] relative flex justify-center items-center bg-cover bg-no-repeat' style={{backgroundImage: 'url("/bg22.png")'}}>
          <div className='bg-black opacity-50 inset-0 absolute'></div>
          <div className='text-white '>

            <div className='w-11/12 mx-auto'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-laila font-bold opacity-95 w-full lg:w-[694px]'>Transform a Life: The Power
            of Pet Adoption</h1>
            <p className='text-base lg:text-lg font-semibold opacity-80 w-full lg:w-[848px] mt-6 mb-[50px]'>Pet adoption provides a loving home to an animal in need, offering both companionship and fulfillment while helping to reduce shelter overcrowding. It's a meaningful way to make a positive impact.</p>
            <button className="btnStyle opacity-95 ">Adaptation</button>
            </div>
            </div>
          </div>
        </div>
  )
}

export default Transform