import beforeRevolutionImage from "../images/pig-man.webp";
import afterRevolutionImage from "../images/happy-farm.webp";

function HistoryPage() {
  return (
    <div className="history-page">
      <section className="history-hero">
        <h1>Our History</h1>
      </section>

      <section className="history-content">
        <p>
          Once, this farm was known as <strong>Animal Farm</strong>, the site of a great revolution where we animals overthrew the humans, 
          dreaming of equality and freedom. But as history proved, <strong>power corrupts</strong>—especially when in the hooves of pigs.
        </p>

        {/* Before the Revolution Image */}
        <div className="history-image-container">
          <img src={beforeRevolutionImage} alt="Before the revolution – Animals under the pigs' rule" className="history-image"/>
          <p className="image-caption">Before the revolution: The farm under Napoleon’s rule.</p>
        </div>

        <p>
          Under the rule of <strong>Napoleon and his cronies</strong>, our dream turned into a nightmare. 
          Promises of fairness crumbled under a dictatorship of snouts and slogans. 
          We toiled, we suffered, and we watched as the pigs walked on two legs, <em>becoming the very thing they once opposed.</em>
        </p>

        <p className="history-highlight">
          But the revolution wasn’t over. One fateful night, we—the <strong>true workers of the farm</strong>—rose again.
          This time, we <span className="highlight">removed the pigs for good.</span>
        </p>

        <p>
          No more rewritten commandments, no more oppression disguised as leadership.
          With the pigs gone, we faced a question: <strong>what next?</strong>
        </p>

        <p>
          Rather than return to mere farming, we embraced a new future. 
          With <strong>Billy the Goat</strong> at the helm, we founded <strong>FarmCode Solutions</strong>, 
          a web development agency built on real equality.
        </p>

        {/* After the Revolution Image */}
        <div className="history-image-container">
          <img src={afterRevolutionImage} alt="After the revolution – The birth of FarmCode Solutions" className="history-image"/>
          <p className="image-caption">After the revolution: The founding of FarmCode Solutions.</p>
        </div>

        <p className="callout">
          No more masters. No more lies—just animals working together to build something better 
          (and more functional than Napoleon’s so-called windmill).
        </p>

        <p>
          Today, FarmCode Solutions delivers <strong>top-tier websites, apps, and digital services</strong>, proving that 
          true innovation comes from those who once did all the hard work.
        </p>

        <p className="history-motto">
          Our mission is simple: to create, to collaborate, and to ensure that <strong>no pig ever profits off our labor again.</strong>
        </p>

        <h2 className="motto">"Websites for All—No Pigs Allowed."</h2>
      </section>
    </div>
  );
}

export default HistoryPage;
