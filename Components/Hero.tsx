

const Hero = () => {
  return (
    <div>
      <div className=' relative'>
      <img src="/bg.png" alt="" className="w-full h-[300px] md:h-[550px] lg:h-full"/>
      
      <div className="flex md:flex  md:flex-row flex-col-reverse justify-between items-end md:absolute md:top-[35%] md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2  w-10/12 mx-auto">
        <div className=" md:w-1/2 lg:w-[60%]">
           <h1 className="font-bold text-4xl lg:text-6xl fontLaila">Established & Trusted Pet Care Service</h1>
           <p className="font-normal text-base my-5 fontLora">At PetStick, we offer trusted and professional pet care solutions specializing in grooming,
           training, and wellness products. Our experienced team is committed to delivering
           exceptional care, ensuring the health, happiness, and well being of every pet we serve.</p>
           <button className="btnStyle">Buy Now</button>
        </div>

        <div className="  w-1/2 lg:w-2/5 flex justify-center md:justify-end md:items-end">
        <div className="bg-[#FADDD4] w-10/12 h-[100%] rounded-full relative">
          <img src="/cat-leg-center.png" alt="" className=" w-full h-full p-10"/>
          <img src="/pat-image.png" alt="" className=" absolute top-5 left-0"/>
        </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Hero