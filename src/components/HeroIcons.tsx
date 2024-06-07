const HeroIcons = () => {
  return (
    <div className="3xl:text-base mx-auto mt-5 flex items-center justify-center gap-6 text-white">
      <div className="flex items-center gap-2">
        <div>
          <img src="/assets/images/anonymous.svg" alt="anonymous icon" />
        </div>
        <p>Anonymous</p>
      </div>
      <div className="flex items-center gap-2">
        <div>
          <img src="/assets/images/no_tracking.svg" alt="No Tracking SVG" />
        </div>
        <p>No tracking</p>
      </div>
    </div>
  );
};

export default HeroIcons;
