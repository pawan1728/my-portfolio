import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { GITHUB_URL, LINKEDIN_PROFILE_URL, MAIL_ID } from "../../utils/urls";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center h-screen bg-gray-900 text-white">
      {/* Animated Text */}
      <motion.h1
        className="text-4xl md:text-6xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm <span className="text-blue-500">Pawan Kumar Mishra</span>
      </motion.h1>

      <motion.p
        className="mt-4 text-lg md:text-xl text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        React.js Developer | Building Scalable Frontend Applications
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="mt-6 flex space-x-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-lg transition"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border-2 border-white hover:bg-white hover:text-gray-900 text-white rounded-lg transition"
        >
          Contact Me
        </a>
      </motion.div>

      {/* Social Links */}
      <motion.div
        className="mt-6 flex space-x-6 text-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition"
        >
          <FaGithub />
        </a>
        <a
          href={LINKEDIN_PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href={`mailto:${MAIL_ID}`}
          className="hover:text-blue-500 transition"
        >
          <FaEnvelope />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
