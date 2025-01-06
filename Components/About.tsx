import Image from 'next/image'

const About = () => {
  return (
    <div className='w-11/12 mx-auto text-center my-20'>
     <div>
      <h1 className=' text-5xl font-bold fontLaila '>Features Categories</h1>
      <p className=' text-lg font-medium fontLora w-[45%] my-4 mx-auto'>At petstick, access pet listings, shop easily, and book grooming,
      vet visits, and training all through personalized profiles.</p>
     </div>

     <div>
      <div>
        <div className=' bg-[#FADDD4] w-full h-52'>
          <Image src={'/cat-leg-center.png'} alt='cat-leg-center' width={32} height={32}/>
        </div>
      </div>
     </div>
    </div>
  )
}

export default About