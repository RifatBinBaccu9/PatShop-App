import Image from 'next/image'

const About = () => {
  return (
    <div className=' relative  text-center my-20  '>
     <div  className='w-10/12 mx-auto'>
     <div>
      <h1 className=' text-3xl sm:text-5xl font-bold fontLaila '>Features Categories</h1>
      <p className=' text-lg font-medium fontLora w-11/12 sm:w-10/12 md:w-9/12 lg:w-[55%] my-4 mx-auto'>At petstick, access pet listings, shop easily, and book grooming,
      vet visits, and training all through personalized profiles.</p>
     </div>

     <div className=' w-10/12 md:w-full mx-auto mt-8 mb-[300px] sm:mb-16 md:mb-7 '>
      <div className='grid grid-row-5 justify-center sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-5 gap-x-[10%] gap-y-[4%] md:gap-[5%] lg:gap-[7%]'>

        <div className=' relative'>
          <div className='bg-[#FADDD4] w-full  rounded-full mb-3'>
          <Image src={'/cat-leg-center.png'} alt='cat-leg-center' width={32} height={32} className='w-full p-5 '/>
          
          <Image src={'/beautiful-pet-portrait-dog2.png'} alt='beautiful-per-portrait' width={80} height={80} className=' w-8/12 absolute top-5 left-10 lg:left-6'/>

          </div>
          <p className=' text-lg font-medium fontNoto'>German Breed Alsatian  Puppies </p>
        </div>


        <div className=' relative '>
          <div className='bg-[#FADDD4] w-full mb-3  rounded-full'>
          <Image src={'/cat-leg-center.png'} alt='cat-leg-center' width={32} height={32} className='w-full p-5 '/>
          
          <Image src={'/image10.png'} alt='beautiful-per-portrait' width={80} height={80} className=' w-8/12 absolute top-16 left-10 lg:left-6'/>

          </div>
          <p className=' text-lg font-medium fontNoto'>Leaving bed
          for Puppies</p>
        </div>


        <div className=' relative '>
          <div className='bg-[#FADDD4] w-full  mb-3 rounded-full'>
          <Image src={'/cat-leg-center.png'} alt='cat-leg-center' width={32} height={32} className='w-full p-5 '/>
          
          <Image src={'/Beautiful-ginger-kitten.png'} alt='beautiful-per-portrait' width={80} height={80} className=' w-8/12 absolute top-5 left-10 lg:left-6'/>

          </div>
          <p className=' text-lg font-medium fontNoto'>Cat Food </p>
        </div>


        <div className=' relative '>
          <div className='bg-[#FADDD4] w-full mb-3  rounded-full'>
          <Image src={'/cat-leg-center.png'} alt='cat-leg-center' width={32} height={32} className='w-full p-5 '/>
          
          <Image src={'/Mask-group.png'} alt='beautiful-per-portrait' width={80} height={80} className=' w-8/12 absolute top-5 left-10 lg:left-6'/>

          </div>
          <p className=' text-lg font-medium fontNoto'>Pet’s Clothes </p>
        </div>


        <div className=' relative '>
          <div className='bg-[#FADDD4] w-full mb-3  rounded-full'>
          <Image src={'/cat-leg-center.png'} alt='cat-leg-center' width={32} height={32} className='w-full p-5 '/>
          
          <Image src={'/pngwing4.png'} alt='beautiful-per-portrait' width={80} height={80} className=' w-8/12 absolute top-5 left-10 lg:left-6'/>

          </div>
          <p className=' text-lg font-medium fontNoto'>Nick Belts
          for Puppies </p>
        </div>

      </div>
     </div>
     </div>

     <Image src={'/Isolation_Mode.png'} alt='Isolation_Mode' width={120} height={120} className=' absolute -top-7 right-0'/>
    </div>
  )
}

export default About