
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Blogs from "../page";

const BlogCards: React.FC = () => {
  const blogs = [
    {
      title: 'How AI is Revolutionizing Web Development',
      imageUrl: 'https://via.placeholder.com/400x300',
      link: '/blog/ai-web-development',
    },
    {
      title: 'Top 5 Web Design Trends for 2024',
      imageUrl: 'https://via.placeholder.com/400x300',
      link: '/blog/web-design-trends-2024',
    },
    {
      title: 'Understanding the Basics of Generative AI',
      imageUrl: 'https://via.placeholder.com/400x300',
      link: '/blog/generative-ai-basics',
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
              <a href={blog.link}>
                <img
                  src={blog.imageUrl}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
              </a>
              <div className="p-6">
                <a href={blog.link}>
                  <h3 className="text-lg font-bold text-gray-900 hover:text-indigo-600 transition-colors duration-300">
                    {blog.title}
                  </h3>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogCards;
