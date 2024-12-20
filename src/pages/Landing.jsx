import { useState, useEffect, useRef } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import EventCard from "../components/EventCard";
import StarRating from "../components/StarRating";

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
import faq_bg from "./../assets/Landing/faq_bg.png";
import client_1 from "./../assets/Feedback/clients/client-1.png";
import client_2 from "./../assets/Feedback/clients/client-2.png";
import client_3 from "./../assets/Feedback/clients/client-3.png";
import client_4 from "./../assets/Feedback/clients/client-4.png";
import feedbackBanner from "./../assets/Feedback/feedbackBanner.png";
import camera_icon from "./../assets/Feedback/camera_icon.png";

function Landing() {
  const [selectedService, setSelectedService] = useState(0);
  const carouselImages = [car_1, car_1, car_1];
  const [currentBanner, setCurrentBanner] = useState(0); // initialize current banner

  //
  // ** for feedback section
  //

  const feedbacks = [
    [
      client_1,
      "Company 1",
      5,
      "Silicon Radon Networks is a standout IT company known for its innovative solutions, technical expertise, and strong customer focus. The company consistently demonstrates a commitment to delivering cutting-edge network and IT services, meeting client needs with high levels of efficiency and reliability. Their skilled team effectively handles complex challenges, building trust through the timely and high-quality execution of projects. However, there is room for improvement in enhancing communication channels to ensure consistent responsiveness throughout project phases, and expanding their service offerings to support scalability would help meet diverse industry demands. Overall, Silicon Radon Networks’ dedication to excellence and customer-centric approach positions it as a trusted partner in the IT industry.",
    ],
    [
      client_2,
      "Company 2",
      5,
      "Silicon Radon Networks is a standout IT company known for its innovative solutions, technical expertise, and strong customer focus. The company consistently demonstrates a commitment to delivering cutting-edge network and IT services, meeting client needs with high levels of efficiency and reliability. Their skilled team effectively handles complex challenges, building trust through the timely and high-quality execution of projects. However, there is room for improvement in enhancing communication channels to ensure consistent responsiveness throughout project phases, and expanding their service offerings to support scalability would help meet diverse industry demands. Overall, Silicon Radon Networks’ dedication to excellence and customer-centric approach positions it as a trusted partner in the IT industry.",
    ],
    [
      client_3,
      "Company 3",
      5,
      "Silicon Radon Networks is a standout IT company known for its innovative solutions, technical expertise, and strong customer focus. The company consistently demonstrates a commitment to delivering cutting-edge network and IT services, meeting client needs with high levels of efficiency and reliability. Their skilled team effectively handles complex challenges, building trust through the timely and high-quality execution of projects. However, there is room for improvement in enhancing communication channels to ensure consistent responsiveness throughout project phases, and expanding their service offerings to support scalability would help meet diverse industry demands. Overall, Silicon Radon Networks’ dedication to excellence and customer-centric approach positions it as a trusted partner in the IT industry.",
    ],
    [
      client_4,
      "Company 4",
      5,
      "Silicon Radon Networks is a standout IT company known for its innovative solutions, technical expertise, and strong customer focus. The company consistently demonstrates a commitment to delivering cutting-edge network and IT services, meeting client needs with high levels of efficiency and reliability. Their skilled team effectively handles complex challenges, building trust through the timely and high-quality execution of projects. However, there is room for improvement in enhancing communication channels to ensure consistent responsiveness throughout project phases, and expanding their service offerings to support scalability would help meet diverse industry demands. Overall, Silicon Radon Networks’ dedication to excellence and customer-centric approach positions it as a trusted partner in the IT industry.",
    ],
  ];

  const feedbackEnd = useRef(null); // reference of 'feedback' right side div

  const scrollDown = () => {
    // scroll to end of the 'feedback-scrollable' div
    document.getElementById("feedback-scrollable").scrollTo({
      top: feedbackEnd.current.offsetTop,
      behavior: "smooth",
    });
  };

  const [rating, setRating] = useState(0); // number of stars given by user

  const handleRatingChange = (newRating) => {
    setRating(newRating); // Capture the rating from StarRating
  };

  //
  // ** for carousel
  //

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
      <div className="z-10 flex items-center justify-center h-fit max-md:p-6 bg-[#EAEAEAA1]">
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
        <div className="h-[50dvh] bg-[#F6CE15] flex p-6 max-lg:flex-col max-lg:h-fit relative">
          <div className="absolute bottom-0 right-0 w-2/3 h-full bg-white rounded-tl-full max-lg:hidden"></div>
          <div className="lg:w-1/2">
            <p className="text-left lg:w-1/2 lg:absolute lh-lg max-xl:text-justify max-md:text-sm">
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
              <p className="text-justify text-white lh-lg max-md:text-sm">
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
            <p className="text-justify text-[#F6CE15] lh-lg w-fit max-md:text-sm">
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
              <p className="text-justify lh-lg max-md:text-sm">
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
            <p className="text-center md:w-2/3 lh-lg max-md:text-sm">
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
      {/*FAQs*/}
      <ScrollAnimation animateIn="fadeIn">
        <div
          className="flex p-12 text-white max-md:p-6 max-lg:flex-col max-lg:gap-6"
          style={{ backgroundImage: `url(${faq_bg})` }}
        >
          <div className="flex flex-col gap-6 lg:w-1/3">
            <h1 className="font-bold text-8xl">FAQs</h1>
            <p className="text-justify lh-lg max-md:text-sm">
              FAQs Welcome to the SL Chop Shop FAQs page! Here, you'll find
              answers to common questions about our services, pricing,
              appointments, and more. Whether you’re curious about our repair
              process or need details about warranties, we’ve got you covered.
              If you don’t see your question here, feel free to contact us
              directly! FAQs Welcome to the SL Chop Shop FAQs page! Here, you'll
              find answers to common questions about our services, pricing,
              appointments, and more. Whether you’re curious about our repair
              process or need details about warranties, we’ve got you covered.
              If you don’t see your question here,{" "}
            </p>
          </div>
          <div className="lg:p-3 lg:w-2/3">
            <div className="space-y-4 max-md:text-sm">
              <details className="group bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                  <h2 className="text-lg font-medium text-gray-900">
                    What types of vehicles does SL Chop Shop service?
                  </h2>

                  <span className="shrink-0 rounded-full bg-[#F6CE15] p-1.5 text-white sm:p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="transition duration-300 size-5 shrink-0 group-open:-rotate-45"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <p className="mt-4 leading-relaxed text-justify text-gray-700">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
                  hic veritatis molestias culpa in, recusandae laboriosam neque
                  aliquid libero nesciunt voluptate dicta quo officiis explicabo
                  consequuntur distinctio corporis earum similique!
                </p>
              </details>
              <details className="group bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                  <h2 className="text-lg font-medium text-gray-900">
                    Do I need an appointment, or do you accept walk-ins?
                  </h2>

                  <span className="shrink-0 rounded-full bg-[#F6CE15] p-1.5 text-white sm:p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="transition duration-300 size-5 shrink-0 group-open:-rotate-45"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <p className="mt-4 leading-relaxed text-justify text-gray-700">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
                  hic veritatis molestias culpa in, recusandae laboriosam neque
                  aliquid libero nesciunt voluptate dicta quo officiis explicabo
                  consequuntur distinctio corporis earum similique!
                </p>
              </details>
              <details className="group bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                  <h2 className="text-lg font-medium text-gray-900">
                    What services does SL Chop Shop provide?
                  </h2>

                  <span className="shrink-0 rounded-full bg-[#F6CE15] p-1.5 text-white sm:p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="transition duration-300 size-5 shrink-0 group-open:-rotate-45"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <p className="mt-4 leading-relaxed text-justify text-gray-700">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
                  hic veritatis molestias culpa in, recusandae laboriosam neque
                  aliquid libero nesciunt voluptate dicta quo officiis explicabo
                  consequuntur distinctio corporis earum similique!
                </p>
              </details>
              <details className="group bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                  <h2 className="text-lg font-medium text-gray-900">
                    How long does it take to complete a repair or service?
                  </h2>

                  <span className="shrink-0 rounded-full bg-[#F6CE15] p-1.5 text-white sm:p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="transition duration-300 size-5 shrink-0 group-open:-rotate-45"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <p className="mt-4 leading-relaxed text-justify text-gray-700">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
                  hic veritatis molestias culpa in, recusandae laboriosam neque
                  aliquid libero nesciunt voluptate dicta quo officiis explicabo
                  consequuntur distinctio corporis earum similique!
                </p>
              </details>
              <details className="group bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                  <h2 className="text-lg font-medium text-gray-900">
                    Can you provide a cost estimate before starting any work?
                  </h2>

                  <span className="shrink-0 rounded-full bg-[#F6CE15] p-1.5 text-white sm:p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="transition duration-300 size-5 shrink-0 group-open:-rotate-45"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <p className="mt-4 leading-relaxed text-justify text-gray-700">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
                  hic veritatis molestias culpa in, recusandae laboriosam neque
                  aliquid libero nesciunt voluptate dicta quo officiis explicabo
                  consequuntur distinctio corporis earum similique!
                </p>
              </details>
            </div>
          </div>
        </div>
      </ScrollAnimation>
      {/*feedbacks*/}
      <ScrollAnimation animateIn="fadeIn">
        <div className="py-6 flex flex-col justify-center items-center max-md:h-fit md:h-[800px]">
          <div className="flex w-full h-full">
            <div
              className="bg-center bg-cover md:w-1/5 max-md:hidden"
              style={{ backgroundImage: `url(${feedbackBanner})` }}
            ></div>
            <div
              id="feedback-scrollable"
              className="h-full overflow-y-scroll md:w-4/5 no-scrollbar"
            >
              <span className="absolute flex w-4/5 gap-3 pt-6 pl-6 bg-white max-md:p-4 max-sm:py-0">
                <h1 className="z-10 text-[#334462] font-bold text-5xl max-lg:text-3xl max-sm:text-xl max-[425px]:text-lg m-0">
                  <span className="text-[#F6CE15] font-semibold pr-3">
                    Client
                  </span>
                  Feedback
                </h1>
              </span>
              {/*client feedback list*/}
              <div className="block">
                <div className="pt-24 max-sm:pt-12">
                  {feedbacks.map((feedback, index) => (
                    <div key={index} className="mb-6">
                      <span className="flex items-center gap-3 px-3">
                        <img
                          className="w-[60px] max-md:w-[30px] aspect-square object-cover"
                          src={feedback[0]} // Image source
                          alt={`feedback-company-${index}`}
                        />
                        <h5 className="m-0 font-semibold max-md:text-sm max-sm:text-xs">
                          {feedback[1]} {/* Feedback company name */}
                        </h5>
                        <span className="flex gap-1">
                          {Array.from(
                            { length: feedback[2] },
                            (_, starIndex) => (
                              <svg
                                key={starIndex}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#faca15"
                                className="bi bi-star-fill w-[16px]"
                                viewBox="0 0 16 16"
                              >
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg>
                            )
                          )}
                        </span>
                      </span>
                      <p className="p-3 text-justify max-md:text-sm max-sm:text-xs">
                        {feedback[3]} {/* Feedback text */}
                      </p>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center md:sticky bottom-5 justify-evenly max-md:justify-center">
                  {/*buttons on bottom*/}
                  <button
                    onClick={scrollDown}
                    className="bg-white border-2 border-black rounded-full max-md:hidden"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="bi bi-arrow-down-short h-[20px] w-[20px] text-black"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"
                      />
                    </svg>
                  </button>
                  <button
                    data-modal-target="default-modal"
                    data-modal-toggle="default-modal"
                    className="md:absolute px-4 py-2 text-sm bg-[#334462] text-white rounded-lg right-5"
                  >
                    Add your feedback
                  </button>
                </div>
              </div>
              <span className="h-0 m-0 max-md:hidden" ref={feedbackEnd}></span>
            </div>
          </div>
        </div>
      </ScrollAnimation>
      {/*Modal for Adding Feedbacks*/}
      <div
        id="default-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative w-full max-w-2xl max-h-full p-4">
          {/*Modal content*/}
          <div className="relative bg-white rounded-lg shadow">
            {/*Modal header*/}
            <div className="flex items-center justify-between p-1 border-b rounded-t md:p-5">
              <button
                type="button"
                className="inline-flex items-center justify-center w-8 h-8 text-sm text-gray-400 bg-transparent rounded-lg hover:bg-gray-200 hover:text-gray-900 ms-auto"
                data-modal-hide="default-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/*Modal body*/}
            <div className="p-4 space-y-4 md:p-5">
              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  <input
                    type="file"
                    className="hidden"
                    name="img-selecter"
                    id="img-selecter"
                  ></input>
                  <label
                    htmlFor="img-selecter"
                    className="cursor-pointer w-[50px] aspect-square rounded-full bg-[#006E8A17] flex justify-center items-center"
                  >
                    <img
                      className="w-[32px] mb-1"
                      src={camera_icon}
                      alt="company-logo"
                    ></img>
                  </label>
                  <div className="block">
                    <label htmlFor="img-selecter" className="text-sm font-semibold "> Your company logo</label>
                  </div>
                </div>
                <div>
                  <div className="block mb-2">
                    <label
                      htmlFor="company_name"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Company name
                    </label>
                    <input
                      type="text"
                      id="company_name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      required
                    />
                  </div>
                </div>
                <div>
                  <div className="block mb-2">
                    <label
                      htmlFor="feedback"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Your feedback
                    </label>
                    <textarea
                      id="feedback"
                      rows="4"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    ></textarea>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-end gap-2">
                    <StarRating onRatingChange={handleRatingChange} />
                    <p className="hidden">{rating}</p>
                  </div>
                </div>
                <div className="flex justify-center w-full">
                  <button className=" px-4 py-2 text-sm bg-[#334462] text-white rounded-lg">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
