import React, { useState, useEffect } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [typedAnswers, setTypedAnswers] = useState({});
  const [showCursor, setShowCursor] = useState({});

  const faqs = [
    {
      question: 'Who can participate in HaccVerse ’25?',
      answer: 'Anyone with an interest in technology and innovation is welcome! Whether you’re a newbie or a pro, this is your space to shine.'
    },
    {
      question: 'What should I bring to a hackathon?',
      answer: 'Your laptop, charger, and any other tools you need for coding are a must. Snacks, drinks, and maybe some good vibes wouldn’t hurt either!'
    },
    {
      question: 'Is it a remote or on-site hackathon?',
      answer: 'It’s a combo! Round 1 is online—you can code in your PJs. But Round 2 (the Grand Finale) is offline, so get ready to show up in person!'
    },
    {
      question: 'Are travel expenses included?',
      answer: 'Nope, travel expenses are not covered. So, plan your trip wisely if you’re aiming for the offline round!'
    },
    {
      question: 'Can we use open-source projects and frameworks?',
      answer: 'Of course! Open-source tools and frameworks are allowed. Just make sure your project stands out with your own twists and creativity.'
    },
    {
      question: 'Can a person be part of two teams?',
      answer: 'Nope, sorry! Each person can only join one team—give it your full focus and crush it!'
    },
    {
      question: 'What’s the team size?',
      answer: 'Teams can have 3–4 members. Small but mighty—that’s the way to go!'
    },
    {
      question: 'Is there any registration fee?',
      answer: 'Round 1? Completely free. Round 2 (Grand Finale)? Also free! Get ready for the ultimate showdown!'
    },
    {
      question: 'Will food and accommodation be provided?',
      answer: 'Yes! For the Grand Finale, food is on us. Accommodation is available for ₹900/person on prior request. Just bring your ideas and energy!'
    },
  ];

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
      setTypedAnswers((prev) => ({ ...prev, [index]: '' }));
      setShowCursor((prev) => ({ ...prev, [index]: false }));
    } else {
      setOpenIndex(index);
    }
  };

  useEffect(() => {
    if (openIndex !== null) {
      const fullText = faqs[openIndex].answer;
      const words = fullText.split(''); // Split the answer into words
      let currentIndex = 0;
      setShowCursor((prev) => ({ ...prev, [openIndex]: true }));

      const interval = setInterval(() => {
        setTypedAnswers((prev) => ({
          ...prev,
          [openIndex]: words.slice(0, currentIndex + 1).join('') // Append words one by one
        }));
        currentIndex++;

        if (currentIndex === words.length) {
          clearInterval(interval);
          setShowCursor((prev) => ({ ...prev, [openIndex]: false })); // Hide cursor when typing is complete
        }
      }, 50); // Typing speed (adjust for word-by-word timing)

      return () => clearInterval(interval); // Cleanup on unmount or index change
    }
  }, [openIndex]);

  return (
    <div className="faq-container" id="faq">
      <h1>FAQ</h1>
      <ul className="faq-list">
        {faqs.map((faq, index) => (
          <li key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
            <button onClick={() => toggleFAQ(index)} className="faq-question">
              {faq.question}
              <span className={`arrow ${openIndex === index ? 'open' : ''}`}>&#9660;</span>
            </button>
            <p className="faq-answer">
              {typedAnswers[index]}
              {showCursor[index] && <span className="cursor"></span>}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
