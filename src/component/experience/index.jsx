import { motion } from "framer-motion";

const experiences = [
  {
    company: "Novus Insights Private Limited",
    role: "Senior Frontend Developer",
    duration: "Jan 2024 - Present",
    responsibilities: [
      "Developed scalable React applications with optimized performance.",
      "Implemented reusable components and managed state with Redux.",
      "Led a team of developers and conducted code reviews.",
    ],
    companyUrl :"https://www.novusinsights.com/"
  },
  {
    company: "The Higher Pitch",
    role: "Software Engineer",
    duration: "March-2021 - Oct 2023",
    responsibilities: [
      "Built responsive UI using React, Tailwind CSS,Wordpress,Hubspot and JavaScript.",
      "Collaborated closely with designers and backend developers.",
      "Enhanced user experience through interactive animations.",
    ],
    companyUrl :"https://thehigherpitch.com/"
  },
  {
    company: "Technix LLC",
    role: "Jr Softwaare Engineer",
    duration: "March 2020 - August 2020",
    responsibilities: [
      "Created custom web applications for clients.",
      "Optimized websites for performance and SEO.",
      "Delivered projects on time and within budget.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-12 text-white">      
      <div className=" grid grid-cols-2 gap-4 mx-6">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            <h3 className="text-2xl font-semibold">{experience.role}</h3>
            <p className="text-blue-400 mt-2">{experience.company} | {experience.duration}</p>
            <ul className="mt-4 space-y-2 list-disc list-inside">
              {experience.responsibilities.map((task, idx) => (
                <li key={idx}>{task}</li>
              ))}
            </ul>
            <a href={experience.companyUrl} target="_blank" className="border-b text-blue-400">{experience.companyUrl}</a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
