import React from "react";

const Testimonials = () => {
  return (
    <section className="bg-gray-900 text-white py-12 px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">
          Discover the transformative stories of startups that scaled new
          heights with us
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-800 p-6 rounded">
          <img
            src="path/to/starks-logo.png"
            alt="Starks Logo"
            className="mb-4 mx-auto"
          />
          <p className="text-lg">
            "Partnering with Forcythe was like finding a hidden gem. Their
            genuine interest in our success was palpable, and the continuous
            support post-launch has been a testament to their commitment.
            They've become more than a service provider; they're a trusted
            ally."
          </p>
          <p className="mt-4 text-gray-400">- Starks Associate</p>
        </div>
        <div className="bg-gray-800 p-6 rounded">
          <img
            src="path/to/executivepros-logo.png"
            alt="ExecutivePros Logo"
            className="mb-4 mx-auto"
          />
          <p className="text-lg">
            "The entire experience with Forcythe was seamless and highly
            professional. Their team brought our vision to life with incredible
            attention to detail and creative solutions."
          </p>
          <p className="mt-4 text-gray-400">- ExecutivePros Associate</p>
        </div>
        <div className="bg-gray-800 p-6 rounded">
          <img
            src="path/to/stacai-logo.png"
            alt="stac.ai Logo"
            className="mb-4 mx-auto"
          />
          <p className="text-lg">
            "Forcythe's approach to our project was holistic and innovative.
            Their expertise and commitment made all the difference."
          </p>
          <p className="mt-4 text-gray-400">- stac.ai Associate</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <div className="bg-gray-800 p-6 rounded">
          <img
            src="path/to/iwaria-logo.png"
            alt="Iwaria Logo"
            className="mb-4 mx-auto"
          />
          <p className="text-lg">
            "Their dedication to our project's success was unparalleled. We
            couldn't have asked for a better partner than Forcythe."
          </p>
          <p className="mt-4 text-gray-400">- Iwaria Associate</p>
        </div>
        <div className="bg-gray-800 p-6 rounded">
          <img
            src="path/to/beaupreneur-logo.png"
            alt="Beaupreneur Logo"
            className="mb-4 mx-auto"
          />
          <p className="text-lg">
            "Forcythe exceeded our expectations at every turn. Their expertise
            and unwavering support were instrumental in our success."
          </p>
          <p className="mt-4 text-gray-400">- Beaupreneur Associate</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
