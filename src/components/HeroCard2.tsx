const HeroCard2 = ({
  logo,
  bot,
  background,
  h2p1,
  h2p2,
  h3,
  explain1,
  explain2,
  textBtn,
  disable,
}: {
  logo: string;
  bot: string;
  background: string;
  h2p1: string;
  h2p2: string;
  h3: string;
  explain1: string;
  explain2: string;
  textBtn: string;
  disable: boolean;
}) => {
  return (
    <div>
      <div className="pb-4 pl-4">
        <img
          src={logo}
          alt="Hero Wallet"
          className="h-auto w-[60%] sm:w-auto"
        />
      </div>
      <div className="relative flex min-h-[257px] w-full flex-col rounded-lg p-5">
        <h2 className="text-[20px] font-extrabold uppercase leading-7 md:text-[24px]">
          {h2p1}
        </h2>
        <h2 className="text-[20px] font-extrabold uppercase leading-7 md:text-[24px]">
          {h2p2}
        </h2>
        <h3 className="z-20 mt-6 max-w-[305px] text-[14px] text-hero-glacier-50 md:text-[12px]">
          {explain1} <span className="mr-1 text-[15px] font-bold">{h3}</span>,{" "}
          {explain2}
        </h3>
        <span className="grow"></span>
        <div className="mt-4 flex items-center gap-5">
          <button
            className="min-h-[36px] min-w-[83px] cursor-not-allowed rounded-full border-none bg-hero-pink-200 px-3 text-[10px] font-bold opacity-50 outline-none 2xl:text-[12px]"
            disabled={disable}
          >
            {textBtn}
          </button>

          <button className="hover:bg-hero-slate-850/90 bg-hero-slate-850 min-h-[36px] min-w-[83px] cursor-not-allowed rounded-full border border-hero-slate-400 px-3 text-[10px] font-bold opacity-50 outline-none 2xl:text-[12px]">
            Learn more
          </button>
        </div>
        <div className="absolute -right-10 -top-20 h-fit sm:right-0 md:-right-8 lg:-top-24">
          <img
            src={bot}
            alt="Hero bot"
            className="h-auto w-[11rem] sm:w-[16rem] md:w-[11rem] lg:w-[18rem]"
          />
        </div>
        <div className="absolute inset-0 -z-10 overflow-hidden rounded-lg">
          <img
            src={background}
            alt="hero wallet background"
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroCard2;
