import Image from 'next/image'
import React from 'react'

const ShopPeat = () => {
  return (
    <div className=' relative'>
        <div className='pat-container my-[120px]'>
            <h1 className='text-4xl sm:text-5xl font-laila font-bold text-center sm:text-start'>Shop by Peat</h1>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 gap-[46px] mt-14'>
               <div>
                <Image src={'/pats1.png'} alt='pats' width={100} height={100} className='w-[182px] h-[148px]'/>
                <h3 className='text-[28px] font-bold font-laila text-center pt-6'>Dog</h3>
               </div>
               <div>
                <Image src={'/pats2.png'} alt='pats' width={100} height={100} className='w-[182px] h-[148px]'/>
                <h3 className='text-[28px] font-bold font-laila text-center pt-6'>Cat</h3>
               </div>
               <div>
                <Image src={'/pats3.png'} alt='pats' width={100} height={100} className='w-[182px] h-[148px]'/>
                <h3 className='text-[28px] font-bold font-laila text-center pt-6'>Birds</h3>
               </div>
               <div>
                <Image src={'/pats4.png'} alt='pats' width={100} height={100} className='w-[182px] h-[148px]'/>
                <h3 className='text-[28px] font-bold font-laila text-center pt-6'>Rabbit</h3>
               </div>
               <div>
                <Image src={'/pats5.png'} alt='pats' width={100} height={100} className='w-[182px] h-[148px]'/>
                <h3 className='text-[28px] font-bold font-laila text-center pt-6'>Fish</h3>
               </div>
               <div>
                <Image src={'/pats6.png'} alt='pats' width={100} height={100} className='w-[182px] h-[148px]'/>
                <h3 className='text-[28px] font-bold font-laila text-center pt-6'>Tortoise</h3>
               </div>
              
               
            </div>
        </div>
        
        <div className='hidden lg:block'>
            <Image src={'/Isolation_Mode.png'} alt='imageleg' width={100} height={100} className='w-[200px] absolute -top-40 right-0'/>
        </div>
    </div>
  )
}

export default ShopPeat