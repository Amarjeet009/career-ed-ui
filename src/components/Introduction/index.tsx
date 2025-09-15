
'use client';
import Card from "@/components/Common/Card";

const Introduction = () => {
  const intro = [
    {
      title: "Self-Study Classes",
      description: "Self-study classes empower learners to progress at their own pace using curated materials, recorded lectures, and practice quizzes. Platforms like SelfStudys and Allen's NEET Nurture offer structured resources for competitive exams like JEE, NEET, and CBSE board prep.",
      image: "/images/self_study.png"
    },
    {
      title: "Government Job Classes",
      description: "Government job classes prepare aspirants for competitive exams such as SSC, UPSC, Banking, Railways, and State PCS. These classes focus on aptitude, reasoning, general awareness, and subject-specific modules tailored to Group A, B, and C job categories.",
      image: "/images/gov_jobs.png"
    },
    {
      title: "Online Classes",
      description: "Online classes offer flexible learning through platforms like Coursera, Udemy, and Khan Academy. They cover a wide range of subjects—from coding and business to arts and health—enabling learners to access expert instruction from anywhere.",
      image: "/images/online-class.png"
    },
    {
      title: "Help with Resume & Interview",
      description: "These classes provide guidance on resume building, interview preparation, and job search strategies. They often include mock interviews, resume reviews, and personalized feedback to help candidates stand out.",
      image: "/images/help.png"
    }
  ];
  return (
    <section id="features" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {intro.map((item, index) => (
            <div
              key={index}
              className={`flex flex-wrap items-center ${index % 1 === 0 ? "" : "flex-row-reverse"
                } mb-12 md:mb-16 lg:mb-20`}
            >
              <Card
                imageUrl={item.image}
                title={item.title}
                description={item.description}
                buttonText="Explore More.."
              />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-12 gap-4 dark:bg-gray-dark p-4 rounded-lg">
          {/* Left column (col-3) */}
          <div className="col-span-3 bg-gray-100 dark:bg-gray-dark  p-4">
            <img
              src="/images/course_requests.png"
              alt="Course Requests"
              className="w-full h-55 object-cover"
            />
          </div>

          {/* Center column (col-6) with YouTube video */}
          <div className="col-span-6 bg-white dark:bg-gray-dark p-4">
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/QhfkfDsUP7o?si=HozEh6dM8_BmFlO8"
                title="Introduction to CareerED - Your Path to Success"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Right column (col-3) */}
          <div className="col-span-3 bg-gray-100 dark:bg-gray-dark p-4">
            <img
              src="/images/offer.png"
              alt="Course Offers"
              className="w-full h-55 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
