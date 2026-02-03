import Image from "next/image";

const Hero = () => {
  return (
   <div className=" relative  w-full h-[120vh] sm:h-[100vh]">
    {/* Background Image */}
    <div className="absolute top-0 left-0 w-full h-full   ">  </div>
    <Image
      src="/images/hero2.jpg"
      alt="Hero Background"
      fill
      className="object-cover  w-full h-full brightness-75  "
    /> 
    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>

    {/* Overlay Content */}
    <div className="absolute  z-[100]  w-full h-full top-[50%]  left-[50%] translate-x-[-50%] translate-y-[-20%] ">
      <div className="flex flex-col justify-center items-center text-center px-4 w-full ">
       <div>
         <h1 className="text-4xl sm:text-6xl font-bold text-white drop-shadow-lg">
          Welcome to Univercity
        </h1>
       </div>
        <div>
          <p className="mt-6 text-lg sm:text-2xl text-white drop-shadow-lg max-w-2xl mx-auto">
            Discover a world of knowledge and opportunities at Univercity, where education meets excellence.
          </p>
        </div>
        <div>
          <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Get Started
          </button>
       
      </div>
    </div>
  
   

   </div>
  </div>
  );
};

export default Hero;
