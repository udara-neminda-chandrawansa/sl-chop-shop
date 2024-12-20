import { Link } from "wouter";

import email from "./../assets/Contact/email.png";
import location from "./../assets/Contact/location.png";
import call from "./../assets/Contact/call.png";

function Footer() {
  return (
    <footer className="h-fit py-6 max-md:py-3 bg-[#0000000F] gap-12 max-md:gap-6 flex flex-col border-t-[1px] bg-no-repeat bg-center font-normal bg-contain px-12 max-md:px-6 max-sm:px-3 text-lg max-lg:text-base max-sm:pt-3 max-md:text-sm">
      <h1 className="text-5xl font-bold text-center uppercase max-md:text-3xl">
        SL CHOP SHOP
      </h1>
      <div className="flex items-center justify-center gap-6 h-1/4 max-md:h-fit">
        <p className="text-justify sm:text-center">
          Welcome to SL Chop Shop, your trusted destination for professional car
          repair and maintenance services. With years of experience and a
          passion for automobiles, we are dedicated to keeping your vehicle
          running at its best. At SL Chop Shop, we specialize in top-quality
          repairs, routine maintenance, and custom solutions for all makes and
          models. Whether it's a simple oil change, a complex engine repair, or
          restoring a vehicle to its former glory, our skilled mechanics and
          state-of-the-art tools ensure every job is done right the first time.
        </p>
      </div>

      <div className="flex items-center h-1/4 max-sm:h-fit max-sm:py-3">
        <ul className="flex w-full justify-evenly h-fit max-sm:flex-col max-sm:gap-3">
          <li>
            <Link href="/" className={"font-semibold"}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className={"font-semibold"}>
              About Us
            </Link>
          </li>
          <li>
            <Link href="/contact" className={"font-semibold"}>
              Contact Us
            </Link>
          </li>
          <li>
            <Link href="/services" className={"font-semibold"}>
              Our Services
            </Link>
          </li>
          <li>
            <Link href="/events" className={"font-semibold"}>
              Events
            </Link>
          </li>
          <li>
            <Link href="/faq" className={"font-semibold"}>
              FAQs
            </Link>
          </li>
          <li>
            <Link href="/news" className={"font-semibold"}>
              News
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex items-center h-1/4">
        <ul className="flex justify-between w-full max-sm:flex-col max-sm:gap-3">
          <li className="flex items-center gap-6">
            <img src={email} alt="email" className="w-5 h-5" />
            <p> hello@SLCHOPSHOP.com </p>
          </li>
          <li className="flex items-center gap-6">
            <img src={location} alt="email" className="w-5 h-5" />
            <p> SL Chop shop, Katugasthota, Kandy, Sri lanka, 21120</p>
          </li>
          <li className="flex items-center gap-6">
            <img src={call} alt="email" className="w-5 h-5" />
            <p> +94 77 976 7127</p>
          </li>
        </ul>
      </div>
      <div className="h-1/4 border-t-2 optima tracking-widest text-center border-t-[#00091B] flex items-center justify-center">
        <p className="pt-6 max-sm:text-xs">
          2024 © All Rights Reserved | Designed & Developed by Silicon Radon
          Networks (Pvt) Ltd.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
