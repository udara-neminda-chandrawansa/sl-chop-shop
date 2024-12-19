import { useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import banner from "./../assets/Landing/banner_1.png";
import service_1 from "./../assets/Services/service_1.png";
import vwbeetle from "./../assets/Landing/vwbeetle.png";
import car_1 from "./../assets/Landing/car-1.png";

function Landing() {
  const [selectedService, setSelectedService] = useState(0);
  const carouselImages = [car_1, car_1, car_1];
  const [currentBanner, setCurrentBanner] = useState(0); // initialize current banner

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeout(() => {
        setCurrentBanner((prev) => (prev + 1) % carouselImages.length);
      }, 300); // Match transition delay in bg
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  });

  return (
    <div>
      {/*banner*/}
      <div
        className="relative flex bg-center bg-cover h-dvh"
        style={{ backgroundImage: `url(${banner})` }}
      >
        {/*Top layer (backdrop)*/}
        <div className="absolute bottom-0 max-sm:w-0 sm:w-2/3 rounded-e-full h-full inset-0 bg-gradient-to-br from-[#000000D4] to-[#000000D4]"></div>
        {/*left side*/}
        <div className="z-10 flex flex-col items-start justify-center w-2/3 gap-6 p-12 text-white max-sm:w-full max-md:p-6">
          <h1 className="text-3xl akatab">
            The Best Auto Service In Sri Lanka
          </h1>
          <h1 className="text-6xl akatab text-[#F6CE15]">
            Precision Auto Repairs
          </h1>
          <h1>
            At SL Chop Shop, we specialize in top-notch automotive repairs,
            ensuring your vehicle runs like new.
          </h1>
          <button className="px-6 py-2 border-2 rounded-lg hover:bg-white hover:text-[#F6CE15] transition-all">
            View More
          </button>
        </div>
      </div>
      {/*Services*/}
      <div className="z-10 flex items-center justify-center h-fit max-md:p-6">
        <div className="z-10 flex flex-col w-3/4 h-full bg-white rounded-lg md:-translate-y-16 max-md:w-full">
          {/*top*/}
          <div className="flex items-center w-full p-6 justify-evenly max-md:flex-col max-md:gap-3">
            <button
              onClick={() => setSelectedService(0)}
              className={`transition-all ${
                selectedService === 0 ? "font-semibold" : ""
              }`}
            >
              Routine Maintenance Services
            </button>
            <button
              onClick={() => setSelectedService(1)}
              className={`transition-all ${
                selectedService === 1 ? "font-semibold" : ""
              }`}
            >
              Mechanical Repairs
            </button>
            <button
              onClick={() => setSelectedService(2)}
              className={`transition-all ${
                selectedService === 2 ? "font-semibold" : ""
              }`}
            >
              Diagnostic Services
            </button>
          </div>
          {/*bottom*/}
          <ScrollAnimation animateIn="fadeIn">
            <div className="flex max-lg:flex-col">
              <div className="flex flex-col justify-center gap-6 p-6 lg:w-1/2">
                <span className="flex items-center gap-6">
                  <button className="px-4 py-2 rounded-lg bg-[#F6CE15] hover:scale-90 transition-all w-fit text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-caret-right"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753" />
                    </svg>
                  </button>
                  <span className="flex items-center justify-center w-6 h-6 text-xs text-white bg-black rounded-full">
                    01
                  </span>
                </span>
                <p className="text-justify max-sm:text-sm">
                  Replacing engine oil and filters to keep the engine running
                  smoothly. Inspecting, repairing, or replacing brake pads,
                  discs, or brake fluid. Refilling fluids such as coolant,
                  transmission fluid, brake fluid, and windshield washer fluid.
                  Tire rotation, balancing, puncture repairs, and alignment
                  adjustments. Testing, charging, or replacing car batteries.
                  Adjusting spark plugs, ignition systems, and cleaning fuel
                  systems.
                </p>
                <span className="flex items-center justify-center">
                  <button className="px-4 py-2 rounded-lg bg-[#F6CE15] hover:scale-90 transition-all w-fit text-white">
                    Booking Now
                  </button>
                </span>
              </div>
              <div
                className="bg-center bg-cover max-lg:h-[300px] lg:w-1/2 max-lg:rounded-es-lg rounded-ee-lg"
                style={{ backgroundImage: `url(${service_1})` }}
              ></div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
      {/*Welcome*/}
      <ScrollAnimation animateIn="fadeIn">
        <div className="h-[50dvh] bg-[#F6CE15] flex p-6 max-lg:flex-col max-lg:h-fit">
          <div className="lg:w-1/2">
            <p className="text-left lg:w-1/2 lg:absolute lh-lg max-xl:text-justify">
              Welcome to SL Chop Shop, your trusted destination for professional
              car repair and maintenance services. With years of experience and
              a passion for automobiles, we are dedicated to keeping your
              vehicle running at its best. At SL Chop Shop, we specialize in
              top-quality repairs, routine maintenance, and custom solutions for
              all makes and models. Whether it's a simple oil change, a complex
              engine repair, or restoring a vehicle to its former glory, our
              skilled mechanics and state-of-the- art tools ensure every job is
              done right the first time.
            </p>
          </div>
          <div className="flex max-lg:justify-center">
            <img
              src={vwbeetle}
              alt="vwbeetle"
              className="object-contain h-fit max-xl:h-full max-lg:h-[500px] max-md:h-[300px]"
            />
          </div>
        </div>
      </ScrollAnimation>
      {/*spacing div*/}
      <div className="xl:h-[30dvh]"></div>
      <ScrollAnimation animateIn="fadeIn">
        {/*carousel*/}
        <div
          className="flex flex-col xl:h-[60dvh] justify-end items-center relative"
          style={{ backgroundImage: `url(${carouselImages[currentBanner]})` }}
        >
          <div className="bg-[#000000D4] h-full absolute xl:-top-[10dvh] max-xl:relative max-xl:w-full xl:w-5/6 flex justify-center items-end flex-col p-6">
            <ScrollAnimation animateIn="bounce">
              <p className="text-justify text-white lh-lg">
                Welcome to SL Chop Shop, your trusted destination for
                professional car repair and maintenance services. With years of
                experience and a passion for automobiles, we are dedicated to
                keeping your vehicle running at its best. At SL Chop Shop, we
                specialize in top-quality repairs, routine maintenance, and
                custom solutions for all makes and models. Whether it's a simple
                oil change, a complex engine repair, or restoring a vehicle to
                its former glory, our skilled mechanics and state-of-the-art
                tools ensure every job is done right the first time. Welcome to
                SL Chop Shop, your trusted destination for professional car
                repair and maintenance services. With years of experience and a
                passion for automobiles, we are dedicated to keeping your
                vehicle running at its best. At SL Chop Shop, we specialize in
                top-quality repairs, routine maintenance, and custom solutions
                for all makes and models. Whether it's a simple oil change, a
                complex engine repair, or restoring a vehicle to its former
                glory, our skilled mechanics and state-of-the-art tools ensure
                every job is done right the first time.
              </p>
            </ScrollAnimation>
            <p className="text-justify text-[#F6CE15] lh-lg w-fit">
              <ScrollAnimation animateIn="bounce">
                M.R Mudhitha Bandara
              </ScrollAnimation>
            </p>
          </div>
          {/*carousel lines*/}
          <div className="z-10 h-[10dvh] max-lg:h-[5dvh] flex justify-center max-sm:pr-0 items-center gap-6">
            <span
              className={`w-[50px] h-[2px] transition-all ${
                currentBanner === 0 ? "bg-[#F6CE15]" : "bg-white"
              }`}
            ></span>
            <span
              className={`w-[50px] h-[2px] transition-all ${
                currentBanner === 1 ? "bg-[#F6CE15]" : "bg-white"
              }`}
            ></span>
            <span
              className={`w-[50px] h-[2px] transition-all ${
                currentBanner === 2 ? "bg-[#F6CE15]" : "bg-white"
              }`}
            ></span>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
}

export default Landing;
