import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { GITHUB_URL, LINKEDIN_PROFILE_URL, MAIL_ID } from "../../utils/urls";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 border-t">
      <motion.div
        className="max-w-4xl mx-auto px-6 text-center space-y-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >        
        <div className="flex justify-center gap-6 text-gray-400">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaGithub size={28} />
          </a>
          <a
            href={LINKEDIN_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href={MAIL_ID}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaEnvelope size={28} />
          </a>
        </div>

        <p className="text-sm text-gray-500">
         {new Date().getFullYear()} Pawan Kumar Mishra.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
