import ButtonBg from "@/components/ButtonBg"; 
import Image from "next/image"; 

const JoinUs = () => {
  return (
    <div className="max-w-6xl mx-auto relative rounded-2xl overflow-hidden "> 


      <Image
        src="/03.jpeg"
        alt="photo"
        width={500}           
        height={200}
        className="h-full -z-10 absolute inset-0 w-full object-cover rounded-2xl"
      />

        <div className=" z-50 py-6 px-4 md:px-12  text-white flex flex-col justify-center gap-20">
          <h2 className="text-3xl max-sm:text-2xl font-bold  ">
            Join us, Become a <br /> Vendor!
          </h2>
          <div className="flex justify-between items-center gap-5">
            <p className="max-w-md text-lg sm:text-xl text-shadow-lg">
              Thousands of vendors are using Eventors to showcase their services
              and get more business than ever before.
            </p>
            <ButtonBg className="px-6 py-3">
              Start Here
            </ButtonBg>
          </div>
        </div> 
    </div>
  );
};

export default JoinUs;