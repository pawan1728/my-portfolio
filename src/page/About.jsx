import React from "react";
import {
  CURRENT_CITY_NAME,
  CURRENT_COMPANY_WEBSITE_URL,
  GITHUB_URL,
  LINKEDIN_PROFILE_URL,
  MAIL_ID,
} from "../utils/urls";
import MY_PIC from "../assets/pawan.jpeg";
import { Link } from "react-router";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const About = () => {
  const socialLinks = [
    { name: "Linkedin", link:  LINKEDIN_PROFILE_URL , icon: FaLinkedin },
    { name: "Github", link:  GITHUB_URL , icon: FaGithub },
    { name: "Gmail", link:  `mailto:${MAIL_ID}` , icon: FaEnvelope },
  ];
  return (
    <div className="flex justify-around items-center">
      <div className="w-1/4 p-6">
        <img
          src={MY_PIC}
          alt="Pawan Kumar Mishra"
          className="w-60 h-60 rounded-full"
        />
        <ul className="mt-6 flex space-x-6 text-2xl items-center justify-center">
          {socialLinks.map((item) => {            
            return (
              <li
                key={item.name}
                className="hover:text-blue-500 transition w-8 h-8"
              >
                <Link to={item.link}>
                  <item.icon />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="w-2/3 text-justify rounded-md p-6 text-2xl ">
        <h2>
          Hi I am Pawan Kumar Mishra, a 30 year old Frontend developer, Web
          developer, living in 
          <a
            className="border-b border-gray-300 ml-1 text-blue-400"
            href={CURRENT_COMPANY_WEBSITE_URL}
          >
            {" "}
            {CURRENT_CITY_NAME}, India 
          </a>
          . I am a Computer Science Engineer, currently working with awesome
          folks at 
          <a
            className="border-b border-gray-300 ml-1 text-blue-400"
            href={CURRENT_COMPANY_WEBSITE_URL}
            target="_blank"
          >
            {" "}Novus Insights 
          </a>
          . Have a look at skills or just connect with me on 
          <a
            className="border-b border-gray-300 ml-1 text-blue-400"
            href={LINKEDIN_PROFILE_URL}
            target="_blank"
          >
            {" "}LinkedIn 
          </a>
          . I am always excited to do business with like minded people, lets
          discuss over coffee.
        </h2>
      </div>
    </div>
  );
};

export default About;
