import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

const HealthServices = () => {
  return (
    <div className="py-30">
        <div className='w-11/12 sm:w-8/12 md:w-10/12 mx-auto lg:flex gap-10'>
            <div className=" lg:w-[45%]">
               <h1 className='text-3xl sm:text-5xl font-laila font-bold mb-3'>Health and Wellness Services</h1>
               <div className="lg:w-10/12 ">
               <p className='text-base font-medium'>Designed so animals can relax & indulge in pet stylists, run around our exercise yards, make new friends.</p>

                <div className='flex gap-8 text-lg font-laila font-semibold mt-5'>
                 <h3>For Dog</h3>
                 <h3>For Cat</h3>
                 <h3>For Others</h3>
                </div>
                
                <div className="mt-5">
                 <div className="bg-[#FF6F3F] rounded-sm flex justify-between border p-3 text-2xl font-laila font-medium mb-3">
                     <p>Dog Regular Checkup</p>
                     <FaArrowRightLong />
                 </div>
                 <div className="flex justify-between rounded-sm border p-3 text-2xl font-laila font-medium mb-3">
                     <p>Dog Dental Cear</p>
                     <FaArrowRightLong />
                 </div>
                 <div className="flex justify-between rounded-sm border p-3 text-2xl font-laila font-medium mb-3">
                     <p>Dog Nutrition</p>
                     <FaArrowRightLong />
                 </div>
                 <div className="flex justify-between rounded-sm border p-3 text-2xl font-laila font-medium mb-3">
                     <p>Dog Vaccination</p>
                     <FaArrowRightLong />
                 </div>
                </div>
                <button className="btnStyle mt-5">Make an Appointment</button>
               </div>
            </div>

            <div className="lg:w-[55%] flex justify-center mt-20 lg:mt-0">
            <div>
            <div className="flex justify-center mb-16 relative">
            <div className="w-full sm:w-[65%] border-2 border-dashed rounded-md bg-[#F4E1D3] p-3 sm:p-5 ">
                  <div className="w-full sm:w-11/12  ">
                  <h1 className='text-lg font-laila font-semibold'>Dog Regular Checkup</h1>
                  <hr className=" border my-2 w-11/12"/>
                  <p className=''>Regular checkups keep your dog healthy and protected.</p>
                  </div>
                </div>
                  <Image src={'/Health1.png'} alt="Health1.png" width={100} height={100} className="w-[35%] sm:absolute sm:-top-7 sm:-right-8"/>
            </div>
            <div className="flex justify-start mb-16 relative">
                <div className="w-full sm:w-[65%] border-2 flex justify-end border-dashed rounded-md bg-[#FFE1B5] p-3 sm:p-5 ">
                  <div className="w-full sm:w-[80%]  flex justify-end">
                  <div>
                  <h1 className='text-lg font-laila font-semibold'>Behavioral Assessment</h1>
                  <hr className=" border my-2 w-11/12"/>
                  <p className=''>Address any changes in behavior
                  or mobility</p>
                  </div>
                  </div>
                </div>
                  <Image src={'/Health2.png'} alt="Health1.png" width={100} height={100} className="w-[30%] sm:absolute sm:-top-7 sm:-left-20"/>
                <Image src={'/timer.png'} alt="timer" width={100} height={100} className="w-1/3 h-[100px] mt-5 hidden sm:block"/>
            </div>
            <div className="flex justify-center mb-16 relative">
                <div className="w-full sm:w-[65%] border-2 border-dashed rounded-md bg-[#F4E1D3] p-3 sm:p-5 ">
                  <div className="w-full sm:w-11/12  ">
                  <h1 className='text-lg font-laila font-semibold'>Dog Day Care Trips</h1>
                  <hr className=" border my-2 w-11/12"/>
                  <p className=''>Monitor weight and adjust diet
                  if needed.</p>
                  </div>
                </div>
                  <Image src={'/Health3.png'} alt="Health1.png" width={100} height={100} className="w-[35%] sm:absolute sm:-top-7 sm:-right-8"/>
            </div>
            
           
            </div>
            </div>
        </div>
    </div>
  )
}

export default HealthServices