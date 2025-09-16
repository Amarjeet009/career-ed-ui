'use client';
import { useState } from "react";


const faqs = [
    {
        "question": "How do I reset my password?",
        "answer": "Click on 'Forgot Password' on the login page. Enter your registered email and follow the instructions sent to your inbox."
    },
    {
        "question": "Where can I track my course progress?",
        "answer": "Go to your dashboard and click on 'My Courses'. You'll see progress bars and completion percentages for each enrolled course."
    },
    {
        "question": "Can I access classes on mobile?",
        "answer": "Yes! Our platform is mobile-friendly and also available as an app on Android and iOS."
    },
    {
        "question": "How do I contact a mentor or instructor?",
        "answer": "Use the 'Ask Mentor' button inside your course module or visit the 'Support' tab to send a direct message."
    },
    {
        "question": "What if I miss a live class?",
        "answer": "No worries. All live sessions are recorded and available under 'Class Recordings' within 24 hours."
    },
    {
        "question": "Is there a refund policy?",
        "answer": "Yes. You can request a refund within 7 days of purchase if less than 20% of the course has been completed."
    },
    {
        "question": "How do I apply for government job prep courses?",
        "answer": "Visit the 'Government Exams' section on the homepage and choose your target exam. Click 'Enroll' to get started."
    },
    {
        "question": "Can I download study materials?",
        "answer": "Absolutely. Most PDFs, notes, and quizzes are downloadable from the 'Resources' tab inside each course."
    }
];

const QnA = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (

        <section className="relative z-10 overflow-hidden pt-36 pb-16 md:pb-20 lg:pt-[180px] lg:pb-28">
            <div className="container">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                        <div className="max-w-2xl mx-auto">
                            {faqs.map((faq, index) => (
                                <div key={index} className="relative border-b border-gray-300 dark:border-gray-600 py-4">
                                    <button
                                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                        className="w-full pr-8 text-left text-lg font-medium text-gray-800 dark:text-white"
                                    >
                                        {faq.question}
                                    </button>
                                    <span className="absolute top-4 right-0 text-xl font-bold text-gray-800 dark:text-white">
                                        {openIndex === index ? "−" : "+"}
                                    </span>
                                    {openIndex === index && (
                                        <p className="mt-2 text-gray-600 dark:text-gray-300">{faq.answer}</p>
                                    )}
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>


    );

};
export default QnA;