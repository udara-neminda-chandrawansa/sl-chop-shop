import { useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import EventCard from "../components/EventCard";

import banner from "./../assets/Landing/banner_1.png";
import service_1 from "./../assets/Services/service_1.png";
import vwbeetle from "./../assets/Landing/vwbeetle.png";
import car_1 from "./../assets/Landing/car-1.png";
import events_robot from "./../assets/Landing/events-robot.png";
import event_1 from "./../assets/Events/event-1.png";
import map from "./../assets/Contact/map.png";
import email from "./../assets/Contact/email.png";
import location from "./../assets/Contact/location.png";
import call from "./../assets/Contact/call.png";

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
            <ScrollAnimation animateIn="headShake">
              <img
                src={vwbeetle}
                alt="vwbeetle"
                className="object-contain h-fit max-xl:h-full max-lg:h-[500px] max-md:h-[300px]"
              />
            </ScrollAnimation>
          </div>
        </div>
      </ScrollAnimation>
      {/*spacing div*/}
      <div className="xl:h-[30dvh]"></div>
      {/*carousel*/}
      <ScrollAnimation animateIn="fadeIn">
        <div
          className="flex flex-col xl:h-[60dvh] justify-end items-center relative"
          style={{ backgroundImage: `url(${carouselImages[currentBanner]})` }}
        >
          <div className="bg-[#000000D4] h-full absolute xl:-top-[10dvh] max-xl:relative max-xl:w-full xl:w-5/6 flex justify-center items-end flex-col p-6">
            <ScrollAnimation animateIn="headShake">
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
              M.R Mudhitha Bandara
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
      {/*Events*/}
      <ScrollAnimation animateIn="fadeIn">
        <div className="flex flex-col px-12 py-6 h-fit max-md:px-6">
          {/*top*/}
          <div className="flex items-center h-1/2 max-sm:flex-col">
            <div className="sm:w-1/3">
              <ScrollAnimation animateIn="bounce">
                <img src={events_robot} alt="events-robot" />
              </ScrollAnimation>
            </div>
            <div className="flex flex-col gap-3 sm:w-2/3">
              <h1 className="text-5xl font-bold text-[#F6CE15]">Events</h1>
              <p className="text-justify lh-lg">
                At SL Chop Shop, we believe in bringing car enthusiasts and the
                community together through exciting events! From car meets to
                workshops, we host a variety of activities that celebrate a
                shared passion for automobiles.together through exciting events!
                From car meets to workshops, we host a variety of activities
                that celebrate a shared passion for automobiles.
              </p>
            </div>
          </div>
          {/*bottom (cards)*/}
          <div className="grid grid-cols-4 gap-6 p-12 w-fit max-sm:w-full place-items-center max-md:p-6 max-md:grid-cols-2 max-sm:grid-cols-1">
            <ScrollAnimation animateIn="flip">
              <EventCard
                text={"2024 31 Night"}
                url={"31-night"}
                img={event_1}
              ></EventCard>
            </ScrollAnimation>
            <ScrollAnimation animateIn="flip" delay={100}>
              <EventCard
                text={"2024 31 Night"}
                url={"31-night"}
                img={event_1}
              ></EventCard>
            </ScrollAnimation>
            <ScrollAnimation animateIn="flip" delay={200}>
              <EventCard
                text={"2024 31 Night"}
                url={"31-night"}
                img={event_1}
              ></EventCard>
            </ScrollAnimation>
            <ScrollAnimation animateIn="flip" delay={300}>
              <EventCard
                text={"2024 31 Night"}
                url={"31-night"}
                img={event_1}
              ></EventCard>
            </ScrollAnimation>
          </div>
        </div>
      </ScrollAnimation>
      {/*Contact*/}
      <ScrollAnimation animateIn="fadeIn">
        <div className="flex flex-col gap-6 px-12 py-6 h-fit max-md:px-6">
          <h1 className="text-5xl text-center">Contact Us</h1>
          <img src={map} alt="map" />
          {/*contact us*/}
          <div className="bg-[#00000008] py-6 px-12 max-md:px-6 flex justify-center gap-12 max-lg:flex-col text-center">
            <div className="flex flex-col items-center justify-center lg:w-1/3">
              <ScrollAnimation animateIn="wobble">
                <img src={email} alt="" />
              </ScrollAnimation>
              <p>hello@SLCHOPSHOP.com</p>
            </div>
            <div className="flex flex-col items-center justify-center lg:w-1/3">
              <ScrollAnimation animateIn="wobble">
                <img src={location} alt="" />
              </ScrollAnimation>
              <p> SL Chop shop, Katugasthota, Kandy, Sri lanka, 21120</p>
            </div>
            <div className="flex flex-col items-center justify-center lg:w-1/3">
              <ScrollAnimation animateIn="wobble">
                <img src={call} alt="" />
              </ScrollAnimation>
              <p>+94 77 976 7127</p>
            </div>
          </div>
          <span className="flex flex-col items-center justify-center gap-6">
            <p className="text-center md:w-2/3 lh-lg">
              We’d love to hear from you! Whether you have a question, need a
              consultation, or want to schedule a fitting, the team at SL Chop
              Shop is here to assist you.
            </p>
            <button className="rounded-lg bg-[#334462] px-6 py-3 text-white hover:scale-90 transition-all">
              Contact Us
            </button>
          </span>
        </div>
      </ScrollAnimation>
    </div>
  );
}

export default Landing;
