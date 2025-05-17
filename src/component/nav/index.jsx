import React from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  
  const handleNavItems = (path) => {
    navigate(path);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Project", path: "/project" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="flex">
      <ul className="flex">
        {navItems.map((item) => (
          <li
            key={item.name}
            onClick={() => handleNavItems(item.path)}
            className="p-1 m-1 cursor-pointer"
          >
            {item.name}
          </li>
        ))}
      </ul>
      <a
        href="my-portfolio\src\assets\PawanKumar_Mishra_sr_frontend_developer.pdf"
        download="my-portfolio\src\assets\PawanKumar_Mishra_sr_frontend_developer.pdf"
        className="bg-green-300 rounded-md text-white p-1 m-1 hover:bg-green-400 duration-300"
      >
        Get Resume
      </a>{" "}
    </div>
  );
};

export default NavBar;
