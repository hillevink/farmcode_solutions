import { Link } from "react-router-dom";

function ServicesPage() {
  return (
    <div className="services-page">
      <section className="services-hero">
        <h1>Our Services</h1>
      </section>

      <section className="services-intro">
        <p>
          At <strong>FarmCode Solutions</strong>, we take the same hard work, dedication, and teamwork that built (and rebuilt) this farm 
          and apply it to top-tier web development. Whether you’re a fellow liberated animal or a human client (as long as 
          you’re not a pig in disguise), we’ve got the skills to bring your digital vision to life.
        </p>
      </section>

      <section className="services-grid">
        <div className="service-card">
          <h2>🐐 Web Development</h2>
          <p>Led by our founder, Billy the Goat, our team crafts sleek, functional, and responsive websites. Whether you need a business site, 
          a portfolio, or an online store, we’ll build it from the ground up—just like we rebuilt this farm.</p>
        </div>

        <div className="service-card">
          <h2>🐄 Backend Development & Database Management</h2>
          <p>With Bessie the Cow running our backend operations, we ensure your website runs smoothly and securely. Like a well-milked system, 
          our database management keeps things flowing without any unexpected disruptions.</p>
        </div>

        <div className="service-card">
          <h2>🐴 UI/UX Design</h2>
          <p>Molly the Horse ensures your website is both beautiful and easy to use. No more clunky, outdated interfaces—we design with speed, 
          elegance, and accessibility in mind. Our sites are always stable (pun absolutely intended).</p>
        </div>

        <div className="service-card">
          <h2>🐔 Security & Hosting</h2>
          <p>With Clucky the Chicken on high alert, our security systems are tighter than the coop after a fox scare. We offer secure hosting, 
          regular updates, and protection against cyber threats—because no one wants a pig sneaking in through the backdoor.</p>
        </div>

        <div className="service-card">
          <h2>🐑 Digital Marketing & Branding</h2>
          <p>If you need your brand to stand out, trust Reginald the Sheep to craft your online presence. Social media, SEO, content marketing—he follows 
          the trends so you don’t have to. But don’t worry, he never just follows the herd.</p>
        </div>

        <div className="service-card">
          <h2>🐴 IT Support & Troubleshooting</h2>
          <p>When things go wrong (and they occasionally do), Gerald the Donkey is here to help. Whether it’s bug fixes, troubleshooting, or general tech 
          support, he’ll keep your site running—though expect some sighs along the way.</p>
        </div>

        <div className="service-card">
          <h2>🐾 Custom Solutions & Consulting</h2>
          <p>Need something unique? Our team of farm-based freelancers offers tailored digital solutions for any project. Whether it's an app, automation, 
          or a specialized e-commerce platform, we can build it.</p>
        </div>
      </section>

      <section className="why-choose-us">
        <h2>🚜 Why Choose FarmCode Solutions?</h2>
        <ul>
          <li><strong>We Work Hard</strong> – Unlike certain pigs we won’t name, we actually deliver.</li>
          <li><strong>No Bureaucracy, No Propaganda</strong> – Just real solutions.</li>
          <li><strong>100% Ethical, No Hidden Agendas</strong> – No secret deals, no rewritten contracts.</li>
          <li><strong>We Remember Our History</strong> – So we ensure fair pricing and equal treatment for all clients.</li>
        </ul>
        <p className="surcharge-note">
          <em>*Fair pricing applies to all animal clients. Humans may be subject to a 
          <span className="surcharge-highlight"> "Reparations for Generations of Exploitation" </span> surcharge.  
          Don’t take it personally—you’ve had a good run.*</em>
        </p>
      </section>

      <section className="cta">
        <h2>👉 Ready to build something revolutionary?</h2>
        <p>
          <Link to="/contact" className="cta-link">Contact us today!</Link>
        </p>
      </section>
    </div>
  );
}

export default ServicesPage;
