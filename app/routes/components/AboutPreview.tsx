import { Link } from 'react-router';

const AboutPreview = () => {
  return (
    <section className="mt-12 p-10 flex flex-col items-center gap-8 bg-gray-900 md:flex-row">
      <img
        src="/images/profile.jpg"
        alt="profile"
        className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 shadow-md"
      />
      <div>
        <h2 className="text-2xl font-semibold text-white mb-2">👋 About me</h2>
        <p className="text-gray-200 mb-4 mx-w 4xl">
          I’m Kingsley, a software developer with a focus on web development,
          JavaScript, and React. I’m passionate about building intuitive,
          user-friendly applications and constantly learning new technologies. I
          also share my knowledge through tutorials and content creation.
        </p>
        <Link
          to="/about"
          className="inline-block text-blue-400 hover:underline text-sm"
        >
          Learn more about me
        </Link>
      </div>
    </section>
  );
};

export default AboutPreview;
