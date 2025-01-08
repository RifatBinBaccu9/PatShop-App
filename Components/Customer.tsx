import Image from "next/image";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const Customer = () => {
  return (
    <div className="relative">
        <div className="w-10/12 mx-auto my-20">
            <div className="mb-10 w-11/12 sm:w-10/12 lg:w-1/2">
                <h1 className='text-3xl sm:text-5xl font-laila font-bold mb-3'>Some Good Word’ From Customer</h1>
                <p className='text-base font-medium'>Here's what our happy customers are saying about Petstick – trusted by pet
                owners for quality, safety, and endless fun!</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                <div>
                    <div className=" shadow-md border rounded-md p-5">
                    <div className="flex gap-2">
                    <FaStar className="text-[#FFC000]"/>
                    <FaStar className="text-[#FFC000]"/>
                    <FaStar className="text-[#FFC000]"/>
                    <FaStar className="text-[#FFC000]"/>
                    <FaRegStar />
                    </div>
                        <p className="text-base font-normal mt-3">We absolutely love the pet stick! It’s durable, safe, and our dog can't get enough of it. Whether it’s playtime or training, it has become an essential part of our routine. We highly recommend it to any pet owner looking for a high-quality, long-lasting toy for their furry friend!"</p>
                    </div>

                    <div className="flex gap-5 mt-5 w-10/12 mx-auto">
                        <div>
                            <Image src={'/man1.png'} alt="images" width={70} height={70}/>
                        </div>
                        <div>
                            <h4 className="text-lg font-laila font-bold my-1">Saifa Tazrin Rati</h4>
                            <p className="text-base font-medium">United State</p>
                        </div>
                    </div>
                </div>

                
                <div>
                    <div className=" shadow-md border rounded-md p-5">
                    <div className="flex gap-2">
                    <FaStar className="text-[#FFC000]"/>
                    <FaStar className="text-[#FFC000]"/>
                    <FaStar className="text-[#FFC000]"/>
                    <FaStar className="text-[#FFC000]"/>
                    <FaRegStar />
                    </div>
                        <p className="text-base font-normal mt-3">We absolutely love the pet stick! It’s durable, safe, and our dog can't get enough of it. Whether it’s playtime or training, it has become an essential part of our routine. We highly recommend it to any pet owner looking for a high-quality, long-lasting toy for their furry friend!"</p>
                    </div>

                    <div className="flex gap-5 mt-5 w-10/12 mx-auto">
                        <div>
                            <Image src={'/man2.png'} alt="images" width={70} height={70}/>
                        </div>
                        <div>
                            <h4 className="text-lg font-laila font-bold my-1">Murubbi Istiak</h4>
                            <p className="text-base font-medium">Bangladesh</p>
                        </div>
                    </div>
                </div>

                
                <div>
                    <div className=" shadow-md border rounded-md p-5">
                    <div className="flex gap-2">
                    <FaStar className="text-[#FFC000]"/>
                    <FaStar className="text-[#FFC000]"/>
                    <FaStar className="text-[#FFC000]"/>
                    <FaStar className="text-[#FFC000]"/>
                    <FaRegStar />
                    </div>
                        <p className="text-base font-normal mt-3">We absolutely love the pet stick! It’s durable, safe, and our dog can't get enough of it. Whether it’s playtime or training, it has become an essential part of our routine. We highly recommend it to any pet owner looking for a high-quality, long-lasting toy for their furry friend!"</p>
                    </div>

                    <div className="flex gap-5 mt-5 w-10/12 mx-auto">
                        <div>
                            <Image src={'/man3.png'} alt="images" width={70} height={70}/>
                        </div>
                        <div>
                            <h4 className="text-lg font-laila font-bold my-1">Shanti Rehman</h4>
                            <p className="text-base font-medium">Jakarta</p>
                        </div>
                    </div>
                </div>

                

            </div>
        </div>
        <div>
          <Image src={'/Isolation_Moder.png'} alt='imageing' width={100} height={100} className='absolute bottom-0 left-0'/>
        </div>
    </div>
  )
}

export default Customer