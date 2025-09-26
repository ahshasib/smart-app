import React from "react";
import BookServices from "./BookServices";
import ServiceExperience from "./ServiceExperience";
import Seetasks from "./Seetasks";

const ServiceSection = () => {
    return (
        <div className="relative mt-24 md:mt-36 lg:mt-48">
            <div className="text-center mb-10">
                <h2
                    className="text-3xl md:text-4xl lg:text-5xl font-bold relative inline-block"
                    style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.4)" }}>
                    Build for Everyone
                    {/* SVG underline */}
                    <div className="flex justify-end">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-[180px] md:w-[220px] lg:w-[244px] h-auto"
                            viewBox="0 0 244 16"
                            fill="none"
                        >
                            <path
                                d="M2 12C61 4.00003 235.5 -5.50004 242 12"
                                stroke="#9CD099"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M94 14C146.5 8 202 5 227 14"
                                stroke="#9CD099"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </h2>
                <p className="text-gray-600 text-sm md:text-base w-full md:w-3/4 lg:w-[40%] mx-auto">
                    Whether you're booking services, managing tasks, or running operations,
                    we've designed the perfect experience for you.
                </p>

            </div>
            {/* First SVG */}
            <div className="absolute -right-20 top-[7%] hidden lg:block">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="277"
                    height="731"
                    viewBox="0 0 277 731"
                    fill="none"
                >
                    <path
                        d="M2 2C324.5 61.5 432 579.5 139.5 729.5"
                        stroke="#3ED434"
                        strokeOpacity="0.1"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>

            {/* Second SVG */}
            <div className="absolute right-1/2 top-[7%] z-[105] hidden lg:block">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="343"
                    height="1253"
                    viewBox="0 0 343 1253"
                    fill="none"
                >
                    <path
                        d="M303 2C358 290.5 412 1141.5 1.5 1251"
                        stroke="#3ED434"
                        strokeOpacity="0.1"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>

            {/* Component */}
            <BookServices />
            <ServiceExperience></ServiceExperience>
            <Seetasks></Seetasks>
        </div>

    );
};

export default ServiceSection;
