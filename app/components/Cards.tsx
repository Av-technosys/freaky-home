import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IconStarFilled } from "@tabler/icons-react";

const testimonials = [
  {
    img: "",
    name: "Jane Doe",
    text: "FreakyChimp has completely transformed the way we organize events. Planning is effortless, coordination with vendors is seamless, and every celebration turns out flawless. Highly recommended!",
  },
  {
    img: "",
    name: "John Smith",
    text: "Incredible service and an outstanding platform. Planning events has never been easier - every detail is managed flawlessly, making each celebration stress-free and memorable.",
  },
  {
    img: "",
    name: "Emily White",
    text: "A fantastic tool for managing events. From vendor coordination to scheduling, everything is smooth, and the support team is very responsive.",
  },
  {
    img: "",
    name: "Aarav Mehta",
    text: "FreakyChimp has streamlined our event planning beautifully. Our team coordinates vendors, manages schedules, and executes events faster, smarter, and more efficiently than ever before.",
  },
  {
    img: "",
    name: "Riya Kapoor",
    text: "FreakyChimp delivers unmatched reliability and consistency, making every event perfectly organized from start to finish.",
  },
  {
    img: "",
    name: "Kabir Sharma",
    text: "FreakyChimp combines smart design with intuitive features, making event planning and execution effortless every time.",
  },
];

const TestimonialCards = () => {
  const sortedTestimonials = [...testimonials].sort(
  (a, b) => b.text.length - a.text.length
);
  return (
    <div className="w-full   mx-auto py-6">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 max-sm:text-2xl mb-4">
          What Our Customers Say
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Don not just take our word for it - hear from our satisfied customers
        </p>
      </div>

      {/* Testimonials Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {sortedTestimonials.map((item, index) => (
          <Card
            key={index}
            className="border-gray-200 hover:border-gray-300 transition-colors duration-200"
          >
            <CardContent className="pt-3">
              {/* Stars */}
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <IconStarFilled
                    key={i}
                    size={18}
                    className="text-yellow-500"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-sm leading-relaxed mb-2">
               {`"${item.text}"`}
              </p>

              {/* Customer Info */}
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10 border">
                  <AvatarImage src={item.img} alt={item.name} />
                  <AvatarFallback className="bg-gray-100 text-gray-600">
                    {item.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-gray-900">{item.name}</h3>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCards;