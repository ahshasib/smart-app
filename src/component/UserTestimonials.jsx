import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Farzana H.",
    role: "Owner, CleanPro Services",
    message:
      "This app completely changed the way we manage our team. Assigning jobs takes minutes, and we never miss an update.",
    image: "c3.svg",
  },
  {
    id: 2,
    name: "Ahmed R.",
    role: "Technician",
    message:
      "I love how easy it is to see my daily tasks and track my time. It makes my job stress-free.",
    image: "c2.svg",
  },
  {
    id: 3,
    name: "Rafiq M.",
    role: "Homeowner",
    message:
      "As a client, I love being able to see exactly when my service is on the way. No calls, no guessing — just clear updates.",
    image: "c1.svg",
  },
];

const UserTestimonials = () => {
  return (
    <div className="relative w-11/12 md:w-10/12 mx-auto mt-20 md:mt-36 py-12 md:py-16">
      {/* Background Green Blur */}
      <div className="absolute inset-0 bg-green-200/10 blur-3xl -z-10"></div>

      {/* Top Title and Paragraph */}
      <div className="text-center mb-10 md:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
          What Our Users Are Saying
        </h2>
        <p className="text-gray-700 text-sm sm:text-base md:text-lg w-full md:w-3/5 mx-auto">
          Real stories from clients, employees, and business owners who use{" "}
          <br className="hidden sm:block" /> our app every day.
        </p>
      </div>

      {/* Testimonials Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-20">
        {testimonials.map((user) => (
          <div
            key={user.id}
            className="flex-1 p-6 sm:p-8 md:p-10 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-4">
              <img
                src={user.image}
                alt={user.name}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 sm:mr-4"
              />
              <div>
                <h4 className="font-bold text-sm sm:text-base md:text-lg">
                  {user.name}
                </h4>
                <p className="text-gray-500 text-xs sm:text-sm md:text-base">
                  {user.role}
                </p>
              </div>
            </div>

            {/* SVG Background */}
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="55"
                height="52"
                viewBox="0 0 65 52"
                fill="none"
                className="absolute top-0 -left-1 opacity-30 sm:opacity-40"
              >
                <path
                  d="M36.6667 52V33.393C36.6667 25.0863 38.9444 17.8317 43.5 11.6294C48.0556 5.31629 55.0556 1.43982 64.5 0V12.1278C59.0556 12.7923 55.4444 14.5644 53.6667 17.4441C51.8889 20.3237 51 24.1448 51 28.9073L41.1667 26.9137H64.1667V52H36.6667ZM0.5 52V33.393C0.5 25.0863 2.77778 17.8317 7.33333 11.6294C11.8889 5.31629 18.8889 1.43982 28.3333 0V12.1278C22.8889 12.7923 19.2778 14.5644 17.5 17.4441C15.7222 20.3237 14.8333 24.1448 14.8333 28.9073L5 26.9137H28V52H0.5Z"
                  fill="#ECEAEA"
                />
              </svg>

              {/* Message on top of SVG */}
              <p className="relative z-10 pt-4 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                {user.message}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserTestimonials;
