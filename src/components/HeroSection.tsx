const HeroSection = () => {
  return (
    <div className="relative mt-10 grid h-[55vh] grid-cols-10 place-content-center pl-5 sm:pl-10 md:pl-0 2xl:mt-16 2xl:h-[60vh]">
      <div className="3xl:text-[80px] col-span-4 flex h-full flex-col justify-end text-[28px] font-medium sm:text-[30px] md:col-span-4 md:justify-center md:text-[36px] lg:text-[56px] 2xl:text-[73px]">
        <p className="z-20 whitespace-nowrap md:ml-12">
          Your <span className="font-bold text-sky-400">privacy</span>
        </p>
        <p className="z-20 whitespace-nowrap md:ml-12 lg:-mt-5">Our priority</p>
      </div>
      <div className="relative col-span-6 row-span-2 flex h-full items-center justify-center md:col-span-3 md:row-span-1">
        <div className="fadeInUp z-20 -mr-28 sm:-mr-0 md:-ml-20">
          <img
            src="/assets/images/hero_new_bot.png"
            alt="hero bot"
            className="z-10 mx-auto hidden h-auto w-[75%] sm:block 2xl:w-full"
          />
          <img
            src="/assets/images/hero_new_bot.png"
            alt="hero bot"
            className="z-10 min-h-[300px] min-w-[300px] sm:hidden"
          />
        </div>
        <div className="absolute inset-0 z-10 hidden -translate-x-10 translate-y-20 rotate-3 md:block lg:-translate-x-6 lg:translate-y-28 2xl:-translate-x-4 2xl:translate-y-36">
          <img
            src="/assets/images/clip_path.png"
            alt="hero background"
            className="h-auto w-[70%] opacity-50 lg:w-[62%]"
          />
        </div>
      </div>
      <div className="col-span-4 row-start-2 flex h-full pt-5 md:col-span-3 md:row-start-auto md:mt-0 md:items-center">
        <div className="md:-ml-5 lg:-ml-10 lg:w-fit">
          <p className="w-[30%] font-medium sm:text-[18px] md:whitespace-nowrap lg:text-[26px] 2xl:text-[36px]">
            Protected. Secure. Reliable.
          </p>
          <h1 className="mb-1 text-sm">
            Private Crypto Search Engine &amp; Tools for Web 3.0
          </h1>
        </div>
      </div>
      <div className="absolute -bottom-[15%] -left-[15%] z-40 h-8 w-screen bg-gradient-to-t from-[#031B33] via-[#031A32] to-transparent lg:h-32"></div>
    </div>
  );
};

export default HeroSection;
