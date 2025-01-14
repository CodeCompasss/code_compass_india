"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    id: 1,
    text: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Suspendisse Varius Enim In Eros Elementum Tristique. Duis Cursus, Mi Quis Viverra Ornare.",
    name: "Sooraj Krishna K P",
    course: "S6 Computer Science, 2024",
  },
  {
    id: 2,
    text: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Suspendisse Varius Enim In Eros Elementum Tristique. Duis Cursus, Mi Quis Viverra Ornare.",
    name: "Deepthi T",
    course: "S6 Civil Engineering, 2024",
  },
  {
    id: 3,
    text: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Suspendisse Varius Enim In Eros Elementum Tristique. Duis Cursus, Mi Quis Viverra Ornare.",
    name: "Yash",
    course: "S2 Mechanical Engineering, 2024",
  },
];

const StudentReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    < div className="relative bg-[#27272A] w-full py-8 md:py-8">
      {/* Decorative elements with responsive positioning */}
      
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 pb-12 text-center ">
          WHAT STUDENTS HAVE TO SAY ABOUT US
        </h2>

        <div className="relative">
          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-white" />
          </button>

          {/* Responsive grid/slider */}
          <div className="flex justify-center items-center gap-4 md:gap-8 overflow-hidden text-shadow-xl px-24 ">
            {[-1, 0, 1].map((offset) => {
              const index =
                (currentIndex + offset + reviews.length) % reviews.length;
              const review = reviews[index];
              const isActive = offset === 0;
              return (
                <div
                  key={review.id}
                  className={`bg-transparent border-2 border-gray-200 p-6 md:p-8 rounded-lg transition-all duration-300 lg:w-full  ${
                    isActive ? " opacity-100" : "scale-90 opacity-50"
                  } ${
                    Math.abs(offset) === 1
                      ? "hidden lg:block"
                      : "block text-center"
                  }`}
                >
                  <p className="text-white mb-4 md:mb-6 text-[16px] leading-relaxed">
                    "{review.text}"
                  </p>
                  <div className="flex items-center gap-3 md:gap-4">
                    <div>
                      <h3 className="text-white font-medium text-sm md:text-[17px]">
                        {review.name}
                      </h3>
                      <p className="text-gray-400 text-xs md:text-sm">
                        {review.course}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-white" />
          </button>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-6 md:mt-8">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-white" : "bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentReviews;
