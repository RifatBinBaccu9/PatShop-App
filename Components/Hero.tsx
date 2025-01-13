import Image from "next/image"


const Hero = () => {
  return (
    <div>
      <div  className=" relative w-full flex items-center justify-center bg-cover bg-center h-[550px] md:h-[600px] lg:h-[700px] xl:h-[800px] 2xl:h-[988px]"
        style={{ backgroundImage: "url('/bg-removebg-preview.png')" }}>

       <div className="">
        <div className="pat-container flex justify-between items-center mx-auto gap-[106px]">
        <div className="w-full sm:w-11/12 md:w-10/12 lg:w-3/5 2xl:w-[903px]">
           <h1 className="font-bold text-3xl md:text-5xl 2xl:text-[64px] font-laila mb-6">Established & Trusted Pet Care Service</h1>
           <p className="font-normal text-base  font-lora mb-12">At PetStick, we offer trusted and professional pet care solutions specializing in grooming,
           training, and wellness products. Our experienced team is committed to delivering
           exceptional care, ensuring the health, happiness, and well being of every pet we serve.</p>
           <button className="btnStyle">Buy Now</button>
        </div>

        <div className="bg-[#FADDD4] w-[350px] xl:w-2/5 2xl:w-[609px] h-[100%] rounded-full hidden lg:block relative">
          <img src="/cat-leg-center.png" alt="" className=" w-full h-full p-10"/>
          <img src="/pat-image.png" alt="" className=" absolute top-5 left-0 w-[610px] h-[400px] xl:h-[500px] 2xl:h-[624px]"/>
        </div>
        </div>
      </div>

      <div className=" hidden 2xl:block">
        <Image src={'/Isolation_Mode66.png'} alt="Isolation_Moder" width={100} height={100} className="w-[200px] absolute -top-[70px] right-0"/>
        <Image src={'/cat-leg-right-white.png'} alt="Isolation_Moder" width={100} height={100} className="w-[200px] absolute bottom-96 left-0"/>
      </div>
      </div>

      

    </div>
  )
}

export default Hero