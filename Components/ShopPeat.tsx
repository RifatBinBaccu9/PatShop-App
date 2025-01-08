import Image from 'next/image'
import React from 'react'

const ShopPeat = () => {
  return (
    <div>
        <div className='w-10/12 mx-auto'>
            <h1 className='text-5xl font-laila font-bold'>Shop by Peat</h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 mt-14'>
               <div>
                <Image src={'/pats1.png'} alt='pats' width={100} height={100} className='w-full'/>
                <h3 className='text-2xl font-bold font-laila text-center pt-5'>Dog</h3>
               </div>
               <div>
                <Image src={'/pats2.png'} alt='pats' width={100} height={100} className='w-full'/>
                <h3 className='text-2xl font-bold font-laila text-center pt-5'>Cat</h3>
               </div>
               <div>
                <Image src={'/pats3.png'} alt='pats' width={100} height={100} className='w-full'/>
                <h3 className='text-2xl font-bold font-laila text-center pt-5'>Birds</h3>
               </div>
               <div>
                <Image src={'/pats4.png'} alt='pats' width={100} height={100} className='w-full'/>
                <h3 className='text-2xl font-bold font-laila text-center pt-5'>Rabbit</h3>
               </div>
               <div>
                <Image src={'/pats5.png'} alt='pats' width={100} height={100} className='w-full'/>
                <h3 className='text-2xl font-bold font-laila text-center pt-5'>Fish</h3>
               </div>
               <div>
                <Image src={'/pats6.png'} alt='pats' width={100} height={100} className='w-full'/>
                <h3 className='text-2xl font-bold font-laila text-center pt-5'>Tortoise</h3>
               </div>
              
               
            </div>
        </div>
    </div>
  )
}

export default ShopPeat