import React from "react";
import Card from "./blogcards/page";
// import blogPosts from "../_lib/data";
import Image from "next/image";
import BlogCards from "./blogcards/page";

const Blogs: React.FC = () => {
  return (
    <div>
      {/* Background Image Section */}
      <div
        className="relative overflow-hidden h-[50vh] flex items-center justify-center text-center"
      >
         <div className="absolute inset-0">
        <Image
          src="/bg.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-100" // Adjust the opacity here
        />
      </div>
        <div
          className="relative z-10 p-4"
          style={{
            background: "rgba(0, 0, 0, 0.4)", // Optional: semi-transparent background to enhance text readability
          }}
        >
          <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">
            Welcome to My Blogs Section
          </h1>
          <p className="text-red-200 text-lg md:text-xl">
            Discover insightful articles and updates on various
            topics. Stay tuned for the latest trends and tips.
          </p>
        </div>
      </div>


      {/* Blogs Section */}
      <div className="p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Blogs
        </h2>

         {/* Blog Cards Grid */}
         
        </div>
        </div>
        
  );
};

export default Blogs;
