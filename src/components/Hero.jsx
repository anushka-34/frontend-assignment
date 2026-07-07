import heroImage from "../assets/hero.png";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">
        <h1>
          Explore Your Style From Fashion
          <br />
          to Functional Gear
        </h1>

        <p>
          Browse the best Apparel, Accessories, Automotive Essentials,
          Jewelry & Outdoor Tactical Gear.
        </p>

        <button>Request a Demo</button>
      </div>

      <div className="hero-right">
        <div className="hero-image">
          <img src={heroImage} alt="Hero" />
        </div>
      </div>

    </section>
  );
}

export default Hero;