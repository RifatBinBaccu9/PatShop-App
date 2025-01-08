import Image from 'next/image'
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { BsFolder2Open } from "react-icons/bs";

const Breeds = () => {
  return (
    <div>
       <div className=' '>
               <div className=' w-10/12 md:w-10/12 mx-auto my-20'>
                   <h1 className=' text-3xl sm:text-5xl font-laila font-bold text-center pt-10'>Explore breeds</h1>
                   <p className='pt-4 pb-10 text-lg font-medium w-full sm:w-4/5 mx-auto text-center'>Designed so animals can relax & indulge in pet stylists, run around our exercise yards, make new friends in doggy daycare, or simply spend hours in our dog grooming salon.</p>
                  
                  <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4'>
                    <div className=' border rounded-md p-3'>
                       <Image src={'/dog.png'} alt='image' width={100} height={100} className='w-full'/>
                       <div className='flex justify-between text-lg font-medium mt-2'>
                           <h4 className='text-lg font-bold'>Airedale Terrier</h4>
                       </div>
                       <p className='py-2 text-base'>Age: 2 years,3 month</p>

                           <div className='flex justify-between '>
                            <span className='text-base'>Breed: Lab/Viszla</span>
                           <span className='text-[#FF6F3F] text-lg'>$120.00</span>
                           </div>
                    </div>
                    
                    <div className=' border rounded-md  p-3'>
                       <Image src={'/dog1.png'} alt='image' width={100} height={100} className='w-full'/>
                       <div className='flex justify-between text-lg font-medium mt-2'>
                           <h4 className='text-lg font-bold'>Alasken Malamute</h4>
                       </div>
                       <p className='py-2 text-base'>Age: 2 years,3 month</p>

                           <div className='flex justify-between '>
                            <span className='text-base'>Breed: Lab/Viszla</span>
                           <span className='text-[#FF6F3F] text-lg'>$120.00</span>
                           </div>
                    </div>
                    
                    <div className=' border rounded-md  p-3'>
                       <Image src={'/dog2.png'} alt='image' width={100} height={100} className='w-full'/>
                       <div className='flex justify-between text-lg font-medium mt-2'>
                           <h4 className='text-lg font-bold'>Beagle</h4>
                       </div>
                       <p className='py-2 text-base'>Age: 2 years,3 month</p>

                           <div className='flex justify-between '>
                            <span className='text-base'>Breed: Lab/Viszla</span>
                           <span className='text-[#FF6F3F] text-lg'>$120.00</span>
                           </div>
                    </div>
                    
                    <div className=' border rounded-md  p-3'>
                       <Image src={'/dog3.png'} alt='image' width={100} height={100} className='w-full'/>
                       <div className='flex justify-between text-lg font-medium mt-2'>
                           <h4 className='text-lg font-bold'>Bull dog</h4>
                       </div>
                       <p className='py-2 text-base'>Age: 2 years,3 month</p>

                           <div className='flex justify-between '>
                            <span className='text-base'>Breed: Lab/Viszla</span>
                           <span className='text-[#FF6F3F] text-lg'>$120.00</span>
                           </div>
                    </div>
                    
                   
                    
       
       
                  </div>
               </div>
           </div>
    </div>
  )
}

export default Breeds