import React from "react";
import { motion } from "motion/react";
import { Typography } from "@mui/material";

const Landing = () => {
  return (
    <div className="bg-transparent overflow-y-auto">
      {/* Hero Section */}
      <section>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center mb-20 mt-10">
          <Typography
            component="h1"
            variant="h2"
            className="text-4xl md:text-6xl font-bold leading-tight text-white"
          >
            ByteWrite
          </Typography>

          <p className="mt-4 text-lg md:text-xl text-white">
            Where technology meets storytelling, perfect for sharing innovative
            ideas and tech-driven insights.
          </p>
          <div className="mt-8">
            <a
              href="/signup"
              className="px-6 py-3 bg-white text-blue-600 rounded-lg shadow-md hover:bg-gray-100 text-lg font-medium"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl text-white md:text-4xl font-semibold text-center mb-12">
            Why Choose ByteWrite?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Feature 1 */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8h2a2 2 0 012 2v9a2 2 0 01-2 2h-2m-4-4H7m4 0V4m0 4L9 6m2 2l2-2"
                    ></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-medium bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent mb-4">
                Innovative Design
              </h3>
              <p className="text-lg text-gradient bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent mb-6">
                A modern platform to share your ideas with style and precision.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-purple-100 p-4 rounded-full">
                  <svg
                    className="w-8 h-8 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20 21V8a2 2 0 00-2-2H6a2 2 0 00-2 2v13M8 21h8m-4-5v-6"
                    ></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-medium bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent mb-4">
                Tech-Driven Insights
              </h3>
              <p className="text-lg text-gradient bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent mb-6">
                Dive into the latest tech trends and innovations.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-green-100 p-4 rounded-full">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 10h16m-7 6h7m-7-4h7"
                    ></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-medium bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent mb-4">
                Easy Collaboration
              </h3>
              <p className="text-lg text-gradient bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent mb-6">
                Work together to create impactful content seamlessly.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
