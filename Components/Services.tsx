import Image from "next/image"


const Services = () => {
  return (
    <div className=" w-10/12 mx-auto my-20">
        <div>
           <Image src={'/title.png'} alt="title" width={200} height={200} className="w-64"/>
           <p className=" text-lg font-medium fontLora">Designed so animals can relax & indulge in pet stylists, run around our exercise yards, make new friends in doggy daycare, or simply spend hours in our dog grooming salon.</p>
        </div>
    </div>
  )
}

export default Services