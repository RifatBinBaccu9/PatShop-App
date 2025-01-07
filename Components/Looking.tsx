import Image from 'next/image'

const Looking = () => {
  return (
    <div className=' relative bg-[#FFE6E4] py-20 '>
        <div className='w-11/12 sm:w-10/12 md:w-11/12 lg:w-10/12 mx-auto'>
            <div>
                <h1 className=' text-4xl sm:text-5xl font-laila font-bold'>What Are You Looking For?</h1>
                <p className=' text-lg font-medium w-11/12 md:w-4/5 mt-5 mb-10'>We offer long-term and short-term boarding. Every dog has its own private, spacious
                room and daily individual time in our large play yard.</p>
            </div>

             <div className='sm:grid sm:grid-cols-2 md:grid-cols-4 gap-10  justify-center w-3/5 mx-auto sm:mx-0 sm:w-full '>
                <div className='bg-[#FADDD4] rounded-full relative mb-10 sm:mb-0'>
                    <Image src={'/cat-leg-center.png'} alt='cat-leg' width={100} height={100} className='p-5 w-full'/>
                    <Image src={'/image20.png'} alt='image20' width={100} height={100} className='p-8 w-full absolute top-0 left-0'/>

                </div>
                
                <div className='bg-[#FADDD4] rounded-full relative mb-10 sm:mb-0'>
                    <Image src={'/cat-leg-center.png'} alt='cat-leg' width={100} height={100} className='p-5 w-full'/>
                    <Image src={'/image22.png'} alt='image22' width={100} height={100} className='p-8 w-full absolute top-0 left-0'/>

                </div>
                
                <div className='bg-[#FADDD4] rounded-full relative mb-10 sm:mb-0'>
                    <Image src={'/cat-leg-center.png'} alt='cat-leg' width={100} height={100} className='p-5 w-full'/>
                    <Image src={'/image24.png'} alt='image24' width={100} height={100} className='p-8 w-full absolute top-0 left-0'/>

                </div>
                
                <div className='bg-[#FADDD4] rounded-full relative mb-10 sm:mb-0'>
                    <Image src={'/cat-leg-center.png'} alt='cat-leg' width={100} height={100} className='p-5 w-full'/>
                    <Image src={'/image27.png'} alt='image27' width={100} height={100} className='p-8 w-full absolute top-0 left-0'/>

                </div>
                
                
             </div>

        </div>

        <div>
            <Image src={'/cat-leg-right-white.png'} alt='cat-leg-right-white' width={100} height={100} className=' absolute bottom-0 left-0 hidden sm:block sm:w-1/5 md:w-[10%]'/>
        </div>
    </div>
  )
}

export default Looking