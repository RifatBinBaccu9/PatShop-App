import React from 'react'

const Transform = () => {
  return (
    <div>
        <div className='h-[500px] sm:h-[400px] relative bg-cover bg-no-repeat' style={{backgroundImage: 'url("/bg22.png")'}}>
          <div className='bg-black opacity-50 inset-0 absolute'></div>
          <div className='text-white w-11/12 sm:w-10/12 lg:w-3/5 mx-auto pt-20'>

            <h1 className='text-4xl font-laila font-bold opacity-95 w-full sm:w-10/12 lg:w-8/12'>Transform a Life: The Power
            of Pet Adoption</h1>
            <p className='text-lg font-semibold opacity-80 my-5'>Pet adoption provides a loving home to an animal in need, offering both companionship and fulfillment while helping to reduce shelter overcrowding. It's a meaningful way to make a positive impact.</p>
            <button className="btnStyle opacity-95">Adaptation</button>
            </div>
          </div>
        </div>
  )
}

export default Transform