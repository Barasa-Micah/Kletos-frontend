import "../../css/homepagecss/homepage.css";

const HeroSection = () => {
  return (
    <div className="hero-section flex">
      <section className="hero-details-section">
        <h1>Kletos Jewelry for Every Chapter</h1>
        <p>Find pieces that shimmer and radiate confidence, just like you.</p>
        <button>Explore</button>
      </section>
      <section className="hero-image-section flex">
        <img src="https://img.freepik.com/premium-photo/individuals-engaged-traditional-african-crafts-modern-art-inspired-by-black-heritage_974247-51450.jpg" />
      </section>
    </div>
  );
};

export default HeroSection;
