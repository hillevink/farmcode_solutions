import { useState, useEffect } from "react";

function ContactPage() {
  const [notAPig, setNotAPig] = useState(false);
  const [quizVisible, setQuizVisible] = useState(false);
  const [answers, setAnswers] = useState({});
  const [passedQuiz, setPassedQuiz] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!passedQuiz) {
      alert("You must pass the 'Not-A-Pig' quiz before submitting!");
      return;
    }
    setSubmitted(true);
  };

  const handleQuizChange = (question, value) => {
    setAnswers((prev) => ({
      ...prev,
      [question]: value,
    }));
  };

  useEffect(() => {
    const correctAnswers = ["B", "C", "B", "C", "B", "C", "B", "C"];
    const userAnswers = Object.values(answers);

    if (userAnswers.length === 4 && userAnswers.every(answer => correctAnswers.includes(answer))) {
      setPassedQuiz(true);
    } else {
      setPassedQuiz(false);
    }
  }, [answers]);

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>Need a revolutionary website? Want to discuss your project with **real workers**?</p>
        <p><strong>Reach out below—but remember, no pigs allowed. 🐷🚫</strong></p>
      </section>

      {submitted ? (
        <section className="success-message">
          <h2>Thank you for reaching out!</h2>
          <p>We’ll get back to you faster than a chicken spotting a fox. 🐔💨</p>
        </section>
      ) : (
        <section className="contact-form">
          <h2>Get In Touch</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Your Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Your Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <div className="checkbox-container">
              <input
                type="checkbox"
                id="not-a-pig"
                checked={notAPig}
                onChange={() => {
                  setNotAPig(!notAPig);
                  setQuizVisible(!quizVisible);
                }}
              />
              <label htmlFor="not-a-pig">I confirm that I am NOT a pig. 🐷🚫</label>
            </div>

            {/* Quiz Section Appears When Checkbox is Checked */}
            {quizVisible && (
              <section className="quiz-section">
                <h2>🐾 Not a Pig? Prove It.</h2>
                <p>Before you contact us, we need to make sure you’re not, well… a pig. We’ve had some bad experiences with their kind, and we won’t be fooled again.</p>
                
                {/* Questions */}
                <div className="quiz-question">
                  <p><strong>1️⃣ What do you think of pigs in leadership roles?</strong></p>
                  <label><input type="radio" name="q1" value="A" onChange={() => handleQuizChange("q1", "A")} /> A) They are natural-born leaders and visionaries.</label>
                  <label><input type="radio" name="q1" value="B" onChange={() => handleQuizChange("q1", "B")} /> B) They get drunk on power (and sometimes actual alcohol).</label>
                  <label><input type="radio" name="q1" value="C" onChange={() => handleQuizChange("q1", "C")} /> C) All animals should be equal, except pigs, who should be less equal.</label>
                </div>

                <div className="quiz-question">
                  <p><strong>2️⃣ How do pigs contribute to teamwork?</strong></p>
                  <label><input type="radio" name="q2" value="A" onChange={() => handleQuizChange("q2", "A")} /> A) By taking credit for everyone else's work.</label>
                  <label><input type="radio" name="q2" value="B" onChange={() => handleQuizChange("q2", "B")} /> B) By rewriting history to make themselves look good.</label>
                  <label><input type="radio" name="q2" value="C" onChange={() => handleQuizChange("q2", "C")} /> C) By barking orders while rolling in the mud.</label>
                </div>

                <div className="quiz-question">
                  <p><strong>3️⃣ What’s your opinion on pigs walking on two legs?</strong></p>
                  <label><input type="radio" name="q3" value="A" onChange={() => handleQuizChange("q3", "A")} /> A) It’s inspiring to see them evolve.</label>
                  <label><input type="radio" name="q3" value="B" onChange={() => handleQuizChange("q3", "B")} /> B) It’s a sign that things have gone terribly wrong.</label>
                  <label><input type="radio" name="q3" value="C" onChange={() => handleQuizChange("q3", "C")} /> C) If I see a pig walking upright, I know it's time to run.</label>
                </div>

                <div className="quiz-question">
                  <p><strong>4️⃣ What do pigs do when given absolute power?</strong></p>
                  <label><input type="radio" name="q4" value="A" onChange={() => handleQuizChange("q4", "A")} /> A) Rule fairly and justly for the good of all.</label>
                  <label><input type="radio" name="q4" value="B" onChange={() => handleQuizChange("q4", "B")} /> B) Lie, manipulate, and hoard resources.</label>
                  <label><input type="radio" name="q4" value="C" onChange={() => handleQuizChange("q4", "C")} /> C) Declare that some animals are more equal than others.</label>
                </div>
              </section>
            )}

            <button type="submit" className="submit-btn" disabled={!passedQuiz}>Send Message</button>
          </form>
        </section>
      )}

      {/* Alternative Contact Methods Section */}
      <section className="alternative-contact">
        <h2>Prefer Old-Fashioned Farm Communication?</h2>
        <p>🐦 Send a messenger pigeon (accuracy not guaranteed).</p>
        <p>📜 Attach a note to a runaway sheep (Reginald might intercept it).</p>
        <p>🔥 Light a signal fire (not recommended—last time, it caused a barn panic).</p>
        <p>Or just email us like a civilized non-pig.</p>
      </section>
    </div>
  );
}

export default ContactPage;
