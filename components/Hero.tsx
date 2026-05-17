export default function Hero() {
  return (
    <div
      id="home"
      className="flex flex-col items-center mt-40 md:mt-50 px-4"
    >
      <img
        src="/profile.svg"
        alt="myProfile"
        className="rounded-full h-44 w-44 sm:h-52 sm:w-52 md:h-60 md:w-50 animate-float transition-transform duration-300 hover:scale-105 shadow-[0_0_40px_rgba(59,130,246,0.4)]"
      />

      <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl pt-5 text-center">
        Hi I'm Shubham Awasthi.
      </h1>

      <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-center">
        Software Engineer
      </h1>

      <div className="mt-3 p-2 max-w-2xl">
        <p className="text-gray-700 text-center text-sm sm:text-base">
          Adaptable developer with a track record of onboarding users to live
          platforms and contributing to the open-source ecosystem.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-5">

        <button className="border border-black bg-black text-white rounded-md p-2 hover:bg-gray-900 w-full sm:w-auto">
          Hire me!
        </button>

        <button className="relative text-green-500 border rounded-xl border-black py-2 px-8 bg-black text-sm sm:text-base w-full sm:w-auto">
          
          <span className="absolute left-3 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>

          Available for collaboration
        </button>

      </div>
    </div>
  );
}