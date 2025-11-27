import { Button } from '@/components/ui/button'
import Image from 'next/image';
import React from 'react'

const Image1 = () => {
  return (
    <div className="grid grid-cols-2 max-sm:grid-cols-1 max-w-7xl mx-auto py-10 max-sm:py-10 gap-4">
      <div className="flex flex-col justify-center px-12 max-sm:px-5 gap-5 max-sm:gap-3 ">
        <h1 className="font-bold  max-sm:text-2xl  md:text-4xl leading-tight ">
          Explore Freaky <br className='max-sm:hidden'/> 
          Chimp Mobile <br className='max-sm:hidden'/> 
          App
        </h1>

        <p className="">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        </p>

        <Button className="rounded-3xl mt-10 bg-[linear-gradient(to_right,#FFC107,#FF5722)] px-6 py-3 text-base w-fit">
          Explore
        </Button>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="flex justify-center items-center relative max-sm:p-6 max-sm:mb-5">
        <Image
  src="/01.png"
  alt="phones"
  width={500}
  height={500}
  className="w-[65%] max-w-lg"
/>

      </div>
      
    </div>
  )
}

export default Image1;