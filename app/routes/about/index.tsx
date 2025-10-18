const AboutPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 bg-gray-900">
      {/* intro section */}
      <div className="flex flex-col md:flex-row items-center gap-10 mb-12 md:items-start">
        <img
          src="/images/profile.jpg"
          alt="profile"
          className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-md"
        />
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Hey, I'm Kingsley 👋
          </h1>
          <p className="text-gray-300 text-lg">
            This is Kingsley, I'm a passionate developer with no experience but
            loves building friendly digital experience and helping others grow
            into confident, modern developers
          </p>
        </div>
      </div>
      {/* Bio section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-4">My Mission</h2>
        <p className="text-gray-300 leading-relaxed">
          I’m Kingsley, a software developer with a focus on web development,
          JavaScript, and React. I’m passionate about building intuitive,
          user-friendly applications and constantly learning new technologies. I
          also share my knowledge through tutorials and content creation.
        </p>
      </div>
      {/* tech stack section */}
      <h2 className="text-2xl font-semibold text-white mb-4">🚀 Tech I Use</h2>
      <ul className="flex flex-wrap gap-4 text-sm text-gray-300">
        {[
          'React.js',
          'Node.js',
          'Express.js',
          'MongoDB',
          'MySQL',
          'Python',
          'Django',
          'Ruby on Rails',
          'Vue.js',
          'Angular',
          'Flutter',
        ].map((tech) => (
          <li key={tech} className="bg-gray-700 px-3 py-1 rounded-md">
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutPage;
