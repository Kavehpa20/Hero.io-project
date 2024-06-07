export const LastSection = () => {
  return (
    <section className="3xl-h:max-h-[1600px] relative h-screen w-full">
      <div className="absolute left-0 right-0 top-0 z-20 h-[70px] bg-gradient-to-b from-hero-slate-970 to-transparent sm:h-[126px]"></div>
      <div className="absolute inset-0 -z-10">
        <img
          src="/assets/images/bg-body.png"
          alt="hero background img"
          className="3xl:block hidden h-full w-full object-cover"
        />
        <img
          src="/assets/images/bg-big-body.svg"
          alt="hero background img"
          className="3xl:hidden hidden h-full w-full object-cover md:block"
        />
        <img
          src="/assets/images/sm-bg-body.png"
          alt="hero background img"
          className="3xl:hidden block h-full w-full object-fill md:hidden"
        />
      </div>

      <main className="container mx-auto flex h-full flex-col items-center justify-center px-4 sm:px-0">
        <p className="text-center text-3xl font-[650] uppercase lg:text-[48px]">
          GET in touch
        </p>
        <p className="my-8 text-center font-medium text-hero-glacier-300 sm:w-[40%] 2xl:max-w-[600px] 2xl:text-lg">
          Want to learn more? Interested in working with us or if you have
          questions or need help controlling your super powers?
          <br />
          Let us know!!
        </p>
        <div className="mt-5">
          <a href="/support" target="_blank">
            <div className="flex h-[50px] w-full text-sm font-bold sm:text-base lg:max-w-fit">
              <button className="flex w-full items-center justify-center gap-1 rounded-full border-none bg-hero-pink-200 px-6 text-white shadow-xl outline-none hover:opacity-90 disabled:cursor-wait dark:text-white">
                <span className="m-auto object-fill">Send us a message</span>
              </button>
            </div>
          </a>
        </div>
      </main>
    </section>
  );
};
