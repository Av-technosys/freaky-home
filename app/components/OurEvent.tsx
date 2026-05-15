import Image from "next/image";
import usertesting from "../../public/ajay.jpg";

const eventData = [
  {
    img: "/party.jpeg",
    title: "Party",
    subtitle: "Celebrate every unforgettable moment",
  },
  {
    img: "/concert.jpeg",
    title: "Concert",
    subtitle: "Feel the live energy",
  },
  {
    img: "/birthday.png",
    title: "Birthday",
    subtitle: "Make birthdays extra special",
  },
  {
    img: "/merriage.jpeg",
    title: "Marriage",
    subtitle: "Beginning forever together beautifully",
  },
  {
    img: usertesting,
    title: "Decor",
    subtitle: "Creative spaces, stunning vibes",
  },
  {
    img: "/baby-show.jpeg",
    title: "Baby Shower",
    subtitle: "Celebrating joyful new beginnings",
  },
];

const OurEvent = () => {
  return (
    <div className=" ">
      <div className="flex flex-col text-center max-w-5xl mx-auto gap-3 pt-12  ">
        <h1 className=" text-4xl max-sm:text-2xl font-bold">Our Events</h1>
        <p className="max-w-2xl mx-auto text-center text-gray-700">
          Life is full of moments worth commemorating. Whether it's an intimate gathering or a grand affair, our vendors are ready to make every occasion unforgettable.
        </p>
      </div>
      <div className="grid grid-cols-1 mt-8 sm:grid-cols-2 lg:grid-cols-3  gap-y-5 gap-x-5 py-4">
        {eventData.map((item, index) => (
          <div key={index} className="relative group">
            <div>
              <div className="overflow-hidden rounded">
                <Image width={300} height={300} className="group-hover:scale-105 h-72 object-cover w-full duration-200" src={item.img} alt={item.title} />
              </div>
            </div>
            <div className="absolute w-full px-6 z-20 text-white bg-linear-0 from-black to-black/0 pb-3 bottom-0 left-1/2 -translate-x-1/2">
              <div>
                <p className=" text-xl  font-bold">{item.title}</p>
                <p className=" font-medium">{item.subtitle}</p>
              </div>
              {/* <div
                className="bg-[#F5F7FA] shadow-md rounded-xl py-6 px-4 text-center cursor-pointer overflow-hidden transition-all duration-300 "
              >
                <div className="flex flex-col ">
                  <span className="text-[#FF5722] font-bold text-xl">
                    {item.title}
                  </span>
                  <span className="text-[#717171] text-sm">
                    {item.subtitle}
                  </span>
                </div>
                <div className="max-h-0 overflow-hidden group-hover:max-h-40 group-hover:mt-5 transition-all duration-200">
                  <p className="text-[#717171] text-sm">{item.desc}</p>
                </div>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurEvent;
