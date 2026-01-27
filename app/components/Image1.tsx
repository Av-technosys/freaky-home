import { Button } from '@/components/ui/button'
import Image from 'next/image';
import React from 'react'

const Image1 = () => {
  return (
    <div className="max-w-7xl mx-auto rounded-2xl  py-6 sm:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* LEFT SIDE CONTENT */}
        <div className="order-2 lg:order-1 space-y-6">
          <h1 className="text-4xl sm:text-2xl lg:text-4xl font-bold tracking-tight">
           Discover the FreakyChimp Mobile App
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed">
            Simplify every aspect of your events with our intuitive mobile app - organize bookings, track schedules, and connect with trusted vendors anytime, anywhere.
          </p>

          <div className="flex gap-4 pt-4">
            <Button className="rounded-full px-8 py-6 text-lg font-medium bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl">
              Get Started
            </Button>
            <Button 
              variant="outline" 
              className="rounded-full px-8 py-6 text-lg font-medium border-2 hover:bg-gray-50 transition-colors"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="order-1 lg:order-2 relative flex justify-center items-center">
          <div className="relative w-full max-w-md">
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-200 to-amber-200 rounded-3xl blur-xl opacity-50"></div>
            <Image
              src="/01.png"
              alt="Freaky Chimp Mobile App"
              width={600}
              height={600}
              className="relative w-full h-auto rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-300"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Image1;