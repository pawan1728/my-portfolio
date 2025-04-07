import React from 'react'
import { Link } from 'react-router';

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "ERP Dashboard",
      description: "A React-based dashboard with charts and analytics.",
      tech: ["React", "Redux", "CanvasJS"],
      link: "https://github.com/yourusername/client-dashboard",
    },
    {
      id: 2,
      title: "Project Management Tool",
      description: "A task management app with role-based access.",
      tech: ["React", "Node.js", "MongoDB"],
      link: "https://your-live-demo.com",
    },
    {
      id: 3,
      title: "GrooveNexus",
      description: "A wordpress blogging website for Artist,Bollywood and many more information",
      tech: ["Wordpress"],
      link: "https://www.groovenexus.com/",
    },
    {
      id: 4,
      title: "Clairvoyant",
      description: "A Hubspot blogging website for build, train, customize, and improve AI and machine learning models",
      tech: ["Hubspot"],
      link: "https://www.clairvoyant.ai/",
    },
    {
      id: 5,
      title: "Self Storage India",
      description: "A wordpress website for Storage Management and Providing Space",
      tech: ["Wordpress"],
      link: "https://selfstorageindia.com/",
    },
  ];
  
  return (
    <div className='grid grid-cols-3 gap-4 p-2 text-center text-black'>
      {projects.map((item)=>{
       return <div key={item.id} className='border rounded-md p-2 bg-gray-200 hover:scale-102 duration-300 hover:bg-green-100'>
        <h2 className='text-xl font-bold'>{item.title}</h2>
        <p>{item.description}</p>
        <p>Skills: {item.tech.map((val)=>val).join(", ")}</p>
        <button className='border p-1 rounded-md bg-green-200'><Link to={item.link}>Project Link</Link></button>
       </div>
      })}
    </div>
  )
}

export default Project