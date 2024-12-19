import { Link } from "wouter";
import burger from "./../assets/burger.svg";
import logo from "/logo.png";

import wa from "./../assets/Nav/social/whatsapp.png";
import yt from "./../assets/Nav/social/yt.png";
import tk from "./../assets/Nav/social/tiktok.png";

function Nav({ inLanding }) {
  return (
    <div
      className={`w-full h-fit flex justify-center items-center font-thin text-lg z-50 max-[940px]:justify-between ${
        inLanding ? " absolute top-0 bg-transparent" : " bg-black"
      }`}
    >
      {/*normal nav*/}
      <div className="flex flex-col gap-6 items-center w-full px-10 h-[20dvh] max-[940px]:hidden">
        {/*social links*/}
        <ul className="flex items-center justify-start h-full gap-6 w-fit">
          <a
            href="https://www.whatsapp.com/"
            className="text-white no-underline"
          >
            <li className="flex items-center justify-center text-nowrap px-3 cursor-pointer max-lg:text-sm max-[972px]:text-xs gap-3">
              <img src={wa} alt="social-wa" /> 077 976 7127
            </li>
          </a>
          <a
            href="https://www.youtube.com/"
            className="text-white no-underline"
          >
            <li className="flex items-center justify-center text-nowrap px-3 cursor-pointer max-lg:text-sm max-[972px]:text-xs gap-3">
              <img src={yt} alt="social-yt" /> SLCHOPSHOP
            </li>
          </a>
          <a href="https://www.tiktok.com/" className="text-white no-underline">
            <li className="flex items-center justify-center text-nowrap px-3 cursor-pointer max-lg:text-sm max-[972px]:text-xs gap-3">
              <img src={tk} alt="social-tk" /> SLCHOPSHOP
            </li>
          </a>
        </ul>
        {/*hr*/}
        <div className="w-5/6 bg-white h-[1px]"></div>
        {/*page links*/}
        <ul className="flex items-center justify-start h-full gap-6 w-fit">
          <Link href="/" className="text-white no-underline">
            <li className="flex items-center justify-center text-nowrap px-3 cursor-pointer max-lg:text-sm max-[972px]:text-xs">
              Home
            </li>
          </Link>
          <Link href="/about" className="text-white no-underline">
            <li className="flex items-center justify-center text-nowrap px-3 cursor-pointer max-lg:text-sm max-[972px]:text-xs">
              About Us
            </li>
          </Link>
          <Link href="/contact" className="text-white no-underline">
            <li className="flex items-center justify-center text-nowrap px-3 cursor-pointer max-lg:text-sm max-[972px]:text-xs">
              Contact Us
            </li>
          </Link>
          <Link href="/services" className="text-white no-underline">
            <li className="flex items-center justify-center text-nowrap px-3 cursor-pointer max-lg:text-sm max-[972px]:text-xs">
              Our Services
            </li>
          </Link>
          <Link href="/events" className="text-white no-underline">
            <li className="flex items-center justify-center  text-nowrap px-3 cursor-pointer max-lg:text-sm max-[972px]:text-xs">
              Events
            </li>
          </Link>
          <Link href="/faq" className="text-white no-underline">
            <li className="flex items-center justify-center text-nowrap px-3 cursor-pointer max-lg:text-sm max-[972px]:text-xs">
              FAQs
            </li>
          </Link>
          <Link href="/news" className="text-white no-underline">
            <li className="flex items-center justify-center text-nowrap px-3 cursor-pointer max-lg:text-sm max-[972px]:text-xs">
              News
            </li>
          </Link>
        </ul>
      </div>
      {/*burger button*/}
      <div
        className="hidden place-items-center h-[10dvh] px-10 cursor-pointer place-content-center py-6 max-[940px]:grid text-white"
        data-coreui-toggle="modal"
        data-coreui-target="#staticBackdrop"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="scale-150 bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>
      </div>
      {/*logo for small screen nav*/}
      <div className="hidden max-[940px]:block pr-6">
        <img
          src={logo}
          alt="logo-for-small-screen"
          className="h-[60px] scale-75"
        />
      </div>
      {/*Nav Modal for small screens*/}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-coreui-backdrop="false"
        data-coreui-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-coreui-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <ul className="flex flex-col items-center justify-start h-full gap-6 font-medium">
                <Link href="/" className="w-full text-white no-underline">
                  <li
                    className="flex items-center justify-center w-full text-black cursor-pointer text-nowrap max-lg:text-sm"
                    data-coreui-dismiss="modal"
                  >
                    Home
                  </li>
                </Link>
                <Link href="/about" className="w-full text-white no-underline">
                  <li
                    className="flex items-center justify-center w-full text-black cursor-pointer text-nowrap max-lg:text-sm"
                    data-coreui-dismiss="modal"
                  >
                    About Us
                  </li>
                </Link>
                <Link
                  href="/contact"
                  className="w-full text-white no-underline"
                >
                  <li
                    className="flex items-center justify-center w-full text-black cursor-pointer text-nowrap max-lg:text-sm"
                    data-coreui-dismiss="modal"
                  >
                    Contact Us
                  </li>
                </Link>
                <Link
                  href="/services"
                  className="w-full text-white no-underline"
                >
                  <li
                    className="flex items-center justify-center w-full text-black cursor-pointer text-nowrap max-lg:text-sm"
                    data-coreui-dismiss="modal"
                  >
                    Our Services
                  </li>
                </Link>
                <Link
                  href="/events"
                  className="w-full text-white no-underline"
                >
                  <li
                    className="flex items-center justify-center w-full text-black cursor-pointer text-nowrap max-lg:text-sm"
                    data-coreui-dismiss="modal"
                  >
                    Events
                  </li>
                </Link>
                <Link
                  href="/faq"
                  className="w-full text-white no-underline"
                >
                  <li
                    className="flex items-center justify-center w-full text-black cursor-pointer text-nowrap max-lg:text-sm"
                    data-coreui-dismiss="modal"
                  >
                    FAQs
                  </li>
                </Link>
                <Link
                  href="/news"
                  className="w-full text-white no-underline"
                >
                  <li
                    className="flex items-center justify-center w-full text-black cursor-pointer text-nowrap max-lg:text-sm"
                    data-coreui-dismiss="modal"
                  >
                    News
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
