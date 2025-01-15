import Image from 'next/image'

const Looking = () => {
  return (
    <div className=' relative bg-[#FFE6E4] text-black py-[60px] '>
        <div className='pat-container'>
            <div>
                <h1 className='text-3xl text-center md:text-start md:text-5xl font-laila font-bold pt-[60px] pb-6'>What Are You Looking For?</h1>
                <p className=' text-base font-normal font-lora text-center md:text-start w-full md:w-[634px] mb-[60px]'>We offer long-term and short-term boarding. Every dog has its own private, spacious
                room and daily individual time in our large play yard.</p>
            </div>

             <div className='grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 w-full gap-10'>
                <div className=''>
               <div className='w-full flex justify-center'>
               <div className='bg-[#FADDD4] rounded-full relative overflow-hidden w-[300px] h-[300px]'>
                    <Image src={'/cat-leg-center.png'} alt='cat-leg' width={100} height={100} className='p-2 w-full'/>
                    <div className='flex justify-center w-[300px] h-[300px] absolute bottom-0 left-0 pt-5 '>
                    <Image src={'/image20.png'} alt='image20' width={100} height={100} className='w-[264px] '/>
                    </div>

                </div>
               </div>
                <div className=' text-center '>
                <h3 className=' text-[28px] font-laila font-bold mt-6 mb-3'>Find Puppies</h3>
                <p className=' text-base font-normal font-lora'>Find responsibly bred purebred
                Bully puppies.</p>
                </div>
                </div>
                
                <div className=''>
                <div className='w-full flex justify-center'>
                <div className='bg-[#FADDD4] rounded-full relative overflow-hidden w-[300px] h-[300px]'>
                    <Image src={'/cat-leg-center.png'} alt='cat-leg' width={100} height={100} className='p-2 w-full'/>
                    <div className='flex justify-center w-[300px] h-[300px] absolute bottom-0 left-0 pt-5 '>
                    <Image src={'/image22.png'} alt='image20' width={100} height={100} className='w-[264px] '/>
                    </div>

                </div>
                </div>
                <div className=' text-center '>
                <h3 className='text-[28px] font-laila font-bold mt-6 mb-3'>Find groomers</h3>
                <p className=' text-base font-normal font-lora'>Find responsibly bred purebred
                Bully puppies.</p>
                </div>
                </div>
                
               <div className=''>
               <div className='w-full flex justify-center'>
               <div className='bg-[#FADDD4] rounded-full relative overflow-hidden w-[300px] h-[300px]'>
                    <Image src={'/cat-leg-center.png'} alt='cat-leg' width={100} height={100} className='p-2 w-full'/>
                    <div className='flex justify-center w-[300px] h-[300px] absolute bottom-0 left-0 pt-5 '>
                    <Image src={'/image24.png'} alt='image20' width={100} height={100} className='w-[264px] '/>
                    </div>

                </div>
                </div>
                <div className=' text-center'>
                <h3 className='text-[28px] font-laila font-bold mt-6 mb-3'>Find trainer</h3>
                <p className=' text-base font-normal font-lora'>Find responsibly bred purebred
                Bully puppies.</p>
                </div>
               </div>
                
                <div className=''>
                <div className='w-full flex justify-center'>
                <div className='bg-[#FADDD4] rounded-full relative overflow-hidden w-[300px] h-[300px]'>
                    <Image src={'/cat-leg-center.png'} alt='cat-leg' width={100} height={100} className='p-2 w-full'/>
                    <div className='flex justify-center w-[300px] h-[300px] absolute bottom-0 left-0 pt-5 '>
                    <Image src={'/image27.png'} alt='image20' width={100} height={100} className='w-[264px] '/>
                    </div>

                </div>
                </div>
                <div className=' text-center'>
                <h3 className='text-[28px] font-laila font-bold mt-6 mb-3'>Find vet doctor</h3>
                <p className=' text-base font-normal font-lora'>Find responsibly bred purebred
                Bully puppies.</p>
                </div>
                </div>
             </div>

        </div>

        <div className='hidden 2xl:block'>
            <Image src={'/cat-leg-right-white.png'} alt='cat-leg-right-white' width={100} height={100} className=' absolute bottom-0 left-0 w-[200px]'/>
        </div>
    </div>
  )
}

export default Looking