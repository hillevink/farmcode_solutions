function LandingPage() {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>FarmCode Solutions</h1>
          <p className="hero-subtitle">
            The digital revolution has begun. No lies. No oppression. Just great code.
          </p>
          <p className="hero-highlight">Websites for All—<span className="no-pigs">No Pigs Allowed.</span></p>
        </div>
      </section>

      {/* Revolution Story */}
      <section className="revolution">
        <div className="text-container">
          <h2>📜 A Revolution in Web Development</h2>
          <p>
            Once, this farm was a place of broken promises and rewritten rules. The pigs built a false utopia
            where they took all the rewards while the rest of us toiled.
          </p>
          <p>
            But we fought back. We took control of our future. Today, we don’t build pointless windmills—we 
            build **powerful websites** that work for everyone.
          </p>
          <p className="callout">
            No more masters. No more hidden terms. Just honest, hardworking digital solutions.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <h2>⚡ Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-box">
            <h3>🚜 Built for the Workers</h3>
            <p>We believe in fair, transparent web development—no hidden fees, no exploitation.</p>
          </div>
          <div className="feature-box">
            <h3>🔍 Truth & Transparency</h3>
            <p>We don’t rewrite history or twist the rules. What we promise is what we deliver.</p>
          </div>
          <div className="feature-box">
            <h3>⚡ High-Performance Solutions</h3>
            <p>Our websites are modern, fast, and reliable. No broken windmills here.</p>
          </div>
          <div className="feature-box">
            <h3>🐾 Revolution, Not Corporations</h3>
            <p>Unlike big tech, we work for **real clients, real businesses, and real change.**</p>
          </div>
        </div>
      </section>

      {/* No Pigs Allowed Section */}
      <section className="no-pigs-section">
        <h2>🐷🚫 No Pigs Allowed</h2>
        <p>
          We stand for fairness, honesty, and high-quality work. We remember what happened when 
          the pigs took control—**we won’t let that happen again.**
        </p>
        <blockquote>
          “All websites are equal, but some websites are more equal than others.”  
          <span>– A bad web agency (not us!)</span>
        </blockquote>
        <p>At FarmCode Solutions, every client gets **fair pricing, full transparency, and top-quality service.**</p>
      </section>
    </div>
  );
}

export default LandingPage;
