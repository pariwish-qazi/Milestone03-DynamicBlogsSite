import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
import Link from "next/link";
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-gradient-to-b from-blue-200 to-blue-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Contact Me</h2>
        <p className="mt-4 text-lg leading-6 text-gray-600">
          Have questions or want to get in touch? Fill out the form below!
        </p>
      </div>
      
      <div className="mt-12 max-w-xl mx-auto">
        <form className="grid grid-cols-1 gap-y-6">
          <div>
            <label htmlFor="name" className="sr-only">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Your Message"
              className="block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};


export default Contact;