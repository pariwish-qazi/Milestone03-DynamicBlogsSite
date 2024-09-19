function About() {
    return (
        <section id="about" className="bg-gradient-to-b from-blue-200 to-blue-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Me</h2>
        <p className="mt-4 max-w-2xl text-lg text-red-800 mx-auto">
          Hello! I'm a senior student enrolled in the Governor's IT Initiative program, pursuing my passion to become a 
          <span className="text-indigo-600 font-semibold"> Generative AI Engineer</span>.
        </p>
        <p className="mt-4 max-w-2xl text-lg text-yellow-300 mx-auto">
          I am deeply enthusiastic about technology, especially in the field of artificial intelligence and web development. 
          I love creating websites that are both functional and visually appealing, and I am constantly exploring new ways to improve my skills and bring innovative ideas to life.
        </p>
        <p className="mt-4 max-w-2xl text-lg text-white mx-auto">
          Currently, I am focused on honing my skills in full-stack development, with a special interest in leveraging AI to build smarter, more dynamic web applications.
        </p>
      </div>
    </section>

    );
}

export default About;