import Image from 'next/image'
import { MdOutlineAccessTime } from "react-icons/md";
import { MdOutlineDateRange } from "react-icons/md";

const Articles = () => {
  return (
    <div className=''>
        <div className='pat-container my-20'>
            <h1 className=' text-2xl sm:text-5xl font-laila font-bold text-center'>Latest Post & Articles</h1>

            <div className='lg:flex gap-10 mt-10'>
                <div className='w-11/12 lg:w-3/5 mx-auto'>
                    <div className=' sm:flex gap-5 mb-5'>
                    <div className='w-10/12 sm:w-[25%] mx-auto'>
                        <Image src={'/patsdog.png'} alt='imagecat1' width={100} height={100} className='w-full'/>
                    </div>

                    <div className='w-full sm:w-[75%] mt-5 mb-20 sm:mt-0 sm:mb-0'>
                    <h2 className='text-2xl font-laila font-bold'>A recipe for dog biscuits suitable for the holidays</h2>
                    <p className='text-base font-normal mt-2'>Proper nutrition is key to your cat’s health, supporting their immune system, energy, and overall well-being.  </p>

                    <div className='flex justify-between mt-2'>
                        <span className='flex gap-1'>
                        <MdOutlineDateRange className='mt-1'/>
                          <span>October 17, 2024</span>
                        </span>

                        <span className='flex gap-1'>
                        <MdOutlineAccessTime className='mt-1'/>
                           <span>9 min read</span>
                        </span>
                    </div>
                    </div>

                    </div>
                    <div className=' sm:flex gap-5 mb-5'>
                    <div className='w-10/12 sm:w-[25%] mx-auto'>
                        <Image src={'/patcat1.png'} alt='imagecat1' width={100} height={100} className='w-full'/>
                    </div>

                    <div className='w-full sm:w-[75%] mt-5 mb-20 sm:mt-0 sm:mb-0'>
                    <h2 className='text-2xl font-laila font-bold'>A recipe for dog biscuits suitable for the holidays</h2>
                    <p className='text-base font-normal mt-2'>Proper nutrition is key to your cat’s health, supporting their immune system, energy, and overall well-being.  </p>

                    <div className='flex justify-between mt-2'>
                        <span className='flex gap-1'>
                        <MdOutlineDateRange className='mt-1'/>
                          <span>October 17, 2024</span>
                        </span>

                        <span className='flex gap-1'>
                        <MdOutlineAccessTime className='mt-1'/>
                           <span>9 min read</span>
                        </span>
                    </div>
                    </div>

                    </div>
                    <div className=' sm:flex gap-5 mb-5'>
                    <div className='w-10/12 sm:w-[25%] mx-auto'>
                        <Image src={'/patcat2.png'} alt='imagecat1' width={100} height={100} className='w-full'/>
                    </div>

                    <div className='w-full sm:w-[75%] mt-5 mb-20 sm:mt-0 sm:mb-0'>
                    <h2 className='text-2xl font-laila font-bold'>A recipe for dog biscuits suitable for the holidays</h2>
                    <p className='text-base font-normal mt-2'>Proper nutrition is key to your cat’s health, supporting their immune system, energy, and overall well-being.  </p>

                    <div className='flex justify-between mt-2'>
                        <span className='flex gap-1'>
                        <MdOutlineDateRange className='mt-1'/>
                          <span>October 17, 2024</span>
                        </span>

                        <span className='flex gap-1'>
                        <MdOutlineAccessTime className='mt-1'/>
                           <span>9 min read</span>
                        </span>
                    </div>
                    </div>

                    </div>

                    
                    
                    
                </div>

                <div className='p-1 border rounded-md w-11/12 sm:w-10/12 lg:w-2/5 mx-auto mt-10 lg:mt-0'>
                    <Image src={'/patsimageright.png'} alt='imageright' width={100} height={100} className='w-full'/>
                    <div className='p-3'>
                    <h2 className='text-2xl font-laila font-bold'>A recipe for dog biscuits suitable for the holidays</h2>
                    <p className='text-base font-normal mt-3'>Proper nutrition is key to your cat’s health, supporting their immune system, energy, and overall well-being.  </p>

                    <div className='flex justify-between mt-3'>
                        <span className='flex gap-1'>
                        <MdOutlineDateRange className='mt-1'/>
                          <span>October 17, 2024</span>
                        </span>

                        <span className='flex gap-1'>
                        <MdOutlineAccessTime className='mt-1'/>
                           <span>9 min read</span>
                        </span>
                    </div>
                    </div>
                </div>
            </div>
        </div>

       
    </div>
  )
}

export default Articles