import React, { useState } from "react";

const FAQ = () => {
  // State to manage which FAQ item is open
  const [openItemIndex, setOpenItemIndex] = useState(null);

  // Toggle FAQ item visibility
  const toggleItem = (index) => {
    setOpenItemIndex(openItemIndex === index ? null : index);
  };

  // Sample FAQ data
  const faqData = [
    {
        question: "How do I search for hotels on Masso?",
        answer:
          "To search for hotels, enter your destination, check-in, and check-out dates on the homepage. Click 'Search,' and you'll see a list of available hotels.",
      },
      {
        question: "Can I modify my hotel reservation dates after booking?",
        answer:
          "Yes, you can modify your reservation dates depending on the hotel's cancellation and modification policies. Visit the 'My Reservations' section or contact our customer support for assistance.",
      },
      {
        question: "What amenities are included in the hotel rooms?",
        answer:
          "The amenities vary by hotel. You can find detailed information about room amenities, such as Wi-Fi, parking, and breakfast, on the hotel's description page.",
      },
      {
        question: "How can I cancel my hotel reservation?",
        answer:
          "Log in to your account, go to 'My Reservations,' and find the reservation you want to cancel. Follow the provided instructions. Keep in mind the hotel's cancellation policy.",
      },
      {
        question: "Is it safe to enter my credit card information on Masso?",
        answer:
          "Yes, our website uses secure encryption to protect your personal and payment information. We follow industry-standard security practices to ensure a safe booking experience.",
      },
      {
        question: "Are there any discounts for booking multiple rooms?",
        answer:
          "Some hotels offer discounts for booking multiple rooms. You can check the hotel's policies and available promotions during the booking process.",
      },
      {
        question: "Can I view reviews from other guests before booking?",
        answer:
          "Yes, you can read reviews from other guests on the hotel's page. Reviews provide insights into the overall guest experience, helping you make an informed decision.",
      },
      {
        question: "What is the difference between a standard room and a suite?",
        answer:
          "Standard rooms typically offer essential amenities, while suites provide additional space and often feature a separate living area. Check the room descriptions for specific details.",
      },
      {
        question: "How do I earn loyalty points with Masso?",
        answer:
          "Many hotels offer loyalty programs. Create an account on our platform, book eligible stays, and accumulate points that can be redeemed for discounts, free nights, or other benefits.",
      },
      {
        question: "Can I book a hotel without creating an account?",
        answer:
          "Yes, you can browse available hotels without an account. However, creating an account allows you to manage your reservations, save preferences, and access exclusive member benefits.",
      },

  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">FREQUENTLY ASKED QUESTIONS</h2>

      {/* FAQ Grid */}
      <div className="faq-grid">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${openItemIndex === index ? "open" : ""}`}
          >
            <div className="faq-question" onClick={() => toggleItem(index)}>
              {item.question}{" "}
              <i
                className={`bi bi-chevron-${
                  openItemIndex === index ? "up" : "down"
                }`}
              ></i>
            </div>
            <div className="faq-answer">
              {openItemIndex === index && (
                <div className="answer-popup">
                  <blockquote>{item.answer}</blockquote>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
