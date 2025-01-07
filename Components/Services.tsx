import Image from "next/image"


const Services = () => {
  return (
    <div className=" relative bg-[#FFE6E4] py-10">
        <div className=" w-10/12 mx-auto my-20">
           <Image src={'/title.png'} alt="title" width={100} height={100} className="w-80"/>
           <p className=" text-lg font-medium fontLora w-11/12 md:w-[70%] lg:w-1/2 mt-3">Designed so animals can relax & indulge in pet stylists, run around our exercise yards, make new friends in doggy daycare, or simply spend hours in our dog grooming salon.</p>
        </div>
           
        <div className="md:flex w-10/12 gap-5 mx-auto mb-10">
            <div className="sm:w-11/12 md:w-1/2 lg:w-2/5 mx-auto">
              <div className="flex gap-x-2 mb-10">
              <div>
                <div className="bg-[#F8D9CC] rounded-full relative">
                  <Image src={'/Graphic_Elements.png'} alt="Graphic_Elements" width={200} height={100} className=" p-2"/>
                  <Image src={'/Icon.png'} alt="Icon" width={100} height={100} className=" absolute top-0 left-0 p-3"/>
                </div>
              </div>

              <div>
              <h3 className=" text-3xl font-bold font-laila">Grooming</h3>
              <p className=" text-base font-medium mt-2">At petstick, we provide expert grooming to keep your pet healthy and well-groomed with top quality care.</p>
              </div>
              </div>
             
              
              <div className="flex gap-x-2 mb-10">
              <div>
                <div className="bg-[#F8D9CC] rounded-full relative">
                  <Image src={'/Graphic_Elements.png'} alt="Graphic_Elements" width={200} height={100} className=" p-2"/>
                  <Image src={'/Icon1.png'} alt="Icon1" width={100} height={100} className=" absolute top-0 left-0 p-3"/>
                </div>
              </div>

              <div>
              <h3 className=" text-3xl font-bold font-laila">Training</h3>
              <p className=" text-base font-medium mt-2">At petstick, we provide expert grooming to keep your pet healthy and well-groomed with top quality care.</p>
              </div>
              </div>
             
              
              <div className="flex gap-x-2 mb-10">
              <div>
                <div className="bg-[#F8D9CC] rounded-full relative">
                  <Image src={'/Graphic_Elements.png'} alt="Graphic_Elements" width={200} height={100} className=" p-2"/>
                  <Image src={'/Layer_1.png'} alt="Layer_1" width={100} height={100} className=" absolute top-0 left-0 p-3"/>
                </div>
              </div>

              <div>
              <h3 className=" text-3xl font-bold font-laila">Pet Foods</h3>
              <p className=" text-base font-medium mt-2">At petstick, we provide expert grooming to keep your pet healthy and well-groomed with top quality care.</p>
              </div>
              </div>
             
            </div>


            <div className="lg:w-1/5 hidden lg:block">
            <Image src={'/golden-retriever.png'} alt="golden-retriever" width={200} height={200} className="h-[100%]"/>
            </div>


            <div className="sm:w-11/12 md:w-1/2 lg:w-2/5 mx-auto">
              <div className="flex gap-x-2 mb-10">
              <div>
                <div className="bg-[#F8D9CC] rounded-full relative">
                  <Image src={'/Graphic_Elements.png'} alt="Graphic_Elements" width={200} height={100} className=" p-2"/>
                  <Image src={'/Capa_1(1).png'} alt="Capa_1(1)" width={100} height={100} className=" absolute top-0 left-0 p-3"/>
                </div>
              </div>

              <div>
              <h3 className=" text-3xl font-bold font-laila">Veterinary</h3>
              <p className=" text-base font-medium mt-2">At petstick, we provide expert grooming to keep your pet healthy and well-groomed with top quality care.</p>
              </div>
              </div>
             
              
              <div className="flex gap-x-2 mb-10">
              <div>
                <div className="bg-[#F8D9CC] rounded-full relative">
                  <Image src={'/Graphic_Elements.png'} alt="Graphic_Elements" width={200} height={100} className=" p-2"/>
                  <Image src={'/_x32_.png'} alt="_x32_" width={100} height={100} className=" absolute top-0 left-0 p-3"/>
                </div>
              </div>

              <div>
              <h3 className=" text-3xl font-bold font-laila">Pet’s breeding</h3>
              <p className=" text-base font-medium mt-2">At petstick, we provide expert grooming to keep your pet healthy and well-groomed with top quality care.</p>
              </div>
              </div>
             
              
              <div className="flex gap-x-2 mb-10">
              <div>
                <div className="bg-[#F8D9CC] rounded-full relative">
                  <Image src={'/Graphic_Elements.png'} alt="Graphic_Elements" width={200} height={100} className=" p-2"/>
                  <Image src={'/noun-pet-hotel1.png'} alt="noun-pet-hotel1" width={100} height={100} className=" absolute top-0 left-0 p-3"/>
                </div>
              </div>

              <div>
              <h3 className=" text-3xl font-bold font-laila">Pet day care</h3>
              <p className=" text-base font-medium mt-2">At petstick, we provide expert grooming to keep your pet healthy and well-groomed with top quality care.</p>
              </div>
              </div>
             
            </div>
        </div>

        <div className="">
          <Image src={'/cat-leg-right-white.png'} alt="cat-leg-right-white" width={100} height={100} className=" absolute bottom-10 left-0"/>
        </div>
    </div>
  )
}

export default Services