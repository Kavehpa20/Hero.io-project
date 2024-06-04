import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import HeroIcons from "./components/HeroIcons";
import HeroSection from "./components/HeroSection";
import TextsSection from "./components/TextSection";
import HeroCard1 from "./components/HeroCard1";
import { ICard1, ICard2, cardData1, cardData2 } from "./utils/cardData";
import HeroCard2 from "./components/HeroCard2";
import { LastSection } from "./components/LastSection";
import Space from "./components/Space";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative font-jakarta text-white">
      <Navbar />
      <div className="-mt-2 overflow-hidden bg-[url('/src/assets/bg-big-body.svg')] bg-cover bg-center px-12 md:px-24">
        <div className="container mx-auto flex h-screen flex-col items-center font-jakarta">
          <main className="mt-[131px] w-full text-white">
            <SearchBar />
            <HeroIcons />
            <HeroSection />
          </main>
        </div>
      </div>
      <TextsSection />
      <section className="mb-16 mt-40 grid grid-cols-1 gap-8 px-12 text-white sm:px-8 md:px-16 lg:grid-cols-2 lg:px-32">
        {cardData1.map((card: ICard1) => (
          <HeroCard1
            key={card.h2p1}
            logo={card.logo}
            bot={card.bot}
            background={card.background}
            h2p1={card.h2p1}
            h2p2={card.h2p2}
            h3={card.h3}
            explain={card.explain}
            textBtn={card.textBtn}
            disable={card.disable}
          />
        ))}
        {cardData2.map((card: ICard2) => (
          <HeroCard2
            key={card.h2p1}
            logo={card.logo}
            bot={card.bot}
            background={card.background}
            h2p1={card.h2p1}
            h2p2={card.h2p2}
            h3={card.h3}
            explain1={card.explain1}
            explain2={card.explain2}
            textBtn={card.textBtn}
            disable={card.disable}
          />
        ))}
      </section>
      <section className="relative text-white">
        <Space />
        <LastSection />
      </section>
      <Footer />
    </div>
  );
}
