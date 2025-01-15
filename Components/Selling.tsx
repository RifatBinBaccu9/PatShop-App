import Image from 'next/image'
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { BsFolder2Open } from "react-icons/bs";

const Selling = () => {
  return (
    <div className=' relative'>
        <div className='pat-container'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-laila font-bold text-center mb-[56px]'>Our Best Selling Product</h1>
           
           <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[38px] xl:gap-4 2xl:gap-[38px] mb-[50px]'>
             <div className=' border border-[#D9D9D9] rounded-md p-[14px]'>
                <Image src={'/image.png'} alt='image' width={100} height={100} className='w-full'/>
                <div className='flex justify-between mt-[14px]'>
                    <h4 className='text-lg font-lora font-medium '>Pedigree Adult Complete Nutrition</h4>
                    <div className='flex text-lg font-noto font-medium gap-2'>
                    <FaStar className='mt-[3px] text-[#FFC000]'/>
                    <span className='text-[#FF6F3F]'>4.5</span>
                    </div>
                </div>
                <p className='text-base font-lora font-medium mt-2 mb-3'>Food</p>
                <div className='flex justify-between'>
                    <span className='text-[#FF6F3F] text-lg font-lora font-medium'>$120.00</span>
                    <span className='flex gap-[10px]'>
                    <div className='bg-[#F8D9CC] text-black rounded-full p-2'><BsFolder2Open className=' text-[24px]'/></div>
                    <div className='bg-[#F8D9CC] text-black rounded-full p-2'><FaRegHeart className=' text-[24px]'/></div>
                    
                    </span>
                </div>
             </div>
             
             <div className=' border border-[#D9D9D9] rounded-md  p-[14px]'>
                <Image src={'/image(2).png'} alt='image' width={100} height={100} className='w-full'/>
                <div className='flex justify-between text-lg font-medium mt-2'>
                <h4 className='text-lg font-lora font-medium'>Pedigree Adult Complete Nutrition</h4>
                <div className='flex text-lg font-noto font-medium gap-2'>
                    <FaStar className='mt-[3px] text-[#FFC000]'/>
                    <span className='text-[#FF6F3F]'>4.5</span>
                    </div>
                </div>
                <p className='text-base font-lora font-medium mt-2 mb-3'>Food</p>
                <div className='flex justify-between'>
                    <span className='text-[#FF6F3F] text-lg font-lora font-medium'>$120.00</span>
                    <span className='flex gap-[10px]'>
                    <div className='bg-[#F8D9CC] text-black rounded-full p-2'><BsFolder2Open className=' text-[24px]'/></div>
                    <div className='bg-[#F8D9CC] text-black rounded-full p-2'><FaRegHeart className=' text-[24px]'/></div>
                    
                    </span>
                </div>
             </div>
             
             <div className=' border border-[#D9D9D9]  rounded-md  p-[14px]'>
                <Image src={'/image(3).png'} alt='image' width={100} height={100} className='w-full'/>
                <div className='flex justify-between text-lg font-medium mt-2'>
                <h4 className='text-lg font-lora font-medium '>Pedigree Adult Complete Nutrition</h4>
                <div className='flex text-lg font-noto font-medium gap-2'>
                    <FaStar className='mt-[3px] text-[#FFC000]'/>
                    <span className='text-[#FF6F3F]'>4.5</span>
                    </div>
                </div>
                <p className='text-base font-lora font-medium mt-2 mb-3'>Food</p>
                <div className='flex justify-between'>
                    <span className='text-[#FF6F3F] text-lg font-lora font-medium'>$120.00</span>
                    <span className='flex gap-[10px]'>
                    <div className='bg-[#F8D9CC] text-black rounded-full p-2'><BsFolder2Open className=' text-[24px]'/></div>
                    <div className='bg-[#F8D9CC] text-black rounded-full p-2'><FaRegHeart className=' text-[24px]'/></div>
                    
                    </span>
                </div>
             </div>
             
             <div className=' border border-[#D9D9D9]  rounded-md  p-[14px]'>
                <Image src={'/image(4).png'} alt='image' width={100} height={100} className='w-full'/>
                <div className='flex justify-between text-lg font-medium mt-2'>
                <h4 className='text-lg font-lora font-medium '>Pedigree Adult Complete Nutrition</h4>
                <div className='flex text-lg font-noto font-medium gap-2'>
                    <FaStar className='mt-[3px] text-[#FFC000]'/>
                    <span className='text-[#FF6F3F]'>4.5</span>
                    </div>
                </div>
                <p className='text-base font-lora font-medium mt-2 mb-3'>Food</p>
                <div className='flex justify-between'>
                    <span className='text-[#FF6F3F] text-lg font-lora font-medium'>$120.00</span>
                    <span className='flex gap-[10px]'>
                    <div className='bg-[#F8D9CC] text-black rounded-full p-2'><BsFolder2Open className=' text-[24px]'/></div>
                    <div className='bg-[#F8D9CC] text-black rounded-full p-2'><FaRegHeart className=' text-[24px]'/></div>
                    
                    </span>
                </div>
             </div>

           </div>

           <div className='text-center mb-[122px]'>
            <button className='text-lg font-lora font-semibold px-8 py-4 border border-[#FF6F3F] text-[#FF6F3F] rounded-[40px]'>See More</button>
           </div>
        </div>

        <div className='hidden 2xl:block'>
            <Image src={'/Isolation_Mode.png'} alt='' width={100} height={100} className='w-[200px] absolute -top-[130px] right-0'/>
            <Image src={'/Isolation_Moder.png'} alt='' width={100} height={100} className='w-[200px] absolute bottom-[100px] left-0'/>
        </div>
    </div>
  )
}

export default Selling