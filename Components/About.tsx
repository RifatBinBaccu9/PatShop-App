import Image from 'next/image'

const About = () => {
  return (
    <div className=' relative  mt-[120px]  bg-white text-black'>
     <div  className='pat-container'>
     <div className=' text-center'>
      <h1 className='text-5xl font-bold font-laila mb-6'>Features Categories</h1>
      <p className=' text-base font-normal font-lora w-[468px] mx-auto '>At petstick, access pet listings, shop easily, and book grooming,
      vet visits, and training all through personalized profiles.</p>
     </div>

     <div className=''>
      <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-items-center gap-14 2xl:gap-20 text-center mt-10'>

        <div className='w-[200px] mx-auto'>
          <div className=' bg-[#FADDD4] w-[200px] rounded-full relative overflow-hidden'>
          <Image src={'/cat-leg-center.png'} alt='cat-leg-center' width={32} height={32} className='w-full p-4 '/>
          
          <Image src={'/beautiful-pet-portrait-dog2.png'} alt='beautiful-per-portrait' width={100} height={100} className='w-full h-[200px] absolute top-0 left-0 p-6'/>

          </div>
          <p className='text-lg font-bold font-noto mt-7'>German Breed
          Alsatian  Puppies </p>
        </div>


        <div className='w-[200px] mx-auto'>
          <div className='bg-[#FADDD4] w-[200px] rounded-full relative overflow-hidden'>
          <Image src={'/cat-leg-center.png'} alt='cat-leg-center' width={32} height={32} className='w-full p-4 '/>
          
          <Image src={'/image10.png'} alt='beautiful-per-portrait' width={100} height={100} className='w-full h-[200px] absolute top-0 left-0 p-6'/>

          </div>
          <p className=' text-lg font-bold font-noto mt-7'>Leaving bed
          for Puppies</p>
        </div>


        <div className='w-[200px] mx-auto'>
          <div className='bg-[#FADDD4] w-[200px] rounded-full relative overflow-hidden'>
          <Image src={'/cat-leg-center.png'} alt='cat-leg-center' width={32} height={32} className='w-full p-4 '/>
          
          <Image src={'/Beautiful-ginger-kitten.png'} alt='beautiful-per-portrait' width={100} height={100} className='w-full h-[200px] absolute top-0 left-0 p-6'/>

          </div>
          <p className=' text-lg font-bold font-noto mt-7'>Cat Food </p>
        </div>


        <div className='w-[200px] mx-auto'>
          <div className='bg-[#FADDD4] w-[200px] rounded-full relative overflow-hidden'>
          <Image src={'/cat-leg-center.png'} alt='cat-leg-center' width={32} height={32} className='w-full p-4 '/>
          
          <Image src={'/Mask-group.png'} alt='beautiful-per-portrait' width={100} height={100} className='w-full h-[200px] absolute top-0 left-0 p-6'/>

          </div>
          <p className=' text-lg font-bold font-noto mt-7'>Pet’s Clothes </p>
        </div>


        <div className='w-[200px] mx-auto'>
          <div className='bg-[#FADDD4] w-[200px] rounded-full relative overflow-hidden'>
          <Image src={'/cat-leg-center.png'} alt='cat-leg-center' width={100} height={100} className='w-full p-4 '/>
          
          <Image src={'/pngwing4.png'} alt='beautiful-per-portrait' width={100} height={100} className=' w-full h-[200px] absolute top-0 left-0 p-6'/>

          </div>
          <p className=' text-lg font-bold font-noto mt-7'>Nick Belts
          for Puppies </p>
        </div>

      </div>
     </div>
     </div>

     <div className=''>
     <Image src={'/Isolation_Mode.png'} alt='Isolation_Mode' width={100} height={100} className='hidden lg:block lg:w-[150px] 2xl:w-[200px] absolute -top-20 2xl:-top-[150px] right-0'/>
     </div>
    </div>
  )
}

export default About