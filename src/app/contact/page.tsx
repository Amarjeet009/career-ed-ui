import Link from "next/link";

import { Metadata } from "next";
import QnA from "@/components/qna/QnA";
import ContactForm from "@/components/ContactForm/ContactForm";

export const metadata: Metadata = {
  title: "Contact US - CareerEd",
  description: "Get in touch with CareerEd for support, inquiries, and assistance.",
};

const ContactPage = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-4 dark:bg-gray-dark rounded-lg">
        <div className="col-span-6 bg-white dark:bg-gray-dark">
          <QnA />
        </div>
        <div className="col-span-6 bg-white dark:bg-gray-dark ">
          <ContactForm />
        </div>
        <div className="col-span-12 bg-white dark:bg-gray-dark">
          <div className="mb-8 flex items-center justify-center">
            <span className="bg-body-color/50 hidden h-[1px] w-full max-w-[70px] sm:block"></span>
            <p className="text-body-color w-full px-5 text-center text-base font-medium">
              Contact To
            </p>
            <span className="bg-body-color/50 hidden h-[1px] w-full max-w-[70px] sm:block"></span>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-1">

            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow dark:shadow-lg">
              {/* Profile image + name */}
              <div className="flex items-center gap-3 mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    CareerED
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{ }</p>
                </div>
              </div>
              <p className="mt-2 text-gray-700 dark:text-gray-300">Email: info@career-ed.com</p>
              <p className="mt-2 text-gray-700 dark:text-gray-300">Phone: +1 234 567 890</p>
              <p className="mt-2 text-gray-700 dark:text-gray-300">Address: 123 Main St, City, Country</p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
