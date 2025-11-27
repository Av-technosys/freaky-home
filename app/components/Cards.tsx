import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IconStarFilled } from "@tabler/icons-react";

const testimonials = [
  {
    img: "01.png",
    name: "Jane Doe",

    text: "This product has completely transformed our workflow. The team is more productive, and the results are outstanding. Highly recommended!",
  },
  {
    img: "/mnt/data/25095194-83cc-4647-93b0-b31e75e223be.png",
    name: "John Smith",

    text: "Incredible service and a fantastic product. It's rare to find a company that delivers on its promises so consistently. A five-star experience all around.",
  },
  {
    img: "/mnt/data/25095194-83cc-4647-93b0-b31e75e223be.png",
    name: "Emily White",

    text: "A solid tool that does exactly what it promises. There was a bit of a learning curve, but their support team was incredibly helpful.",
  },
  {
    img: "/mnt/data/25095194-83cc-4647-93b0-b31e75e223be.png",
    name: "Aarav Mehta",

    text: "The platform has streamlined our operations beautifully. Our team works faster, smarter, and more efficiently than ever before.",
  },
  {
    img: "/mnt/data/25095194-83cc-4647-93b0-b31e75e223be.png",
    name: "Riya Kapoor",

    text: "Exceptional service and a game-changing product. The reliability and consistency we get from this tool is unmatched.",
  },
  {
    img: "/mnt/data/25095194-83cc-4647-93b0-b31e75e223be.png",
    name: "Kabir Sharma",

    text: "Super intuitive and well-designed. Took me a bit to explore all features, but once I did, the workflow became incredibly smooth.",
  },
];

const Cards = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-7xl px-4 mt-25">

        <h1 className="text-4xl text-center max-sm:text-2xl font-bold font-serif">
          What our customer <br /> says About Us
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {testimonials.map((item, index) => (
            <Card
              key={index}
              className="rounded-2xl shadow-md border bg-white p-6"
            >
              <CardContent className="p-0 flex flex-col gap-4">

                {/* Avatar + Name */}
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>cn</AvatarFallback>
                  </Avatar>

                  <div>
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    
                  </div>
                </div>

            
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <IconStarFilled
                      key={i}
                      size={18}
                      className="text-yellow-500"
                    />
                  ))}
                </div>


                <p className=" text-sm ">
                  {item.text}
                </p>

              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
