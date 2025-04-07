import React from "react";
import { motion } from "framer-motion";
import Hero from "../component/hero";
import About from "./About";
import Project from "./Project";
import Experience from "../component/experience";
import Skill from "../component/skills";
import Contact from "./Contact";
import Footer from "../component/footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <div id="about" className=" bg-gray-700">
        <motion.h2
          className="text-4xl font-bold p-4 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <About />
      </div>

      <div id="projects" className="bg-gray-900 py-16">
        <motion.h2
          className="text-4xl font-bold p-4 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Project Details
        </motion.h2>

        <Project />
      </div>

      <div id="skill">
        <motion.h2
          className="text-4xl font-bold p-4 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>

        <p className="px-6 text-xl">These are the technologies I work on</p>
        <Skill />
      </div>

      <div id="experience" className="bg-gray-900">
        <motion.h2
          className="text-4xl font-bold p-4 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>

        <Experience />
      </div>

      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
