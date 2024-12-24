import ScrollAnimation from "react-animate-on-scroll";

import logo from "/logo.png";
import banner from "./../assets/Contact/banner.png";

import call_y from "./../assets/Contact/call-yellow.png";
import location_y from "./../assets/Contact/location-yellow.png";
import email_y from "./../assets/Contact/email-yellow.png";

function Contact() {
  return (
    <div>
      {/*banner*/}
      <div
        className="relative flex bg-center bg-cover h-[50dvh] max-md:h-dvh"
        style={{ backgroundImage: `url(${banner})` }}
      >
        {/*breadcrumbs + button*/}
        <div className="absolute right-0 flex items-end justify-between w-full h-full px-12 py-6 text-white xl:w-2/3 max-md:px-6 max-sm:flex-col max-sm:items-start max-sm:justify-end max-sm:gap-6">
          <p className="flex items-center gap-3">
            Home{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="text-[#F6CE15] bi bi-caret-right"
              viewBox="0 0 16 16"
            >
              <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753" />
            </svg>{" "}
            Contact
          </p>
          <button className="px-4 py-2 rounded-lg bg-[#F6CE15] hover:scale-90 transition-all w-fit text-white">
            Booking Now
          </button>
        </div>
      </div>
      {/*form container*/}
      <div className="flex justify-between px-12 pt-6 h-fit max-md:px-6 max-xl:flex-col max-xl:gap-6 max-xl:pb-6">
        <div className="flex justify-center xl:w-1/3 xl:-translate-y-[150px] h-[538px] max-xl:h-fit">
          <span className="flex flex-col gap-6 p-6 max-xl:w-full bg-[#000000D4] text-white rounded-3xl">
            <h1 className="text-3xl font-semibold text-[#F6CE15]">
              Contact <span className="font-semibold text-white"> Us</span>
            </h1>
            <p className="text-sm max-sm:text-xs">
              We are always looking for new opportunities to work with you.
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-6 max-[425px]:flex-col">
                <span className="border-1 border-[#F6CE15] h-16 w-16 flex justify-center items-center">
                  <img src={call_y} alt="" className="w-10 h-10" />
                </span>
                <span className="flex flex-col max-[425px]:w-full">
                  <p className="text-[#F6CE15] uppercase">Hotline</p>{" "}
                  <p>+94 77 976 7127</p>
                </span>
              </div>
              <div className="flex items-center gap-6 max-[425px]:flex-col">
                <span className="border-1 border-[#F6CE15] h-16 w-16 flex justify-center items-center">
                  <img src={email_y} alt="" className="w-10 h-10" />
                </span>
                <span className="flex flex-col max-[425px]:w-full">
                  <p className="text-[#F6CE15] uppercase">email</p>{" "}
                  <p>hello@SLCHOPSHOP.com</p>
                </span>
              </div>
              <div className="flex items-center gap-6 max-[425px]:flex-col">
                <span className="border-1 border-[#F6CE15] h-16 w-16 flex justify-center items-center">
                  <img src={location_y} alt="" className="w-10 h-10" />
                </span>
                <span className="flex flex-col max-[425px]:w-full">
                  <p className="text-[#F6CE15] uppercase">address</p>{" "}
                  <p>
                    SL Chop shop, <br />
                    Katugasthota, Kandy,
                    <br /> Sri lanka, 21120
                  </p>
                </span>
              </div>
            </div>
          </span>
        </div>
        <div className="flex justify-center xl:w-2/3 xl:h-full">
          <form className="w-full xl:pl-3">
            <div className="grid gap-6 mb-6">
              <div>
                <input
                  type="text"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#F6CE15] focus:border-[#F6CE15] block w-full p-2.5 "
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <input
                  type="tel"
                  id="phone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#F6CE15] focus:border-[#F6CE15] block w-full p-2.5 "
                  placeholder="Your contact number (123-456-7890)"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#F6CE15] focus:border-[#F6CE15] block w-full p-2.5 "
                  placeholder="Your email address"
                  required
                />
              </div>
              <div className="mb-6">
                <textarea
                  id="message"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-[#F6CE15] focus:border-[#F6CE15]"
                  placeholder="Message"
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="text-white bg-[#F6CE15] hover:bg-[#334462] focus:ring-4 focus:outline-none focus:ring-[#F6CE15] font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      {/*contact info*/}
      <ScrollAnimation animateIn="fadeIn">
        <div className="flex flex-col gap-6 px-12 pb-6 h-fit max-md:px-6">
          <h1 className="text-5xl">Find Us</h1>
          <div className="flex gap-6 max-lg:flex-col">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1978.668546318611!2d80.63388199018216!3d7.315977524442334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3676870517f09%3A0x9b666d4a8e5e5e67!2sSL%20CHOP%20SHOP!5e0!3m2!1sen!2slk!4v1734890205483!5m2!1sen!2slk"
              style={{ border: "0px" }}
              allowFullScreen=""
              loading="lazy"
              className="w-2/3 max-lg:w-full max-lg:h-[300px]"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            {/*contact us*/}
            <div className="bg-[#00000008] w-1/3 max-lg:w-full py-6 px-6 flex flex-col justify-center gap-12 items-center text-center text-sm">
              <h1 className="uppercase text-[#334462] text-3xl font-semibold">
                Follow Us
              </h1>
              <p>
                Follow us on social media and join our social network & customer
                community to share and celebrate
              </p>
              <div className="flex flex-col gap-12 max-lg:flex-row">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="scale-150 bi bi-tiktok"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
                  </svg>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="scale-150 bi bi-youtube"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                  </svg>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="scale-150 bi bi-whatsapp"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <span className="flex flex-col items-center justify-center gap-6 px-6">
            <p className="text-center md:w-2/3 lh-lg max-md:text-sm">
              We’d love to hear from you! Whether you have a question, need a
              consultation, or want to schedule a fitting, the team at SL Chop
              Shop is here to assist you.
            </p>
          </span>
        </div>
      </ScrollAnimation>
      {/*appointments*/}
      <ScrollAnimation animateIn="fadeIn">
        <div className="flex flex-col bg-[#000000D4]">
          <div className="flex flex-col gap-6 px-12 py-6 text-white max-md:px-6">
            <h1 className="text-2xl">Make an Appointment</h1>
            <h1 className="text-5xl font-semibold">
              Book <span className="text-[#F6CE15] font-semibold"> Us</span>
            </h1>
          </div>
          <div className="px-12 py-6 max-md:px-6">
            <form className="flex flex-col items-end">
              {/*main text fields*/}
              <div className="grid w-full gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    First name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#F6CE15] focus:border-[#F6CE15] block w-full p-2.5 "
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="last_name"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Last name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#F6CE15] focus:border-[#F6CE15] block w-full p-2.5 "
                    placeholder="Doe"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone2"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Phone number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone2"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#F6CE15] focus:border-[#F6CE15] block w-full p-2.5 "
                    placeholder="123-456-7890"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    required
                  />
                </div>
                <div className="max-md:hidden"></div>
                <div>
                  <label
                    htmlFor="vtype"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Vehicle Type <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="vtype"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#F6CE15] focus:border-[#F6CE15] block w-full p-2.5 "
                    placeholder="Sedan, Luxury..."
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="v_num"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Vehicle Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="v_num"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#F6CE15] focus:border-[#F6CE15] block w-full p-2.5 "
                    placeholder="WP-1010"
                    required
                  />
                </div>
              </div>
              {/*select services*/}
              <div className="w-full text-sm font-medium text-white">
                Select Services <span className="text-red-500">*</span>
              </div>
              {/*chk grid*/}
              <div className="grid w-full grid-cols-4 gap-4 py-6 text-white max-md:grid-cols-2 max-sm:grid-cols-1">
                <div className="flex items-center">
                  <input
                    id="wash-grooming"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <label
                    htmlFor="wash-grooming"
                    className="text-sm font-medium text-white ms-2"
                  >
                    Wash and Grooming
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="undercarriage-degreasing"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <label
                    htmlFor="undercarriage-degreasing"
                    className="text-sm font-medium text-white ms-2"
                  >
                    Undercarriage Degreasing
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="hybrid-services"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <label
                    htmlFor="hybrid-services"
                    className="text-sm font-medium text-white ms-2"
                  >
                    Hybrid Services
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="mechanical"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <label
                    htmlFor="mechanical"
                    className="text-sm font-medium text-white ms-2"
                  >
                    Mechanical
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="lube-services"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <label
                    htmlFor="lube-services"
                    className="text-sm font-medium text-white ms-2"
                  >
                    Lube Services
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="windscreen-treatments"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <label
                    htmlFor="windscreen-treatments"
                    className="text-sm font-medium text-white ms-2"
                  >
                    Windscreen Treatments
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="wheel-alignment"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <label
                    htmlFor="wheel-alignment"
                    className="text-sm font-medium text-white ms-2"
                  >
                    Wheel Alignment
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="detailing"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <label
                    htmlFor="detailing"
                    className="text-sm font-medium text-white ms-2"
                  >
                    Detailing
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="exterior-interior-deco"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <label
                    htmlFor="exterior-interior-deco"
                    className="text-sm font-medium text-white ms-2"
                  >
                    Exterior & Interior Detailing
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="inspect-reports"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <label
                    htmlFor="inspect-reports"
                    className="text-sm font-medium text-white ms-2"
                  >
                    Inspection Reports
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="battery-services"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <label
                    htmlFor="battery-services"
                    className="text-sm font-medium text-white ms-2"
                  >
                    Battery Services
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="body-shop"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <label
                    htmlFor="body-shop"
                    className="text-sm font-medium text-white ms-2"
                  >
                    Body Shop
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="engine-tuneups"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <label
                    htmlFor="engine-tuneups"
                    className="text-sm font-medium text-white ms-2"
                  >
                    Engine Tune ups
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="insuarance-claims"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <label
                    htmlFor="insuarance-claims"
                    className="text-sm font-medium text-white ms-2"
                  >
                    Insurance Claims
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="nano-treatements"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <label
                    htmlFor="nano-treatements"
                    className="text-sm font-medium text-white ms-2"
                  >
                    Nano Treatments
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="periodic-maintenance"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <label
                    htmlFor="periodic-maintenance"
                    className="text-sm font-medium text-white ms-2"
                  >
                    Periodic Maintenances
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="wash-grooming2"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <label
                    htmlFor="wash-grooming2"
                    className="text-sm font-medium text-white ms-2"
                  >
                    Wash and Grooming
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="part-replacements"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <label
                    htmlFor="part-replacements"
                    className="text-sm font-medium text-white ms-2"
                  >
                    Part Replacements
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="full-paints"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <label
                    htmlFor="full-paints"
                    className="text-sm font-medium text-white ms-2"
                  >
                    Full Paints
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="other"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <label
                    htmlFor="other"
                    className="text-sm font-medium text-white ms-2"
                  >
                    Other
                  </label>
                </div>
              </div>
              {/*date, time, extra...*/}
              <div className="grid w-full gap-6 mb-6 md:grid-cols-3">
                <div>
                  <label
                    htmlFor="b_name"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Branch name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="b_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#F6CE15] focus:border-[#F6CE15] block w-full p-2.5 "
                    placeholder="Kandy"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="date"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    id="date"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#F6CE15] focus:border-[#F6CE15] block w-full p-2.5 "
                    placeholder="Doe"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="extra"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Anything else?
                  </label>
                  <input
                    type="text"
                    id="extra"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#F6CE15] focus:border-[#F6CE15] block w-full p-2.5 "
                    placeholder="any info..."
                  />
                </div>
                <div className="max-md:hidden"></div>
                <div>
                  <label
                    htmlFor="time"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Time <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="time"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#F6CE15] focus:border-[#F6CE15] block w-full p-2.5 "
                    placeholder="10:00AM"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="text-white bg-[#F6CE15] hover:bg-[#334462] focus:ring-4 focus:outline-none focus:ring-[#F6CE15] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              >
                Book Appointment
              </button>
            </form>
          </div>
        </div>
      </ScrollAnimation>
      {/*logo section*/}
      <div className="flex flex-col items-center justify-center gap-6 px-12 py-6 h-fit max-md:px-6">
        <img src={logo} alt="" />
        <div className="inline-flex">
          <h1 className="text-5xl text-center preahvihear max-md:text-3xl max-sm:text-xl">
            <span className="pontano text-8xl text-[#F6CE15] max-md:text-5xl max-sm:text-3xl">
              “
            </span>
            SL Chop Shop – Where Precision Meets Performance!
            <span className="pontano text-8xl text-[#F6CE15] max-md:text-5xl max-sm:text-3xl">
              ”
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Contact;
