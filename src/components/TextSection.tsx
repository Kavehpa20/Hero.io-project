import { useEffect, useState } from "react";

const TextsSection = () => {
  const [color1, setColor1] = useState("text-hero-slate-750");
  const [color2, setColor2] = useState("text-hero-slate-750");
  const [color3, setColor3] = useState("text-hero-slate-750");

  const changeBackground = () => {
    if (200 <= window.scrollY && 400 > window.scrollY) {
      setColor1("text-hero-pink-200");
      setColor2("text-hero-slate-750");
      setColor3("text-hero-slate-750");
    } else if (400 <= window.scrollY && 600 > window.scrollY) {
      setColor1("text-hero-slate-750");
      setColor2("text-hero-pink-200");
      setColor3("text-hero-slate-750");
    } else if (600 <= window.scrollY && 800 > window.scrollY) {
      setColor1("text-hero-slate-750");
      setColor2("text-hero-slate-750");
      setColor3("text-hero-pink-200");
    }
    console.log(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  }, [color1, color2, color3]);

  return (
    <section
      className={`mx-auto mt-10 w-full max-w-[577px] text-center font-komika text-sm leading-[37px] tracking-wider sm:text-[18px]`}
    >
      <h3 className={color1}>
        In a world ruled by big governments and Trillion dollar tech companies
        stealing &amp; selling our data, our online freedom has vanished....
      </h3>
      <h3 className={`my-3 ${color2}`}>
        But then, a hero emerged from the digital shadows — A Hero ready to
        fight for our right to privacy and freedom.
      </h3>

      <h3 className={color3}>
        Now, with Hero's suite of tools, like a secret weapon, you can take
        control and explore crypto without giving up our privacy.
      </h3>

      <h3 className="mt-6 text-hero-pink-200">Join the fight.</h3>
    </section>
  );
};

export default TextsSection;
