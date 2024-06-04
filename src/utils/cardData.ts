export interface ICard1 {
  logo: string;
  bot: string;
  background: string;
  h2p1: string;
  h2p2: string;
  h3: string;
  explain: string;
  textBtn: string;
  disable: boolean;
}

export interface ICard2 {
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
}

export const cardData1: ICard1[] = [
  {
    logo: "src/assets/images/hero_wallet_logo.svg",
    bot: "src/assets/images/hero_wallet.png",
    h2p1: "Secure",
    h2p2: "your funds",
    h3: "Hero Wallet",
    explain: `is your secure and seamless digital companion for all your web3
    adventures. Completely private, self-custody wallet, where you’re the
    only one having full control over all of the assets.`,
    textBtn: "Go to Wallet",
    disable: false,
    background: "src/assets/images/hero_wallet_bg.png",
  },
  {
    logo: "src/assets/images/hero_pay_logo.svg",
    bot: "src/assets/images/hero_pay.png",
    h2p1: "ACCEPT CRYPTO",
    h2p2: "PAYMENTS",
    h3: "Hero Pay ",
    explain: `is the ultimate Crypto Merchant Services Payment Gateway. You can accept global crypto payments through our API with zero risk. Supports 90+ crypto wallets and processed $22 million in transactions in 2023.`,
    textBtn: "Go to HeroPay",
    disable: false,
    background: "src/assets/images/hero_pay_bg.png",
  },
];

export const cardData2: ICard2[] = [
  {
    logo: "src/assets/images/hero_search_logo.svg",
    bot: "src/assets/images/hero_search.png",
    h2p1: "WEB 3",
    h2p2: "SEARCH ENGINE",
    h3: "Hero Search Engine",
    explain1: `Search & browse more privately with the `,
    explain2: `specifically built for Web3 searches. Reliable, Private & Secure browsing.`,
    textBtn: "Coming Soon",
    disable: true,
    background: "src/assets/images/hero_search_bg.png",
  },
  {
    logo: "src/assets/images/hero_browser_logo.svg",
    bot: "src/assets/images/hero_browser.png",
    h2p1: "BROWSE THE",
    h2p2: "WEB PRIVATELY",
    h3: "Hero Web3 Browser",
    explain1: `Search and browse more privately with the`,
    explain2: `Unlike Chrome and other browsers, we don’t track you.`,
    textBtn: "Coming Soon",
    disable: true,
    background: "src/assets/images/hero_wallet_bg.png",
  },
];
