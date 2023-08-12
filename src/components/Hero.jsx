const HeroSection = () => {
  return (
    <>
      <main className="hero container">
        <div className="hero-content">
          <h1>Your Feet Deserve The Best</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            labore, error doloremque ex similique voluptates earum? Odio
            architecto ad nemo?
          </p>

          <div className="hero-btn">
            <button>Shop Now</button>
            <button className="secondary-btn">Category</button>
          </div>
          <div className="shopping">
            <p>Also Available On</p>
            <div className="brand-icon">
            <img src="/images/amazon.png" alt="amazon" />
            <img src="/images/flipkart.png" alt="flipkart" />
            </div>
          </div>
        </div>
        <div className="hero-image">
        <img src="/images/shoe_image.png" alt="logo" />
        </div>
      </main>
    </>
  );
};
export default HeroSection;
