import React from "react";
import { FaCalendarCheck, FaMapMarkedAlt, FaChartLine, FaLock } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      id: 1,
      icon: <FaCalendarCheck className="text-2xl text-indigo-600" />,
      title: "Easy Service Booking",
      desc: "Quick and hassle-free service booking with just a few clicks.",
    },
    {
      id: 2,
      icon: <FaMapMarkedAlt className="text-2xl text-indigo-600" />,
      title: "Real-Time Tracking",
      desc: "Track your service progress and updates in real-time.",
    },
    {
      id: 3,
      icon: <FaChartLine className="text-2xl text-indigo-600" />,
      title: "Performance Analytics",
      desc: "Get insights and analytics to monitor performance.",
    },
    {
      id: 4,
      icon: <FaLock className="text-2xl text-indigo-600" />,
      title: "Secure & Reliable",
      desc: "Your data and services are always safe and reliable.",
    },
  ];

  return (
    <div className="w-11/12 mx-auto flex">
      {features.map((item, index) => (
        <div
          key={item.id}
          className={`flex-1 px-6 ${
            index !== features.length - 1 ? "border-r" : ""
          }`}
        >
          {/* Icon */}
          <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 rounded-lg mb-4">
            {item.icon}
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold mb-2">{item.title}</h3>

          {/* Paragraph */}
          <p className="text-gray-600 text-sm">{item.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
