import React from "react";

const Features = () => {
  const features = [
    {
      id: 1,
      icon: <img src="/appointment.svg" alt="Easy booking" className="w-8 h-8" />,
      title: "Easy Service Booking",
      desc: "Streamlined booking process for clients with service catalogs and availability.",
    },
    {
      id: 2,
      icon: <img src="/gps.svg" alt="Real time tracking" className="w-8 h-8" />,
      title: "Real-Time Tracking",
      desc: "Monitor job progress, employee hours, and project timelines with live updates.",
    },
    {
      id: 3,
      icon: <img src="/chart.svg" alt="Analytics" className="w-8 h-8" />,
      title: "Performance Analytics",
      desc: "Comprehensive reporting and insights to improve business operations and efficiency.",
    },
    {
      id: 4,
      icon: <img src="/shield.svg" alt="Security" className="w-8 h-8" />,
      title: "Secure & Reliable",
      desc: "Enterprise-grade security with 99.9% uptime guarantee and data protection.",
    },
  ];

  return (
    <div className="w-11/12 md:w-10/12 mx-auto mt-[90px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-gray-200 gap-6 lg:gap-0">
        {features.map((item) => (
          <div
            key={item.id}
            className="px-6 py-6 lg:py-0 bg-white rounded-xl shadow-md lg:shadow-none lg:rounded-none"
          >
            {/* Icon */}
            <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-lg mb-4">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>

            {/* Paragraph */}
            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
