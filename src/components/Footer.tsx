const Footer = () => {
  return (
    <footer className="h-fit w-full bg-gradient-to-t from-[#000102] via-[#020a14] to-transparent">
      <div className="3xl:max-w-[1500px] container mx-auto px-4 lg:px-2 xl:px-[5vw] 2xl:px-0">
        <div className="flex flex-col items-center justify-center gap-4 py-7 text-sm text-white sm:flex-row">
          <div className="flex gap-4 sm:items-center">
            <a href="/about">
              <p className="border-b border-transparent pb-1 hover:border-white">
                About
              </p>
            </a>
            <a href="/terms-conditions">
              <p className="border-b border-transparent pb-1 hover:border-white">
                Terms &amp; Conditions
              </p>
            </a>
          </div>
          <div className="flex gap-4 sm:items-center">
            <a href="/policy">
              <p className="border-b border-transparent pb-1 hover:border-white">
                Privacy policy
              </p>
            </a>
            <a href="/cookie-policy">
              <p className="border-b border-transparent pb-1 hover:border-white">
                Cookie Policy
              </p>
            </a>
          </div>
        </div>
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <p className="py-6 text-center text-[12px] text-[#90A9B4] sm:text-[13px]">
          Copyright © 2024 Hero.io - All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
