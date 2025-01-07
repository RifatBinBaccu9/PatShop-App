import Image from 'next/image'
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { BsFolder2Open } from "react-icons/bs";

const Selling = () => {
  return (
    <div className=' relative'>
        <div className=' w-9/12 md:w-10/12 mx-auto my-20'>
            <h1 className=' text-3xl sm:text-5xl font-laila font-bold text-center py-10'>Our Best Selling Product</h1>
           
           <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4'>
             <div className=' border rounded-md p-3'>
                <Image src={'/image.png'} alt='image' width={100} height={100} className='w-full'/>
                <div className='flex justify-between text-lg font-medium mt-2'>
                    <h4>Pedigree adult complete nutrition</h4>
                    <div className='flex gap-1'>
                    <FaStar className='mt-0.5 text-[#FFC000]'/>
                    <span className='text-[#FF6F3F]'>4.5</span>
                    </div>
                </div>
                <p className='py-2'>Food</p>
                <div className='flex justify-between'>
                    <span className='text-[#FF6F3F]'>$120.00</span>
                    <span className='flex gap-4'>
                    <BsFolder2Open className='bg-[#FFE6E4] rounded-full p-2 text-3xl'/>
                    <FaRegHeart className='bg-[#FFE6E4] rounded-full p-2 text-3xl'/>
                    </span>
                </div>
             </div>
             
             <div className=' border rounded-md  p-3'>
                <Image src={'/image(2).png'} alt='image' width={100} height={100} className='w-full'/>
                <div className='flex justify-between text-lg font-medium mt-2'>
                    <h4>Pedigree adult complete nutrition</h4>
                    <div className='flex gap-1'>
                    <FaStar className='mt-0.5 text-[#FFC000]'/>
                    <span className='text-[#FF6F3F]'>4.5</span>
                    </div>
                </div>
                <p className='py-2'>Food</p>
                <div className='flex justify-between'>
                    <span className='text-[#FF6F3F]'>$120.00</span>
                    <span className='flex gap-4'>
                    <BsFolder2Open className='bg-[#FFE6E4] rounded-full p-2 text-3xl'/>
                    <FaRegHeart className='bg-[#FFE6E4] rounded-full p-2 text-3xl'/>
                    </span>
                </div>
             </div>
             
             <div className=' border rounded-md  p-3'>
                <Image src={'/image(3).png'} alt='image' width={100} height={100} className='w-full'/>
                <div className='flex justify-between text-lg font-medium mt-2'>
                    <h4>Pedigree adult complete nutrition</h4>
                    <div className='flex gap-1'>
                    <FaStar className='mt-0.5 text-[#FFC000]'/>
                    <span className='text-[#FF6F3F]'>4.5</span>
                    </div>
                </div>
                <p className='py-2'>Food</p>
                <div className='flex justify-between'>
                    <span className='text-[#FF6F3F]'>$120.00</span>
                    <span className='flex gap-4'>
                    <BsFolder2Open className='bg-[#FFE6E4] rounded-full p-2 text-3xl'/>
                    <FaRegHeart className='bg-[#FFE6E4] rounded-full p-2 text-3xl'/>
                    </span>
                </div>
             </div>
             
             <div className=' border rounded-md  p-3'>
                <Image src={'/image(4).png'} alt='image' width={100} height={100} className='w-full'/>
                <div className='flex justify-between text-lg font-medium mt-2'>
                    <h4>Pedigree adult complete nutrition</h4>
                    <div className='flex gap-1'>
                    <FaStar className='mt-0.5 text-[#FFC000]'/>
                    <span className='text-[#FF6F3F]'>4.5</span>
                    </div>
                </div>
                <p className='py-2'>Food</p>
                <div className='flex justify-between'>
                    <span className='text-[#FF6F3F]'>$120.00</span>
                    <span className='flex gap-4'>
                    <BsFolder2Open className='bg-[#FFE6E4] rounded-full p-2 text-3xl'/>
                    <FaRegHeart className='bg-[#FFE6E4] rounded-full p-2 text-3xl'/>
                    </span>
                </div>
             </div>
             
            
             


           </div>
        </div>

        <div>
            <Image src={'/Isolation_Mode.png'} alt='' width={100} height={100} className=' absolute top-0 right-0'/>
            <Image src={'/Isolation_Moder.png'} alt='' width={100} height={100} className=' absolute bottom-0 left-0'/>
        </div>
    </div>
  )
}

export default Selling