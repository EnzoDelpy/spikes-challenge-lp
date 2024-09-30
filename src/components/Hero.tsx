import hero_screen from "../assets/images/vaultflow_lp_screen.png";

function Hero() {
  return (
    <section className="bg-[url('./assets/images/hero_background.jpeg')] bg-repeat-x bg-top flex justify-center">
      <div className="mb-20 pt-[14.375rem] flex flex-col gap-20 max-w-[60rem] mx-6 md:mx-8">
        <div className="flex flex-col gap-6 items-center">
          <span className="px-5 py-2 border border-[#FFFFFF4D] rounded-[3.875rem] text-center">We just raised $20M in Series B. Learn more</span>
          <div className="bg-gradient-to-b from-white to-white-opacity-0 bg-clip-text flex flex-col gap-6 items-center">
            <h1 className="text-center font-medium leading-none text-transparent text-5xl sm:text-6xl md:text-7xl lg:text-[5rem]">
              Modern analytics<br className="max-md:hidden"></br> for the modern world
            </h1>
            <p className="text-white-opacity-65 max-w-[37.5rem] text-center text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.{" "}
            </p>
          </div>

          <div className="flex pt-4 gap-4">
            <button className="px-6 py-3 text-black bg-white rounded-[3.75rem] max-sm:text-xs">Download the app</button>
            <button className="px-6 py-3 text-white border border-white rounded-[3.75rem] max-sm:text-xs">Talk to an expert</button>
          </div>
        </div>
        <img src={hero_screen} alt="Screen of the dashboard product's" className="rounded-3xl shadow-[0px_-2px_40px_0px_#BB9BFF26,_0px_-2px_10px_0px_#E9DFFF4D,_0px_0.5px_0px_0px_#FFFFFF80_inset;]"/>
      </div>
    </section>
  );
}

export default Hero;