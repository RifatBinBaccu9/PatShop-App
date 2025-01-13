import Image from "next/image"


const Services = () => {
  return (
    <div className=" relative bg-[#FFE6E4] text-black mt-[120px]">
        <div className="pat-container pt-[60px]">
          <div className="flex">
            <h1 className="text-5xl font-bold font-laila">Our services</h1>
            <div className="flex -ml-10">
              <Image src={'/Ellipse69.png'} alt="Ellipse69.png" width={100} height={100} className="w-[56px]"/>
              <Image src={'/Line1.png'} alt="Line1.png" width={100} height={100} className="w-[96px] h-2 mt-6 -ml-3"/>
            </div>
          </div>
           <p className=" text-base font-lora font-normal w-[610px] mt-6">Designed so animals can relax & indulge in pet stylists, run around our exercise yards, make new friends in doggy daycare, or simply spend hours in our dog grooming salon.</p>
        </div>
           
        <div className="flex pat-container mt-[76px]">
            <div className="">
              <div className="flex gap-3 mb-[60px] w-[470px]">

                <div>
                <div className="bg-[#F8D9CC] rounded-full relative w-[100px]">
                  <Image src={'/Graphic_Elements.png'} alt="Graphic_Elements" width={200} height={100} className=" p-2"/>
                  <Image src={'/Icon.png'} alt="Icon" width={100} height={100} className="absolute top-0 left-0 p-4"/>
                </div>
                </div>

              <div>
              <h3 className=" text-[32px] font-bold font-laila">Grooming</h3>
              <p className=" text-base font-normal font-lora mt-4">At petstick, we provide expert grooming to keep your pet healthy and well-groomed with top quality care.</p>
              </div>
              </div>
             
             
              <div className="flex gap-3 mb-[60px] w-[470px]">

                <div>
                <div className="bg-[#F8D9CC] rounded-full relative w-[100px]">
                  <Image src={'/Graphic_Elements.png'} alt="Graphic_Elements" width={200} height={100} className=" p-2"/>
                  <Image src={'/Icon1.png'} alt="Icon" width={100} height={100} className=" absolute top-0 left-0 p-4"/>
                </div>
                </div>

              <div>
              <h3 className=" text-[32px] font-bold font-laila">Training</h3>
              <p className=" text-base font-normal font-lora mt-4">At petstick, we provide expert grooming to keep your pet healthy and well-groomed with top quality care.</p>
              </div>
              </div>
             
             
              <div className="flex gap-3 mb-[60px] w-[470px]">

                <div>
                <div className="bg-[#F8D9CC] rounded-full relative w-[100px]">
                  <Image src={'/Graphic_Elements.png'} alt="Graphic_Elements" width={200} height={100} className=" p-2"/>
                  <Image src={'/Layer_1.png'} alt="Icon" width={100} height={100} className=" absolute top-0 left-0 p-4"/>
                </div>
                </div>

              <div>
              <h3 className=" text-[32px] font-bold font-laila">Pet Foods</h3>
              <p className=" text-base font-normal font-lora mt-4">At petstick, we provide expert grooming to keep your pet healthy and well-groomed with top quality care.</p>
              </div>
              </div>
             
             
            </div>


            <div className="">
            <Image src={'/golden-retriever.png'} alt="golden-retriever" width={100} height={100} className="w-[336px] h-[600px]"/>
            </div>


            <div className="">
              <div className="flex gap-3 mb-[60px] w-[470px]">

                <div>
                <div className="bg-[#F8D9CC] rounded-full relative w-[100px]">
                  <Image src={'/Graphic_Elements.png'} alt="Graphic_Elements" width={200} height={100} className=" p-2"/>
                  <Image src={'/Capa_1(1).png'} alt="Icon" width={100} height={100} className=" absolute top-0 left-0 p-4"/>
                </div>
                </div>

              <div>
              <h3 className=" text-[32px] font-bold font-laila">Veterinary</h3>
              <p className=" text-base font-normal font-lora mt-4">At petstick, we provide expert grooming to keep your pet healthy and well-groomed with top quality care.</p>
              </div>
              </div>
             
             
              <div className="flex gap-3 mb-[60px] w-[470px]">

                <div>
                <div className="bg-[#F8D9CC] rounded-full relative w-[100px]">
                  <Image src={'/Graphic_Elements.png'} alt="Graphic_Elements" width={200} height={100} className=" p-2"/>
                  <Image src={'/_x32_.png'} alt="Icon" width={100} height={100} className=" absolute top-0 left-0 p-4"/>
                </div>
                </div>

              <div>
              <h3 className=" text-[32px] font-bold font-laila">Pet’s Breeding</h3>
              <p className=" text-base font-normal font-lora mt-4">At petstick, we provide expert grooming to keep your pet healthy and well-groomed with top quality care.</p>
              </div>
              </div>
             
             
              <div className="flex gap-3 mb-[60px] w-[470px]">

                <div>
                <div className="bg-[#F8D9CC] rounded-full relative w-[100px]">
                  <Image src={'/Graphic_Elements.png'} alt="Graphic_Elements" width={200} height={100} className=" p-2"/>
                  <Image src={'/noun-pet-hotel1.png'} alt="Icon" width={100} height={100} className=" absolute top-0 left-0 p-4"/>
                </div>
                </div>

              <div>
              <h3 className=" text-[32px] font-bold font-laila">Pet Day Care</h3>
              <p className=" text-base font-normal font-lora mt-4">At petstick, we provide expert grooming to keep your pet healthy and well-groomed with top quality care.</p>
              </div>
              </div>
             
             
            </div>
        </div>

        <div className="">
          <Image src={'/cat-leg-right-white.png'} alt="cat-leg-right-white" width={100} height={100} className="w-[200px] absolute bottom-10 left-0"/>
        </div>
    </div>
  )
}

export default Services