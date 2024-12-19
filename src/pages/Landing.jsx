import banner from "./../assets/Landing/banner_1.png";

function Landing() {
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
    </div>
  );
}

export default Landing;
