import React from "react";

const Hero = () => {
  return (
    <section
      className="relative bg-slate-950 bg-cover bg-center h-screen "
      style={{
        backgroundImage:
          'url("https://forcythe.com/images/header-background.svg")',
        backgroundSize: "cover",
        backgroundPosition: "center 20%",
      }}>
      {/* <div className=" inset-0"></div> */}
      <div className="relative z-10 flex items-center justify-center text-center text-red-500 h-full">
        <div className="bg-gray-800 bg-opacity-30 backdrop-blur-md p-6 max-w-3xl rounded-md">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            We build products that shape a better future
          </h1>
          <p className="text-xl mb-6">
            We’re the architects of digital excellence across industries. We
            redefine business with cutting-edge digital strategies.
          </p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all duration-300">
            Book a Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
