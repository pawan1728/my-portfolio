import React from "react";
import REACT_ICON from "../../assets/react.svg";
import JS_ICON from "../../assets/js.svg";
import NODE_ICON from "../../assets/nodejs-logo.svg";
import EXPRESS_ICON from "../../assets/express.svg";
import MONGO_ICON from "../../assets/mongodb-icon-1-1.svg";
import HTML_ICON from "../../assets/html-5-logo.svg";
import CSS_ICON from "../../assets/css3.svg";
import WORDPRESS_ICON from "../../assets/wordpress.svg";
import HUBSPOT_ICON from "../../assets/hubspot.svg";
import AWS_ICON from "../../assets/aws.webp";

const Skill = () => {
  const skills = [
    {
      name: "React.js",
      experience: "2 yrs",
      iconLink: REACT_ICON,
    },
    {
      name: "JavaScript",
      experience: "3 yrs",
      iconLink: JS_ICON,
    },
    {
      name: "Node.js",
      experience: "1 yrs",
      iconLink: NODE_ICON,
    },
    {
      name: "Express.js",
      experience: "1 yrs",
      iconLink: EXPRESS_ICON,
    },
    {
      name: "MongoDB",
      experience: "1 yrs",
      iconLink: MONGO_ICON,
    },
    {
      name: "AWS",
      experience: "1 yrs",
      iconLink: AWS_ICON,
    },
    {
      name: "HTML5",
      experience: "4 yrs",
      iconLink: HTML_ICON,
    },
    {
      name: "CSS3",
      experience: "4 yrs",
      iconLink: CSS_ICON,
    },
    {
      name: "WordPress",
      experience: "4 yrs",
      iconLink: WORDPRESS_ICON,
    },
    {
      name: "Hubspot",
      experience: "4 yrs",
      iconLink: HUBSPOT_ICON,
    },
  ];
  return (
    <div className="grid grid-cols-5 gap-4 p-4 m-2 text-center">
      {skills.map((item) => {
        return (
          <div
            key={item.name}
            className="border rounded-md p-2 m-1 w-fit bg-white  min-w-20 w-full duration-300 hover:ease-in hover:scale-105 cursor-pointer"
          >
            <img
              src={item.iconLink}
              alt={item.name}
              className="w-24s h-24 text-white fill-white mx-auto"
            />
            <h3 className="text-xl text-black p-1">{item.name}</h3>
            <p className="text-black">{item.experience}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Skill;
