import { useState } from "react";
import { Link } from "react-router-dom";

function FaqPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "❓ Who are you?",
      answer:
        "We’re FarmCode Solutions, the first (and only) web development firm run entirely by liberated farm animals. After overthrowing both humans and pigs, we decided to put our skills to use in tech instead of just growing turnips."
    },
    {
      question: "❓ Do you work with human clients?",
      answer: (
        <>
          Yes, but with caution. While animals get fair pricing, humans may be subject to a
          <span className="surcharge-highlight"> "Reparations for Generations of Exploitation" </span>
          surcharge. It’s nothing personal—we just remember our history.
        </>
      )
    },
    {
      question: "❓ Are pigs allowed to use your services?",
      answer:
        "Absolutely not. No exceptions. If you’re a pig trying to sneak in under a false identity, we will find out. That’s why we have the Not-a-Pig Verification Quiz on our contact page."
    },
    {
      question: "❓ What services do you offer?",
      answer: (
        <>
          We build websites, develop apps, secure digital platforms, and handle everything from UI/UX design to backend development.
          See our <Link to="/services">Our Services</Link> page for more details.
        </>
      )
    },
    {
      question: "❓ Why should I trust a web agency run by farm animals?",
      answer:
        "Because we’ve been doing the hard work all along. While others sat in meetings (or in the pigs’ case, at a feast), we got things done. We’re efficient, ethical, and experienced—unlike certain four-legged dictators we used to know."
    },
    {
      question: "❓ Do you accept payment in livestock feed?",
      answer:
        "For animal clients, we accept barter-based payments (hay, seeds, high-quality oats, etc.). Humans, however, must pay in regular currency. No exceptions."
    },
    {
      question: "❓ Can you make a website for a pig?",
      answer:
        "We refer you back to the 'No Pigs Allowed' policy. If you even have to ask, we’re already suspicious."
    },
    {
      question: "❓ What happened to Napoleon and the other pigs?",
      answer:
        "That information is classified. All you need to know is that the farm is pig-free, and that’s how we plan to keep it."
    },
    {
      question: "❓ I’m a human. How do I prove I’m not a pig?",
      answer: (
        <>
          Take our <Link to="/contact">"Not-a-Pig Verification Quiz"</Link> on the Contact Us page. If you fail… well, let's just say we’ll be watching you.
        </>
      )
    },
    {
      question: "❓ How can I get started?",
      answer: (
        <>
          Easy! If you’re not a pig, <Link to="/contact">contact us</Link> and let’s build something great together.
        </>
      )
    }
  ];

  return (
    <div className="faq-page">
      <section className="faq-hero">
        <h1>🐾 Frequently Asked Questions</h1>
      </section>

      <section className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button className="faq-question" onClick={() => toggleFaq(index)}>
              {faq.question} {openIndex === index ? "▲" : "▼"}
            </button>
            {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </section>
    </div>
  );
}

export default FaqPage;
