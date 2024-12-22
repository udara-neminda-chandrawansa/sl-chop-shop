import ScrollAnimation from "react-animate-on-scroll";

import banner from "./../assets/Contact/banner.png";
import email from "./../assets/Contact/email.png";
import location from "./../assets/Contact/location.png";
import call from "./../assets/Contact/call.png";

function Contact() {
  return (
    <div>
      {/*banner*/}
      <div
        className="relative flex bg-center bg-cover h-[50dvh] max-md:h-dvh"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="flex items-end justify-between w-full h-full px-12 py-6 text-white max-md:px-6 max-sm:flex-col max-sm:items-start max-sm:justify-end max-sm:gap-6">
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
      <div className="flex justify-between px-12 py-6 h-fit max-md:px-6 max-md:flex-col max-md:gap-6">
        <div className="flex justify-center md:w-1/3">
          <span className="flex flex-col gap-6 max-md:w-full">
            <h1 className="text-3xl font-semibold text-[#F6CE15]">
              Contact <span className="text-[#334462] font-semibold"> Us</span>
            </h1>
            <p className="text-sm max-sm:text-xs">
              We are always looking for new opportunities to work with you.
            </p>
          </span>
        </div>
        <div className="flex justify-center md:w-2/3">
          <form className="w-full md:pl-3">
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
        <div className="flex flex-col gap-6 px-12 py-6 h-fit max-md:px-6">
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
              <div className="flex items-center justify-between w-full lg:text-end max-lg:flex-col">
                <img src={email} alt="" className="w-20" />

                <p>hello@SLCHOPSHOP.com</p>
              </div>
              <div className="flex items-center justify-between w-full lg:text-end max-lg:flex-col">
                <img src={location} alt="" className="w-20" />

                <p> SL Chop shop, Katugasthota, Kandy, Sri lanka, 21120</p>
              </div>
              <div className="flex items-center justify-between w-full lg:text-end max-lg:flex-col">
                <img src={call} alt="" className="w-20" />

                <p>+94 77 976 7127</p>
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
            <form>
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    First name
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
                    Last name
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
                    htmlFor="Address"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    id="Address"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#F6CE15] focus:border-[#F6CE15] block w-full p-2.5 "
                    placeholder="201, Lane Street, Citywood"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone2"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Phone number
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
                <div>
                  <label
                    htmlFor="vtype"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Vehicle Type
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
                    htmlFor="mileage"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Mileage
                  </label>
                  <input
                    type="number"
                    id="mileage"
                    min={1}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#F6CE15] focus:border-[#F6CE15] block w-full p-2.5 "
                    placeholder="9999km"
                    required
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email2"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email2"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#F6CE15] focus:border-[#F6CE15] block w-full p-2.5 "
                  placeholder="john.doe@company.com"
                  required
                />
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
    </div>
  );
}

export default Contact;
