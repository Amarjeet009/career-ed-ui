"use client";
import { use, useState } from "react";

const testimonialsPerPage = 3;

const Testimonials = () => {
  const testimonials = [
    {
      "name": "Ritika Sharma",
      "role": "NEET Aspirant",
      "testimonial": "The self-study modules helped me stay consistent and focused. The recorded lectures and quizzes felt like having a personal coach at home!",
      "image": "/images/testimonials/user2.png",
      "rating": 5
    },
    {
      "name": "Amit Verma",
      "role": "SSC Candidate",
      "testimonial": "I cleared SSC CGL thanks to the structured government exam prep. The mock tests and current affairs updates were spot on.",
      "image": "/images/testimonials/user3.png",
      "rating": 4
    },
    {
      "name": "Neha Kapoor",
      "role": "Parent of Class 10 Student",
      "testimonial": "Booking online classes was seamless. My daughter loves the interactive sessions and the flexibility to revisit recorded lessons.",
      "image": "/images/testimonials/user4.png",
      "rating": 5
    },
    {
      "name": "Rahul Singh",
      "role": "Engineering Student",
      "testimonial": "The LMS dashboard is intuitive and fast. I especially liked the career guidance section—it helped me shortlist internships aligned with my skills.",
      "image": "/images/testimonials/user5.png",
      "rating": 4
    },
    {
      "name": "Priya Mehta",
      "role": "UPSC Aspirant",
      "testimonial": "The platform’s UPSC prep is gold. Daily editorials, answer writing practice, and mentorship calls kept me on track.",
      "image": "/images/testimonials/user2.png",
      "rating": 5
    },
    {
      "name": "Amit Verma",
      "role": "SSC Candidate",
      "testimonial": "I cleared SSC CGL thanks to the structured government exam prep. The mock tests and current affairs updates were spot on.",
      "image": "/images/testimonials/user3.png",
      "rating": 4
    },
    {
      "name": "Neha Kapoor",
      "role": "Parent of Class 10 Student",
      "testimonial": "Booking online classes was seamless. My daughter loves the interactive sessions and the flexibility to revisit recorded lessons.",
      "image": "/images/testimonials/user4.png",
      "rating": 5
    },
    {
      "name": "Rahul Kumar",
      "role": "Engineering Student",
      "testimonial": "The LMS dashboard is intuitive and fast. I especially liked the career guidance section—it helped me shortlist internships aligned with my skills.",
      "image": "/images/testimonials/user5.png",
      "rating": 4
    },
    {
      "name": "Priya Mehta",
      "role": "UPSC Aspirant",
      "testimonial": "The platform’s UPSC prep is gold. Daily editorials, answer writing practice, and mentorship calls kept me on track.",
      "image": "/images/testimonials/user2.png",
      "rating": 5
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);
  const startIndex = (currentPage - 1) * testimonialsPerPage;
  const currentTestimonials = testimonials.slice(startIndex, startIndex + testimonialsPerPage);



  return (
    <section id="testimonials" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">What Our Users Say</h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {currentTestimonials.map((item, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow dark:shadow-lg">
              {/* Profile image + name */}
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover border border-gray-300 dark:border-gray-600"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.role}</p>
                </div>
              </div>

              {/* Testimonial text */}
              <p className="mt-2 text-gray-700 dark:text-gray-300">{item.testimonial}</p>

              {/* Star rating */}
              <div className="mt-2 flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < item.rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95 
                      4.146.018c.958.004 1.355 1.226.584 1.818l-3.36 2.455 
                      1.287 3.951c.3.922-.756 1.688-1.541 1.125L10 13.011 
                      l-3.353 2.333c-.785.563-1.841-.203-1.541-1.125l1.287-3.951 
                      -3.36-2.455c-.77-.592-.374-1.814.584-1.818l4.146-.018 
                      1.286-3.95z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="mt-8 flex justify-center gap-4 items-center flex-wrap">
          {/* Previous Button */}
          <button
            onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 h-10 rounded-full text-sm font-medium transition-colors duration-200 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white disabled:opacity-50"
          >
            Previous
          </button>

          {/* Numbered Buttons */}
          <div className="flex gap-2">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 h-10 rounded-full text-sm font-medium transition-colors duration-200 ${currentPage === i + 1
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white'
                  }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 h-10 rounded-full text-sm font-medium transition-colors duration-200 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </section>

  );
};

export default Testimonials;
