import React from "react";
import { Link } from "react-router";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar shadow-lg border-b border-b-gray-800 bg-gray-900 text-neutral-content">
        <ul className="container flex items-center justify-between mx-auto">
          <div className="flex-none mx-2 px-2">
            <FaGithub className="inline pr-2 text-3xl" />
            <Link to="/" className="text-lg font-bold align-middle">
              Github Finder
            </Link>
          </div>
          <div className=" flex items-center justify-end px-2 mx-2">
            <div className="flex gap-2 items-center ">
              <Link to="/" className="btn btn-ghost btn-lg rounded-btn">
                Home
              </Link>
              <Link to="/about" className="btn btn-ghost btn-lg rounded-btn">
                About
              </Link>
            </div>
          </div>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
