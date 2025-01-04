import Image from "next/image"
import { FaChevronDown } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="max-w-screen-lg mx-auto flex justify-between my-5">
       <div className="flex items-center gap-x-3">
        <Image src={"/cat-leg.png"} alt="cat-leg" width={26} height={26} className=""/>
        <h1 className="text-2xl fontLaila text-[#FF6F3F]">PetStick</h1>
       </div>
        
        <div className="flex items-center">
            <ul className="flex gap-x-3 text-lg fontLora font-medium">
                <li><a href="#" className="flex gap-x-2 text-[#FF6F3F] hover:text-green-400 hover:font-extrabold"><span>Home</span><FaChevronDown className="mt-1.5"/></a></li>
                <li><a href="#" className=" hover:text-green-400 hover:font-extrabold">Pets</a></li>
                <li><a href="#" className=" hover:text-green-400 hover:font-extrabold">Service</a></li>
                <li><a href="#" className=" hover:text-green-400 hover:font-extrabold">Shop</a></li>
                <li><a href="#" className=" hover:text-green-400 hover:font-extrabold">Experts</a></li>
                <li><a href="#" className="flex gap-x-2 hover:text-green-400 hover:font-extrabold"><span>More</span><FaChevronDown className="mt-1.5" /></a></li>
            </ul>
        </div>

        <div className="flex items-center gap-x-10">
            <div className="flex gap-x-3 text-xl">
            <FiHeart />
            <FiShoppingCart />
            <FaRegUser />
            </div>
            
            <button className="btnStyle ">Register</button>
        </div>
    </div>
    
  )
}

export default Navbar