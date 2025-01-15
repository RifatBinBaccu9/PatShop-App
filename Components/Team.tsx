import Image from "next/image"
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

const Team = () => {
  return (
    <div className="relative">
        <div className='bg-[#FFE6E4] pt-[60px] '>
                <div className='pat-container'>
                <h1 className=' text-4xl sm:text-5xl font-laila font-bold text-center'>Our Team</h1>
                   <p className='text-base font-lora w-full sm:w-[397px] mx-auto text-center mt-6 mb-[56px]'>Meet our dedicated team, passionate about providing
                   the best care for your pets!.</p>
                  
                   <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                     <div className=' border rounded-[20px] p-6 bg-white'>
                        <Image src={'/dogc1.png'} alt='image' width={100} height={100} className='w-full'/>
                        <div className=' text-lg font-medium mt-6'>
                        <h4 className=" text-xl font-bold font-laila">Dr. sania mirza</h4>
                        <p className='py-1 text-lg font-semibold font-lora'>Doctor</p>
                        </div>
                     </div>
                     <div className=' border rounded-[20px] p-6 bg-white'>
                        <Image src={'/dogc2.png'} alt='image' width={100} height={100} className='w-full'/>
                        <div className=' text-lg font-medium mt-6'>
                        <h4 className=" text-xl font-bold font-laila">Murubbi William</h4>
                        <p className='py-1 text-lg font-semibold font-lora'>Doctor</p>
                        </div>
                     </div>
                     <div className=' border rounded-[20px] p-6 bg-white'>
                        <Image src={'/dogc3.png'} alt='image' width={100} height={100} className='w-full'/>
                        <div className=' text-lg font-medium mt-6'>
                         <h4 className=" text-xl font-bold font-laila">Dipto biswas</h4>
                        <p className='py-1 text-lg font-semibold font-lora'>Dog trainer</p>
                        </div>
                     </div>
                     <div className=' border rounded-[20px] p-6 bg-white'>
                        <Image src={'/dogc4.png'} alt='image' width={100} height={100} className='w-full'/>
                        <div className=' text-lg font-medium mt-6'>
                        <h4 className=" text-xl font-bold font-laila">Liton nandi das</h4>
                        <p className='py-1 text-lg font-semibold font-lora'>Doctor</p>
                        </div>
                     </div>
                     
                     </div>
                   </div>
                <div className="flex justify-center items-center gap-5 text-[30px] pt-[50px] pb-[60px]">
                <FaArrowLeftLong />
                <FaArrowRightLong className="text-[#FF6F3F]"/>
                </div>
                </div>
                <div className="hidden 2xl:block">
                    <Image src={'/Isolation_Mode66.png'} alt='' width={100} height={100} className='w-[200px] absolute top-0 right-0'/>
                </div>
            </div>
  )
}

export default Team