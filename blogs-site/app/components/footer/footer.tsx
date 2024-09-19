import React from 'react';

export default function Footer() {
    return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Get in Touch</h3>
            <p className="text-gray-400 mb-4">Feel free to contact me through email or reach out via social media!</p>
            <p>Email: <a href="mailto:example@email.com" className="text-indigo-500">bismaqazi2005@@email.com</a></p>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-yellow-300 text-lg font-semibold mb-4">Follow Me</h3>
            <div className="flex space-x-4">
              <a href ="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300">
              </a>
              <a href ="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300">
            </a>
             <a href ="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300">
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="mt-8 text-center">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} Bisma Qazi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
