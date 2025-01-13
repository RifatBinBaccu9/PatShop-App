import { PiWhatsappLogoLight } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="bg-[#FFE6E4] py-14 relative">
      <div className="lg:flex lg:gap-x-10 w-10/12 md:w-[70%] mx-auto">
        <div className="w-11/12 mx-auto sm:mx-0 sm:w-2/3 lg:w-[30%] mb-10 lg:mb-0">
          <div className='flex gap-x-2 mb-8 lg:mb-16'>
            <img src="/cat-leg.png" alt="" className=" w-8"/>
            <h1 className="text-3xl lg:text-2xl font-bold text-[#FF6F3F] font-laila ">PetStick</h1>
          </div>

          <p className=" text-center  sm:text-start text-lg lg:text-base font-lora font-normal mb-5">At petstick, we offer quality products and services to keep your pet healthy and happy, with expert care from our dedicated team.</p>

          <div className="flex gap-x-3 justify-center sm:justify-start">
          <GrFacebookOption className=" cursor-pointer text-[#FF6F3F] text-4xl border border-[#FF6F3F] rounded-full p-2"/>
          <FaTwitter className=" cursor-pointer text-4xl border border-black rounded-full p-2"/>
          <FaInstagram className=" cursor-pointer text-4xl border border-black rounded-full p-2"/>
          <PiWhatsappLogoLight className=" cursor-pointer text-4xl border border-black rounded-full p-2"/>
          </div>
        </div>

        <div className="w-full lg:w-[70%]">
         <h1 className=" text-center sm:text-start mb-8 fontLaila text-2xl font-bold w-[95%] lg:w-full">There’s only one thing we care about, and that’s the happiness and well-being of your pets.</h1>

         <div className="grid grid-cols-2 justify-center text-center sm:text-start sm:grid-cols-3 ">
          <div>
            <h3 className=" text-2xl sm:text-xl font-medium font-noto">Quick Links</h3>
            <ul className="text-lg sm:text-base font-laila font-normal mt-3">
              <li className="mb-[2px]"><a href="#">Home</a></li>
              <li className="mb-[2px]"><a href="#">About</a></li>
              <li className="mb-[2px]"><a href="#">Shop</a></li>
              <li className="mb-[2px]"><a href="#">Services</a></li>
              <li className="mb-[2px]"><a href="#">Blog</a></li>
              <li className="mb-[2px]"><a href="#"></a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium font-noto">Support</h3>
            <ul className=" text-base font-lora font-normal mt-3">
              <li className="mb-[2px]"><a href="#">Contact Us</a></li>
              <li className="mb-[2px]"><a href="#">FAQA</a></li>
              <li className="mb-[2px]"><a href="#">Privacy Policy</a></li>
              <li className="mb-[2px]"><a href="#">Terms & Condition</a></li>
            </ul>
          </div>

          <div className=" sm:col-span-1 mt-8 sm:mt-0">
            <h3 className="text-xl font-medium font-noto">Working Time</h3>
            <ul className=" text-base font-lora font-normal mt-3">
              <li className="mb-[2px]"><a href="#">Mon - Fri: 9.00am - 5.00pm</a></li>
              <li className="mb-[2px]"><a href="#">Saturday: 10.00am - 6.00pm</a></li>
              <li className="mb-[2px]"><a href="#">Sunday Closed</a></li>
            </ul>
          </div>
         </div>
        </div>
      </div>
      <img src="/Dog-image33.png" alt="" className=" absolute bottom-16 sm:bottom-[350px] md:bottom-[400px] lg:bottom-0 right-10 md:right-[100px] lg:left-0 w-1/3 md:w-[20%] lg:w-[14%]"/>
    </div>
  )
}

export default Footer