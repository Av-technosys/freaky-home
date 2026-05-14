import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IconStarFilled } from "@tabler/icons-react";

const testimonials = [
  {
    img: "01.png",
    name: "Rishabh Rana",
    text: "Freaky Chimp transformed our daughter’s wedding planning. Every vendor was professional, punctual, and brilliant.",
  },
  {
    img: "02.png",
    name: "Rajdeep Singh",
    text: "Planning corporate events has never been smoother. Booking, payments, and communication — all in one place.",
  },
  {
    img: "03.png",
    name: "Urvashi Rai",
    text: "There was a small learning curve initially, but the support team was incredibly responsive and helpful.",
  },
  {
    img: "04.png",
    name: "Aarav Mehta",
    text: "The vendor quality is exceptional. Décor, catering, and photography exceeded all our expectations.",
  },
  {
    img: "05.png",
    name: "Riya Mathur",
    text: "Reliable, consistent, and genuinely impressive. Every event booking experience keeps getting better.",
  },
  {
    img: "06.png",
    name: "Kabir Sharma",
    text: "Super intuitive platform with real-time updates. My entire team relies on it for event planning now.",
  },
];

const TestimonialCards = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full mt-25">

        <h1 className="text-4xl text-center max-sm:text-2xl font-bold font-serif">
          What our customer <br /> says About Us
        </h1>

        <div className="grid  grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {testimonials.map((item, index) => (
            <Card
              key={index}
              className="rounded hover:shadow-lg duration-200 border bg-white p-6"
            >
              <CardContent className="p-0 flex flex-col gap-4">

                {/* Avatar + Name */}
                <div className="flex items-center gap-3">
                  {/* <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>cn</AvatarFallback>
                  </Avatar> */}

                  <div>
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <IconStarFilled
                          key={i}
                          size={14}
                          className="text-yellow-500"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className=" text-gray-600 text-sm ">
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

export default TestimonialCards;
