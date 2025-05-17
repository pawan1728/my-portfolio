import React from "react";
import { Link } from "react-router";

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "ERP Dashboard",
      description: "Developed a custom CRM-ERP application to streamline the end-to-end business process—from sales and operations to finance. Previously, all departments relied on Excel for data entry and tracking. This tool centralizes and digitizes the entire workflow, allowing teams to manage leads, track operational progress, and handle financial transactions and reporting within a single integrated platform. The system improves data accuracy, enhances collaboration across departments, and significantly reduces manual effort.",
      tech: ["React.js", "Redux.js", "CanvasJS"],
      link: "https://github.com/yourusername/client-dashboard",
    },
    {
      id: 2,
      title: "Dev Tinder",
      description:
        "Built a social networking platform for developers to connect and collaborate. Users can send and receive connection requests, manage their network, and engage with other developers. The app supports features that enhance professional interaction and community building.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux.js"],
      link: "https://github.com/pawan1728/devTinder-web",
    },
    {
      id: 3,
      title: "Tinggit",
      description:
        "Developed an internal corporate web application that enables employees to share achievements, birthdays, and other updates within the organization. The platform also allows employees to refer candidates, fill in their daily tasks, and track work progress. Management can review employee performance, assign ratings, and provide appraisals or bonuses accordingly. Additionally, the tool includes comprehensive leave management and attendance tracking features to streamline HR operations.",
      tech: ["React,js","Redux.js","Material UI"],
      link: "https://myaccount.tinggit.com/",
    },
    // {
    //   id: 4,
    //   title: "Clairvoyant",
    //   description:
    //     "A Hubspot blogging website for build, train, customize, and improve AI and machine learning models",
    //   tech: ["Hubspot"],
    //   link: "https://www.clairvoyant.ai/",
    // },
    // {
    //   id: 5,
    //   title: "Self Storage India",
    //   description:
    //     "A wordpress website for Storage Management and Providing Space",
    //   tech: ["Wordpress"],
    //   link: "https://selfstorageindia.com/",
    // },
  ];

  return (
    <div className="grid grid-cols-2 gap-8 mx-6 p-2 text-black">
      {projects.map((item) => {
        return (
          <div
            key={item.id}
            className="border rounded-md p-3 bg-gray-200 hover:scale-102 duration-300 hover:bg-green-100 flex flex-col justify-between h-full"
          >
            <div>
              <h2 className="text-xl font-bold text-center mb-4">{item.title}</h2>
              <p className="font-bold">Project Description :<span className="font-normal"> {item.description}</span></p>
              <p className="my-1">
                Skills :
                <span className="font-bold">
                  {" "}
                  {item.tech.map((val) => val).join(", ")}
                </span>
              </p>
            </div>
            <div className="flex justify-center mt-auto">
              <button className="border p-1 rounded-md bg-green-200">
                <Link to={item.link}>Project Link</Link>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Project;
