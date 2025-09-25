import React, { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "Is the app free to use?",
      answer:
        "Yes! We offer a free plan for individuals and small teams. Paid plans unlock more features for scaling businesses.",
    },
    {
      question: "Can I assign multiple employees to one job?",
      answer:
        "Yes, you can assign multiple employees to a single job for better collaboration and task management.",
    },
    {
      question: "Does it work on both mobile and desktop?",
      answer:
        "Absolutely! The app is fully responsive and works seamlessly on both mobile and desktop devices.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-11/12 md:w-9/12 mx-auto py-12 mt-24">
      {/* Title Section */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 mt-3">
          Quick answers to help you get the most out of our app.
        </p>
      </div>

      {/* Accordion Section */}
      <div className="space-y-4 mt-20">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`border border-green-200 rounded-2xl p-6 transition-all duration-300 ${
              openIndex === index ? "bg-green-50 border-green-300" : ""
            }`}
          >
            <button
              className="flex justify-between items-center w-full text-left text-lg font-medium text-gray-800 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="ml-2 text-2xl font-bold text-green-600">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index ? "max-h-40 mt-3" : "max-h-0"
              }`}
            >
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
