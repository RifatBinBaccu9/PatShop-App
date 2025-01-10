import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='bg-white text-black w-11/12 sm:container mx-auto text-center my-20'>
      <h2 className='text-5xl font-laila font-bold'>Not Found</h2>
      <p className='text-lg font-medium font-noto mt-3'>Could not find requested resource</p>
      <div className='mt-10'>
         <Link href="/" className='btnStyle'>Return Home</Link>
      </div>
    </div>
  )
}