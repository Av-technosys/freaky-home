import { Button } from '@/components/ui/button'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Image1 = () => {
  return (
    <div className="grid grid-cols-2 my-6 max-sm:grid-cols-1 max-w-7xl mx-auto py-10 max-sm:py-10 gap-4">
      <div className="flex flex-col justify-center px-12 max-sm:px-5 gap-5 max-sm:gap-3 ">
        <div className=" text-lg font-medium ">
          <h4>Explore</h4>
          <h6 className=' font-semibold text-yellow-500 text-5xl'>Freaky  <span className=' text-orange-500'>Chimp</span> </h6>
          {/* <p className=' text-gray-600 '>Mobile App</p> */}
        </div>

        <p className=" text-gray-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis officia porro quam, minima culpa quae
        </p>

        <div className=' flex gap-5 items-center mt-12'>
          <Link href={"https://play.google.com/store/apps/details?id=com.freakychimp.freakychimp"} target='_blank'>
            <Image src={"/google-play.svg"} alt='playsotre logo' className=' h-36 cursor-pointer w-auto' width={100} height={100} />
          </Link>
          <Link href={"https://apps.apple.com/in/app/freaky-chimp/id6444410868"} target='_blank'>
            <Image src={"/app-store.svg"} alt='playsotre logo' className=' h-36 cursor-pointer w-auto' width={100} height={100} />
          </Link>
        </div>
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