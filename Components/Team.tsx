import Image from "next/image"


const Team = () => {
  return (
    <div className="relative">
        <div className='bg-[#FFE6E4] pb-10 '>
                <div className=' w-9/12 md:w-10/12 mx-auto my-20'>
                <h1 className=' text-3xl sm:text-5xl font-laila font-bold text-center pt-10'>Our Team</h1>
                   <p className='pt-4 pb-10 text-lg font-medium w-full sm:w-3/5 lg:w-[45%] mx-auto text-center'>Meet our dedicated team, passionate about providing
                   the best care for your pets!.</p>
                  
                   <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4'>
                     <div className=' border rounded-md p-3'>
                        <Image src={'/dogc1.png'} alt='image' width={100} height={100} className='w-full'/>
                        <div className=' text-lg font-medium mt-2'>
                            <h4 className=" text-xl font-bold font-laila">Dr. sania mirza</h4>
                             <p className='py-1 text-lg font-semibold'>Doctor</p>
                        </div>
                     </div>
                     <div className=' border rounded-md p-3'>
                        <Image src={'/dogc2.png'} alt='image' width={100} height={100} className='w-full'/>
                        <div className=' text-lg font-medium mt-2'>
                        <h4 className=" text-xl font-bold font-laila">Murubbi William</h4>
                        <p className='py-1 text-lg font-semibold'>Doctor</p>
                        </div>
                     </div>
                     <div className=' border rounded-md p-3'>
                        <Image src={'/dogc3.png'} alt='image' width={100} height={100} className='w-full'/>
                        <div className=' text-lg font-medium mt-2'>
                         <h4 className=" text-xl font-bold font-laila">Dipto biswas</h4>
                        <p className='py-1 text-lg font-semibold'>Dog trainer</p>
                        </div>
                     </div>
                     <div className=' border rounded-md p-3'>
                        <Image src={'/dogc4.png'} alt='image' width={100} height={100} className='w-full'/>
                        <div className=' text-lg font-medium mt-2'>
                        <h4 className=" text-xl font-bold font-laila">Liton nandi das</h4>
                        <p className='py-1 text-lg font-semibold'>Doctor</p>
                        </div>
                     </div>
                     
                     </div>
                   </div>
                </div>
        
                <div>
                    <Image src={'/Isolation_Mode66.png'} alt='' width={100} height={100} className=' absolute top-0 right-0'/>
                </div>
            </div>
  )
}

export default Team