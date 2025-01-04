

const Hero = () => {
  return (
    <div>
      <div className=' relative'>
      <img src="/bg.png" alt="" />
      
      <div className=" absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2  flex justify-between items-end w-10/12 mx-auto">
        <div className="w-[60%]">
           <h1 className="font-bold text-6xl fontLaila">Established & Trusted Pet Care Service</h1>
           <p className="font-normal text-base my-5 fontLora">At PetStick, we offer trusted and professional pet care solutions specializing in grooming,
           training, and wellness products. Our experienced team is committed to delivering
           exceptional care, ensuring the health, happiness, and well being of every pet we serve.</p>
           <button className="btnStyle">Buy Now</button>
        </div>

        <div className="w-2/5 flex justify-end">
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