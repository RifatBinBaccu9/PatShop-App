import Image from 'next/image'

const Breeds = () => {
  return (
    <div>
       <div className=' bg-white text-black '>
               <div className='pat-container mt-[120px] mb-40'>
                   <h1 className=' text-4xl sm:text-5xl font-laila font-bold text-center '>Explore Breeds</h1>
                   <p className='text-base font-normal font-lora w-full md:w-[682px] mx-auto text-center mt-6 mb-14'>Designed so animals can relax & indulge in pet stylists, run around our exercise yards, make new friends in doggy daycare, or simply spend hours in our dog grooming salon.</p>
                  
                  <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                    <div className=' border border-[#D9D9D9] rounded-md p-[14px]'>
                       <Image src={'/dog.png'} alt='image' width={100} height={100} className='w-full'/>
                       <div className='flex justify-between text-lg font-medium mt-2'>
                           <h4 className='text-lg font-semibold font-lora'>Airedale Terrier</h4>
                       </div>
                       <p className='text-base font-lora font-medium my-2'>Age: 2 years,3 month</p>

                           <div className='flex justify-between '>
                            <span className='text-base font-lora font-medium '>Breed: Lab/Viszla</span>
                           <span className='text-[#FF6F3F] text-lg font-lora font-semibold'>$120.00</span>
                           </div>
                    </div>
                    
                    <div className='border border-[#D9D9D9] rounded-md p-[14px]'>
                       <Image src={'/dog1.png'} alt='image' width={100} height={100} className='w-full'/>
                       <div className='flex justify-between text-lg font-medium mt-2'>
                           <h4 className='text-lg font-semibold font-lora'>Alasken Malamute</h4>
                       </div>
                       <p className='text-base font-lora font-medium my-2'>Age: 2 years,3 month</p>

                           <div className='flex justify-between '>
                            <span className='text-base font-lora font-medium'>Breed: Lab/Viszla</span>
                           <span className='text-[#FF6F3F] text-lg font-lora font-semibold'>$120.00</span>
                           </div>
                    </div>
                    
                    <div className='border border-[#D9D9D9] rounded-md p-[14px]'>
                       <Image src={'/dog2.png'} alt='image' width={100} height={100} className='w-full'/>
                       <div className='flex justify-between text-lg font-medium mt-2'>
                           <h4 className='text-lg font-semibold font-lora'>Beagle</h4>
                       </div>
                       <p className='text-base font-lora font-medium my-2'>Age: 2 years,3 month</p>

                           <div className='flex justify-between '>
                            <span className='text-base font-lora font-medium'>Breed: Lab/Viszla</span>
                           <span className='text-[#FF6F3F] text-lg font-lora font-semibold'>$120.00</span>
                           </div>
                    </div>
                    
                    <div className='border border-[#D9D9D9] rounded-md p-[14px]'>
                       <Image src={'/dog3.png'} alt='image' width={100} height={100} className='w-full'/>
                       <div className='flex justify-between text-lg font-medium mt-2'>
                           <h4 className='text-lg font-semibold font-lora'>Bull dog</h4>
                       </div>
                       <p className='text-base font-lora font-medium my-2'>Age: 2 years,3 month</p>

                           <div className='flex justify-between '>
                            <span className='text-base font-lora font-medium'>Breed: Lab/Viszla</span>
                           <span className='text-[#FF6F3F] text-lg font-lora font-semibold'>$120.00</span>
                           </div>
                    </div>
                    
                   
                    
       
       
                  </div>
               </div>
           </div>
    </div>
  )
}

export default Breeds