import Image from "next/image"
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="bg-[#FFE6E4] text-black">
     <div className="w-11/12 sm:container mx-auto flex justify-between py-8">
     <div className="flex items-center gap-x-3">
        <Image src={"/cat-leg.png"} alt="cat-leg" width={26} height={26} className="w-10 h-10"/>
        <h1 className="text-[28px] font-laila font-bold text-[#FF6F3F]">PetStick</h1>
       </div>
        
        <div className="hidden lg:flex items-center ">
            <ul className="flex gap-x-8 text-lg font-semibold font-lora">
                <li className="text-[#FF6F3F] hover:text-[#FF6F3F]"><Link href="/" className="flex gap-x-2"><span>Home</span><FaChevronDown className="mt-1.5"/></Link></li>
                <li><Link href="#" className="hover:text-[#FF6F3F]">Pets</Link></li>
                <li><Link href="#" className="hover:text-[#FF6F3F]">Service</Link></li>
                <li><Link href="#" className="hover:text-[#FF6F3F]">Shop</Link></li>
                <li><Link href="#" className="hover:text-[#FF6F3F]">Experts</Link></li>
                <li><Link href="#" className="hover:text-[#FF6F3F] flex gap-x-2"><span>More</span><FaChevronDown className="mt-1.5" /></Link></li>
            </ul>
        </div>

        <div className=" xl:flex items-center gap-16 hidden">
            <div className="flex gap-x-3 text-2xl">
            <FiHeart />
            <FiShoppingCart />
            <FaRegUser />
            </div>
            
            <button className="btnStyle hover:bg-yellow-700 hover:text-black">Register</button>
        </div>

        <div className="flex items-center text-5xl xl:hidden">
           <IoMenu />
        </div>
     </div>
    </div>
    
  )
}

export default Navbar