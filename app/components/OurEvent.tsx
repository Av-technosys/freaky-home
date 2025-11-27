import Image from "next/image";
import usertesting from "../../public/ajay.jpg";

const eventData = [
  {
    img: usertesting,
    title: "Party",
    subtitle: "Celebrate every little moment",
    desc: "  Give your team members access to this project and start collaborating in real time",
  },
  {
    img: usertesting,
    title: "Concert",
    subtitle: "Night full of energy",
    desc: "  Give your team members access to this project and start collaborating in real time",
  },
  {
    img: usertesting,
    title: "Birthday",
    subtitle: "Celebrate your special day",
    desc: "  Give your team members access to this project and start collaborating in real time",
  },
  {
    img: usertesting,
    title: "Marriage",
    subtitle: "Beginning of forever together",
    desc: "  Give your team members access to this project and start collaborating in real time",
  },
  {
    img: usertesting,
    title: "Decor",
    subtitle: "Transforming spaces with creativity",
    desc: "  Give your team members access to this project and start collaborating in real time",
  },
  {
    img: usertesting,
    title: "Baby Shower",
    subtitle: "Celebrating new beginnings",
    desc: "  Give your team members access to this project and start collaborating in real time",
  },
];

const OurEvent = () => {
  return (
    <div className="max-w-7xl mx-auto ">
      <div className="flex flex-col text-center max-w-5xl mx-auto gap-3 pt-12  ">
        <h1 className=" text-4xl max-sm:text-2xl font-bold">Our Events</h1>
        <p className="max-w-2xl mx-auto text-center text-gray-500">
          We provide seamless, reliable, and user-centric services designed to
          simplify your journey and enhance your overall experience with modern
          solutions
        </p>
      </div>
      <div className="grid grid-cols-1 mt-8 sm:grid-cols-2 lg:grid-cols-3  gap-y-24 gap-x-5 p-4">
        {eventData.map((item, index) => (
          <div key={index} className="relative group">
            <div>
              <div className="overflow-hidden rounded-xl">
                <Image src={item.img} alt={item.title} />
              </div>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 translate-y-1/3 -bottom-3 w-[80%] transition-all duration-300">
              <div
                className="
        bg-[#F5F7FA] shadow-md rounded-xl py-6 px-4 text-center cursor-pointer overflow-hidden transition-all duration-300 "
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurEvent;
