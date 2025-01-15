import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

const HealthServices = () => {
  return (
    <div className="mb-[172px] mt-[120px]">
        <div className='pat-container 2xl:flex gap-6'>
            <div className="w-full 2xl:w-[495px] mt-[40px]">
               <h1 className='text-3xl sm:text-5xl font-laila font-bold'>Health and Wellness Services</h1>
               <div className="w-full 2xl:w-[424px] mt-6">
               <p className=' text-base font-lora font-normal'>Designed so animals can relax & indulge in pet stylists, run around our exercise yards, make new friends.</p>

                <div className='flex text-lg font-laila font-semibold mt-10 mb-14 gap-10'>
                 <h3 className="text-[#FF6F3F]">For Dog</h3>
                 <h3>For Cat</h3>
                 <h3>For Others</h3>
                </div>
                
                <div className="mt-5">
                 <div className="bg-[#FF6F3F] rounded-r-lg flex justify-between text-2xl font-laila font-medium p-3 mb-6 border border-[#D9D9D9]">
                     <p>Dog Regular Checkup</p>
                     <FaArrowRightLong />
                 </div>
                 <div className="rounded-r-lg flex justify-between text-2xl font-laila font-medium p-3 mb-6 border border-[#D9D9D9]">
                     <p>Dog Dental Cear</p>
                     <FaArrowRightLong />
                 </div>
                 <div className="rounded-r-lg flex justify-between text-2xl font-laila font-medium p-3 mb-6 border border-[#D9D9D9]">
                     <p>Dog Nutrition</p>
                     <FaArrowRightLong />
                 </div>
                 <div className="rounded-r-lg flex justify-between text-2xl font-laila font-medium p-3 mb-6 border border-[#D9D9D9]">
                     <p>Dog Vaccination</p>
                     <FaArrowRightLong />
                 </div>
                </div>
                <button className="btnStyle mt-[50px]">Make an Appointment</button>
               </div>
            </div>

            <div className="w-full 2xl:w-[800px] flex justify-center items-center pt-32 2xl:mt-0">
            <div>

            <div className="flex justify-center relative mb-[86px] ">
            <div className=" border-2 border-dashed border-[#44433F] rounded-md bg-[#D0F9FF] ">
                  <div className=" py-10  pl-10 pr-10 sm:pr-20">
                  <h1 className='text-lg font-laila font-semibold'>Dog Regular Checkup</h1>
                  <hr className=" border border-[#44433F] w-[240px] mt-6 mb-4"/>
                  <p className='text-base font-lora font-normal w-[240px]'>Regular checkups keep your dog healthy and protected.</p>
                  </div>
                </div>
                  <Image src={'/Health1.png'} alt="Health1.png" width={100} height={100} className="w-[300px] absolute -top-[80px] right-1 hidden lg:block"/>
            </div>


            <div className="flex justify-start relative mb-[86px] sm:ml-[130px]">
                <div className="border-2 border-dashed border-[#44433F] rounded-md bg-[#FFE1B5]">
                  <div className=" flex justify-end pt-[50px] pb-[53px] pr-10 pl-10 sm:pl-[80px]">
                  <div>
                  <h1 className='text-lg font-laila font-semibold'>Behavioral Assessment</h1>
                  <hr className="w-[240px] border border-[#44433F] mt-[26px] mb-4"/>
                  <p className='w-[240px]'>Address any changes in behavior
                  or mobility</p>
                  </div>
                  </div>
                </div>
                  <Image src={'/Health2.png'} alt="Health1.png" width={100} height={100} className="w-[242px] h-[300px] lg:absolute -top-[50px] -left-[150px] hidden lg:block"/>
                <Image src={'/timer.png'} alt="timer" width={100} height={100} className="w-[300px] h-[187px] mt-5 ml-5 hidden lg:block"/>
            </div>


            <div className="flex justify-center relative ">
            <div className=" border-2 border-dashed border-[#44433F] rounded-md bg-[#F4E1D3] ">
                  <div className=" py-10  pl-10 pr-10 sm:pr-20">
                  <h1 className='text-lg font-laila font-semibold'>Dog Regular Checkup</h1>
                  <hr className=" border border-[#44433F] w-[240px] mt-6 mb-4"/>
                  <p className='text-base font-lora font-normal w-[240px]'>Regular checkups keep your dog healthy and protected.</p>
                  </div>
                </div>
                  <Image src={'/Health3.png'} alt="Health1.png" width={100} height={100} className="w-[300px] hidden lg:block lg:absolute -top-[80px] right-1"/>
            </div>
            
           
            </div>
            </div>
        </div>
    </div>
  )
}

export default HealthServices