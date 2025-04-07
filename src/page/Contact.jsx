import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { CONTACT_NUMBER, CURRENT_CITY_NAME, MAIL_ID } from "../utils/urls";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-12 bg-gray-700 text-white">
       <motion.h2
        className="text-4xl font-bold p-4 mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Contact Me
      </motion.h2>
      <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        {/* Contact Details */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold">Get in Touch</h3>
          <p className="text-gray-400">
            Feel free to reach out for any inquiries or collaborations!
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Mail className="text-blue-400" />
              <span><a href={`mailto:${MAIL_ID}`} >pawan.k1728@gmail.com</a></span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="text-blue-400" />
              <span><a href={`tel:${CONTACT_NUMBER}`} >+91 7004308436</a></span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="text-blue-400" />
              <span>{CURRENT_CITY_NAME} , India</span>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-6 rounded-lg shadow-lg space-y-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full p-3 bg-gray-700 text-white rounded-lg"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full p-3 bg-gray-700 text-white rounded-lg"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="w-full p-3 bg-gray-700 text-white rounded-lg h-32"
          ></textarea>
          <button
            type="submit"
            className="w-full p-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
