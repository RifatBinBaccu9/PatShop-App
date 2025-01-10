import { PiWhatsappLogoLight } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";

import Image from "next/image"

const Footer = () => {
  return (
    <div className="bg-[#FFE6E4] text-black">
      <div className="flex">
        <div className="mt-[210px] me-6">
           <Image src={'/Dog-image33.png'} alt="Dog-image" width={100} height={100} className="w-[348px] h-[300px]"/>
        </div>

      <div className="w-[286px]">
        <div className='flex items-center gap-x-1 mt-[102px]'>
          <img src="/cat-leg.png" alt="" className=" w-14"/>
          <h1 className="text-[28px] font-laila font-bold text-[#FF6F3F] ">PetStick</h1>
        </div>
      
        <p className="text-base font-lora font-normal mt-12">At petstick, we offer quality products and services to keep your pet healthy and happy, with expert care from our dedicated team.</p>
      
        <div className="flex gap-4 mt-10 mb-32">
        <div className="border border-black rounded-full cursor-pointer text-sm p-2">
          <GrFacebookOption />
        </div>
        <div className=" border border-[#FF6F3F] rounded-full cursor-pointer text-sm p-2">
          <FaTwitter className="  text-[#FF6F3F] text-sm"/>
        </div>
        <div className=" border border-black rounded-full cursor-pointer text-sm p-2">
          <FaInstagram />
        </div>
        <div className=" border border-black rounded-full cursor-pointer text-sm p-2">
          <PiWhatsappLogoLight />
        </div>
        </div>
      </div>

        <div className="w-[778px]">
           <h1 className="mt-[94px] mb-8 font-laila text-[28px] font-bold ">There’s only one thing we care about, and that’s the happiness and well-being of your pets.</h1>
        </div>
      </div>
      
      {/* <div className="lg:flex lg:gap-x-10 w-10/12 md:w-[70%] mx-auto">
     
      
      <div className="w-full lg:w-[70%] mt-24">
       
      
       <div className="grid grid-cols-2 justify-center text-center sm:text-start sm:grid-cols-3 ">
        <div>
          <h3 className=" text-2xl sm:text-xl font-medium fontNoto">Quick Links</h3>
          <ul className="text-lg sm:text-base fontLora font-normal mt-3">
            <li className="mb-[2px]"><a href="#">Home</a></li>
            <li className="mb-[2px]"><a href="#">About</a></li>
            <li className="mb-[2px]"><a href="#">Shop</a></li>
            <li className="mb-[2px]"><a href="#">Services</a></li>
            <li className="mb-[2px]"><a href="#">Blog</a></li>
            <li className="mb-[2px]"><a href="#"></a></li>
          </ul>
        </div>
      
        <div>
          <h3 className="text-xl font-medium fontNoto">Support</h3>
          <ul className=" text-base fontLora font-normal mt-3">
            <li className="mb-[2px]"><a href="#">Contact Us</a></li>
            <li className="mb-[2px]"><a href="#">FAQA</a></li>
            <li className="mb-[2px]"><a href="#">Privacy Policy</a></li>
            <li className="mb-[2px]"><a href="#">Terms & Condition</a></li>
          </ul>
        </div>
      
        <div className=" sm:col-span-1 mt-8 sm:mt-0">
          <h3 className="text-xl font-medium fontNoto">Working Time</h3>
          <ul className=" text-base fontLora font-normal mt-3">
            <li className="mb-[2px]"><a href="#">Mon - Fri: 9.00am - 5.00pm</a></li>
            <li className="mb-[2px]"><a href="#">Saturday: 10.00am - 6.00pm</a></li>
            <li className="mb-[2px]"><a href="#">Sunday Closed</a></li>
          </ul>
        </div>
       </div>
      </div>
      </div>
 */}
    </div>

  )
}

export default Footer