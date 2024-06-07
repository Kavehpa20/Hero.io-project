import { useState } from "react";
import { ICoin, coinsData } from "../utils/coinsData";

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const hamburgerMenu = () => {
    if (hidden === true) setHidden(false);
    if (hidden === false) setHidden(true);
  };
  return (
    <>
      <div className="fixed left-0 right-0 top-0 z-40 h-[90px] bg-gradient-to-b from-hero-slate-970 via-hero-slate-970 to-transparent pt-[20px] sm:h-[126px] md:pt-[47px]">
        <a href="/market">
          <div className="fixed left-0 right-0 top-0 z-40 flex h-[40px] translate-y-0 cursor-pointer items-center overflow-hidden bg-black transition-all duration-300">
            <div className="marquee">
              <div className="marquee-content">
                {coinsData.map((coin: ICoin) => (
                  <div
                    key={coin.id}
                    className="marquee-item flex h-full items-center justify-center gap-1 rounded px-[7px] py-[3px]"
                  >
                    <div>
                      <p className="rounded-sm bg-slate-600/30 px-[5px] py-[2px] text-[11px] text-gray-200">
                        {coin.id}
                      </p>
                    </div>
                    <div>
                      <div className="flex h-6 w-6 rounded-full bg-white/10">
                        <img
                          src={coin.icon}
                          alt={coin.name}
                          className="m-auto h-5 w-5 rounded-full object-cover"
                        />
                      </div>
                    </div>
                    <p className="line-clamp-1 max-w-fit grow text-ellipsis text-sm font-bold uppercase">
                      {coin.symbol}
                    </p>
                    <p className="line-clamp-1 max-w-fit grow text-ellipsis whitespace-nowrap text-sm font-[400]">
                      {coin.price}
                    </p>
                    <div
                      className={`flex w-fit items-center justify-center gap-1 rounded p-1 px-2 text-${coin.color} transition-all duration-200`}
                    >
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="8"
                          height="7"
                          className="rotate-180"
                          viewBox="0 0 8 7"
                          fill="none"
                        >
                          <path
                            d="M7.66667 0.333373L0.333336 0.333374C0.272628 0.333399 0.21308 0.350002 0.161117 0.381391C0.109154 0.412781 0.0667505 0.457765 0.0384817 0.51149C0.010213 0.565214 -0.0028473 0.625638 0.000710363 0.686242C0.00426803 0.746845 0.0243085 0.805326 0.0586691 0.855374L3.72534 6.18871C3.75597 6.23326 3.79698 6.26969 3.84483 6.29486C3.89268 6.32002 3.94594 6.33318 4 6.33318C4.05407 6.33318 4.10733 6.32002 4.15518 6.29486C4.20303 6.26969 4.24404 6.23326 4.27467 6.18871L7.94134 0.855373C7.9757 0.805325 7.99574 0.746844 7.9993 0.68624C8.00285 0.625637 7.98979 0.565213 7.96152 0.511488C7.93326 0.457764 7.89085 0.412779 7.83889 0.38139C7.78693 0.35 7.72738 0.333397 7.66667 0.333373Z"
                            className={`fill-${coin.color}`}
                          ></path>
                        </svg>
                      </div>
                      <p className="text-sm font-bold transition-all duration-200">
                        {coin.changePrice}
                      </p>
                      <p className="text-sm font-bold transition-all duration-200">
                        {`(${coin.changePercentPrice})`}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </a>
        <header className="3xl:max-w-[1500px] borderColor-blue-slate-400 container mx-auto flex translate-y-10 items-center gap-2 px-4 transition-all duration-300 sm:border-none sm:pb-0 md:translate-y-[10px] lg:px-2 xl:px-[5vw] 2xl:translate-y-10 2xl:px-0">
          <a href="/" className="active cursor-pointer" aria-current="page">
            <div>
              <svg
                className="w-[90px] sm:h-[50px] sm:w-[138px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 138 53"
                fill="none"
              >
                <path
                  d="M26.7419 52.9996L40.6436 46.0875L41.5037 43.6693L42.9892 39.4874L33.2619 34.6499L26.7419 52.9996Z"
                  fill="#5EC2EE"
                ></path>
                <path
                  d="M29.9058 2.24916L26.5543 0.589844L23.2029 2.24916L0.849304 13.3678L4.7765 24.4441L26.5489 13.6188H26.5543H26.5597L48.3321 24.4441L52.2593 13.3678L29.9058 2.24916Z"
                  fill="#5EC2EE"
                ></path>
                <path
                  d="M6.18622 28.4113L10.1188 39.4875L11.6035 43.6694L12.4645 46.0877L26.3662 52.9998L19.8454 34.6501L26.5545 31.3199L42.9901 39.4875L46.9227 28.4113L26.5545 18.2901L6.18622 28.4113Z"
                  fill="#5EC2EE"
                ></path>
                <path
                  d="M26.7417 52.9996L33.2617 34.6499L42.989 39.4874L40.6434 46.0875L26.7417 52.9996Z"
                  fill="#00579B"
                ></path>
                <path
                  d="M42.9895 39.4874L33.2622 34.6499L31.8101 38.7646L41.5041 43.6693L42.9895 39.4874Z"
                  fill="url(#paint0_linear_80_721)"
                ></path>
                <path
                  d="M42.9898 39.4875L26.5542 31.3199V18.2901L46.9225 28.4113L42.9898 39.4875Z"
                  fill="#5EC2EE"
                ></path>
                <path
                  d="M29.9056 2.24916L52.2592 13.3678L48.332 24.4441L26.5596 13.6188H26.5542V0.589844L29.9056 2.24916Z"
                  fill="#5EC2EE"
                ></path>
                <path
                  d="M26.3662 52.9997L19.8454 34.65L10.1188 39.4875L12.4645 46.0877L26.3662 52.9997Z"
                  fill="#00579B"
                ></path>
                <path
                  d="M10.1188 39.4875L19.8454 34.65L21.2983 38.7647L11.6035 43.6694L10.1188 39.4875Z"
                  fill="url(#paint1_linear_80_721)"
                ></path>
                <path
                  d="M10.1188 39.4875L26.5545 31.3199V18.2901L6.18622 28.4113L10.1188 39.4875Z"
                  fill="#5EC2EE"
                ></path>
                <path
                  d="M23.2029 2.24916L0.849304 13.3678L4.7765 24.4441L26.5489 13.6188H26.5543V0.589844L23.2029 2.24916Z"
                  fill="#5EC2EE"
                ></path>
                <path
                  d="M85.8583 14.4795V38.7023H81.0001V28.3955H70.6236V38.7023H65.7653V14.4795H70.6236V24.4393H81.0001V14.4795H85.8583Z"
                  fill="#5EC2EE"
                ></path>
                <path
                  d="M105.879 30.5479H91.8242C91.9394 31.9358 92.4253 33.0235 93.2819 33.8102C94.1378 34.597 95.1909 34.9901 96.4399 34.9901C98.2445 34.9901 99.5287 34.2155 100.292 32.665H105.532C104.977 34.5164 103.913 36.0371 102.34 37.2284C100.766 38.4205 98.8348 39.0155 96.5442 39.0155C94.6928 39.0155 93.0332 38.6048 91.564 37.7834C90.0948 36.9628 88.9495 35.7999 88.1282 34.2955C87.3069 32.7917 86.8962 31.0569 86.8962 29.0902C86.8962 27.1236 87.3008 25.3542 88.1106 23.8498C88.9204 22.346 90.0541 21.1899 91.5111 20.3794C92.9688 19.5696 94.6461 19.165 96.5429 19.165C98.4397 19.165 100.007 19.5588 101.453 20.3449C102.899 21.1316 104.021 22.2478 104.819 23.6939C105.618 25.1401 106.017 26.7997 106.017 28.6742C106.017 29.3681 105.97 29.9929 105.878 30.5479H105.879ZM100.986 27.2863C100.963 26.0366 100.512 25.0364 99.633 24.2842C98.7534 23.5326 97.678 23.1565 96.406 23.1565C95.2024 23.1565 94.1907 23.5211 93.3693 24.2496C92.548 24.9781 92.0445 25.9906 91.8595 27.2863H100.986Z"
                  fill="#5EC2EE"
                ></path>
                <path
                  d="M114.492 20.0676C115.498 19.4896 116.649 19.2002 117.944 19.2002V24.3017H116.66C115.133 24.3017 113.982 24.6609 113.207 25.3772C112.432 26.0948 112.044 27.3438 112.044 29.1254V38.7036H107.186V19.478H112.044V22.4625C112.669 21.4446 113.485 20.6464 114.491 20.0683L114.492 20.0676Z"
                  fill="#5EC2EE"
                ></path>
                <path
                  d="M122.125 37.7834C120.645 36.9628 119.482 35.7999 118.637 34.2955C117.792 32.7917 117.371 31.0569 117.371 29.0902C117.371 27.1236 117.804 25.3888 118.672 23.885C119.539 22.3813 120.725 21.2191 122.229 20.397C123.733 19.5764 125.41 19.165 127.261 19.165C129.111 19.165 130.789 19.5764 132.292 20.397C133.796 21.2184 134.982 22.3813 135.85 23.885C136.717 25.3895 137.151 27.1243 137.151 29.0902C137.151 31.0562 136.705 32.7924 135.814 34.2955C134.923 35.7999 133.72 36.9621 132.205 37.7834C130.69 38.6048 128.995 39.0155 127.121 39.0155C125.247 39.0155 123.604 38.6048 122.124 37.7834H122.125ZM129.604 34.1396C130.379 33.712 130.997 33.0695 131.461 32.2136C131.924 31.3577 132.155 30.3168 132.155 29.0902C132.155 27.2632 131.674 25.8577 130.715 24.8738C129.755 23.8905 128.581 23.3991 127.192 23.3991C125.804 23.3991 124.642 23.8911 123.704 24.8738C122.767 25.8571 122.299 27.2626 122.299 29.0902C122.299 30.9179 122.756 32.3234 123.67 33.3067C124.583 34.29 125.735 34.7813 127.123 34.7813C128.001 34.7813 128.828 34.5679 129.603 34.1396H129.604Z"
                  fill="#5EC2EE"
                ></path>
                <defs>
                  <linearGradient
                    id="paint0_linear_80_721"
                    x1="38.3037"
                    y1="36.8959"
                    x2="36.2937"
                    y2="40.7001"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#103153"></stop>
                    <stop offset="1" stop-color="#00579B"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_80_721"
                    x1="14.8047"
                    y1="36.896"
                    x2="16.8147"
                    y2="40.7003"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#103153"></stop>
                    <stop offset="1" stop-color="#00579B"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </a>
          <div className="flex grow items-center xl:pr-[28px]">
            <ul className="mx-auto hidden h-[50px] w-full max-w-[578px] items-center justify-evenly rounded-full border border-hero-slate-400 px-1 font-jakarta text-sm backdrop-blur-md md:flex lg:h-[57px] lg:px-0">
              <a href="/wallet" target="">
                <li className="group relative flex h-full cursor-pointer flex-col items-center justify-center overflow-hidden transition-colors duration-200">
                  <p className="group-hover:rotate-x header-text-color translate-y-[10px] font-[400] opacity-100 transition-all duration-500 group-hover:-translate-y-10 group-hover:scale-75 group-hover:opacity-0">
                    Wallet
                  </p>
                  <p className="translate-y-10 scale-75 font-[500] text-sky-200 opacity-0 transition-all duration-300 group-hover:-translate-y-[10px] group-hover:scale-100 group-hover:opacity-100">
                    Wallet
                  </p>
                </li>
              </a>
              <a href="/market" target="">
                <li className="group relative flex h-full cursor-pointer flex-col items-center justify-center overflow-hidden transition-colors duration-200">
                  <p className="group-hover:rotate-x header-text-color translate-y-[10px] font-[400] opacity-100 transition-all duration-500 group-hover:-translate-y-10 group-hover:scale-75 group-hover:opacity-0">
                    Market
                  </p>
                  <p className="translate-y-10 scale-75 font-[500] text-sky-200 opacity-0 transition-all duration-300 group-hover:-translate-y-[10px] group-hover:scale-100 group-hover:opacity-100">
                    Market
                  </p>
                </li>
              </a>
              <a href="/hero-token" target="">
                <li className="group relative flex h-full cursor-pointer flex-col items-center justify-center overflow-hidden transition-colors duration-200">
                  <p className="group-hover:rotate-x header-text-color translate-y-[10px] font-[400] opacity-100 transition-all duration-500 group-hover:-translate-y-10 group-hover:scale-75 group-hover:opacity-0">
                    Token
                  </p>
                  <p className="translate-y-10 scale-75 font-[500] text-sky-200 opacity-0 transition-all duration-300 group-hover:-translate-y-[10px] group-hover:scale-100 group-hover:opacity-100">
                    Token
                  </p>
                </li>
              </a>
              <a href="https://pay.hero.io" target="_blank">
                <li className="group relative flex h-full cursor-pointer flex-col items-center justify-center overflow-hidden transition-colors duration-200">
                  <p className="group-hover:rotate-x header-text-color translate-y-[10px] font-[400] opacity-100 transition-all duration-500 group-hover:-translate-y-10 group-hover:scale-75 group-hover:opacity-0">
                    Merchant Services
                  </p>
                  <p className="translate-y-10 scale-75 font-[500] text-sky-200 opacity-0 transition-all duration-300 group-hover:-translate-y-[10px] group-hover:scale-100 group-hover:opacity-100">
                    Merchant Services
                  </p>
                </li>
              </a>
              <a href="/private-browser" target="">
                <li className="group relative flex h-full cursor-pointer flex-col items-center justify-center overflow-hidden transition-colors duration-200">
                  <p className="group-hover:rotate-x header-text-color translate-y-[10px] font-[400] opacity-100 transition-all duration-500 group-hover:-translate-y-10 group-hover:scale-75 group-hover:opacity-0">
                    Browser
                  </p>
                  <p className="translate-y-10 scale-75 font-[500] text-sky-200 opacity-0 transition-all duration-300 group-hover:-translate-y-[10px] group-hover:scale-100 group-hover:opacity-100">
                    Browser
                  </p>
                </li>
              </a>
              <a href="/support" target="">
                <li className="group relative flex h-full cursor-pointer flex-col items-center justify-center overflow-hidden transition-colors duration-200">
                  <p className="group-hover:rotate-x header-text-color translate-y-[10px] font-[400] opacity-100 transition-all duration-500 group-hover:-translate-y-10 group-hover:scale-75 group-hover:opacity-0">
                    Support
                  </p>
                  <p className="translate-y-10 scale-75 font-[500] text-sky-200 opacity-0 transition-all duration-300 group-hover:-translate-y-[10px] group-hover:scale-100 group-hover:opacity-100">
                    Support
                  </p>
                </li>
              </a>
            </ul>
          </div>
          <div className="hidden items-center gap-6 md:block">
            <div className="hidden">
              <img
                className="h-[36px] w-[35px] rounded-full"
                src="/assets/user-icon.svg"
                alt="hero user image"
              />
            </div>
            <a href="https://wallet.hero.io/signin" target="_blank">
              <div className="flex h-[50px] w-full text-sm font-bold lg:max-w-fit">
                <button className="flex w-full rounded-[32px] border-none bg-hero-pink-300 px-6 text-base text-white shadow-xl outline-none hover:opacity-90">
                  <span className="m-auto object-fill">Wallet</span>
                </button>
              </div>
            </a>
          </div>
          <div>
            <div
              className="cursor-pointer md:hidden"
              onClick={() => hamburgerMenu()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28px"
                height="28px"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M4 6H20M4 12H20M4 18H20"
                  stroke="#fff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>

            <div
              className={`${!hidden ? "hidden" : "block"} right-25 top-25 absolute z-10 hidden cursor-pointer`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g id="Menu / Close_MD">
                  <path
                    id="Vector"
                    d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18"
                    stroke="#fff"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
        </header>
        <button className="fixed right-0 top-0 z-50 h-[40px] cursor-pointer rounded-b-md bg-black px-1 transition-all duration-300">
          <div>
            <svg
              className="rotate-0 transition-all duration-300"
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M18.2929 15.2893C18.6834 14.8988 18.6834 14.2656 18.2929 13.8751L13.4007 8.98766C12.6195 8.20726 11.3537 8.20757 10.5729 8.98835L5.68257 13.8787C5.29205 14.2692 5.29205 14.9024 5.68257 15.2929C6.0731 15.6835 6.70626 15.6835 7.09679 15.2929L11.2824 11.1073C11.673 10.7168 12.3061 10.7168 12.6966 11.1073L16.8787 15.2893C17.2692 15.6798 17.9024 15.6798 18.2929 15.2893Z"
                fill="#ffffff"
              ></path>
            </svg>
          </div>
        </button>
      </div>
      // ========= hamburger Menu ======= //
      <div
        className={`fixed inset-0 z-40 md:hidden ${hidden ? "flex" : "hidden"}`}
      >
        <div className="bg-hr-slate-830/20 absolute inset-0 backdrop-blur-lg"></div>
        <div className="z-50 m-auto flex flex-col gap-3">
          <ul className="flex flex-col items-center gap-3">
            <a href="/wallet">
              <li className="text-lg font-semibold hover:text-hr-blue-170">
                <p>Wallet</p>
              </li>
            </a>
            <a href="/market">
              <li className="text-lg font-semibold hover:text-hr-blue-170">
                <p>Market</p>
              </li>
            </a>
            <a href="/hero-token">
              <li className="text-lg font-semibold hover:text-hr-blue-170">
                <p>Token</p>
              </li>
            </a>
            <a href="https://pay.hero.io">
              <li className="text-lg font-semibold hover:text-hr-blue-170">
                <p>Merchant Services</p>
              </li>
            </a>
            <a href="/private-browser">
              <li className="text-lg font-semibold hover:text-hr-blue-170">
                <p>Browser</p>
              </li>
            </a>
            <a href="/support">
              <li className="text-lg font-semibold hover:text-hr-blue-170">
                <p>Support</p>
              </li>
            </a>
          </ul>
          <div className="hidden cursor-pointer">
            <p className="text-center text-lg font-semibold hover:text-hr-blue-170">
              Profile
            </p>
          </div>
          <a href="https://wallet.hero.io/signin" target="_blank">
            <p className="flex min-h-[37px] min-w-[102px] items-center justify-center rounded-[32px] border-none bg-hr-pink-300 text-center text-sm font-semibold shadow outline-none ring-0 hover:bg-opacity-90 sm:text-base md:h-[50px]">
              <span>Wallet</span>
            </p>
          </a>
        </div>
        <div
          className="absolute right-10 top-10 z-10 cursor-pointer"
          onClick={() => hamburgerMenu()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g id="Menu / Close_MD">
              <path
                id="Vector"
                d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18"
                stroke="#fff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </g>
          </svg>
        </div>
      </div>
      ;
    </>
  );
};
export default Navbar;
