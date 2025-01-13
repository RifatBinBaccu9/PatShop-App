

const Hero = () => {
  return (
    <div>
      <div  className="flex items-center justify-center bg-cover bg-center h-[988px] rounded-xl"
        style={{ backgroundImage: "url('/bg-removebg-preview.png')" }}>

       <div className="">
        <div className="container flex justify-between items-center mx-auto gap-[106px]">
        <div className="w-[703px] ">
           <h1 className="font-bold text-[64px] font-laila mb-6">Established & Trusted Pet Care Service</h1>
           <p className="font-normal text-base  font-lora mb-12">At PetStick, we offer trusted and professional pet care solutions specializing in grooming,
           training, and wellness products. Our experienced team is committed to delivering
           exceptional care, ensuring the health, happiness, and well being of every pet we serve.</p>
           <button className="btnStyle">Buy Now</button>
        </div>

        <div className="bg-[#FADDD4] w-[609px] h-[100%] rounded-full relative">
          <img src="/cat-leg-center.png" alt="" className=" w-full h-full p-10"/>
          <img src="/pat-image.png" alt="" className=" absolute top-5 left-0 w-[610px] h-[624px]"/>
        </div>
        </div>
      </div>
      </div>

      

    </div>
  )
}

export default Hero