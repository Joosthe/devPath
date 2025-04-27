import { useState } from "react";
import { NavLink } from "react-router";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav role="navigation" className="fixed top-0 left-0 z-50 w-full bg-white p-4 shadow-md">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="flex items-center justify-between">
          <div className="text-left text-lg font-bold">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
            </ul>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none md:hidden"
          >
            <div className="space-y-1 p-1">
              <span className="block h-0.5 w-6 bg-gray-700"></span>
              <span className="block h-0.5 w-6 bg-gray-700"></span>
              <span className="block h-0.5 w-6 bg-gray-700"></span>
            </div>
          </button>
        </div>
        <div
          className={`md:flex md:flex-1 ${
            isOpen ? "block" : "hidden"
          } md:block`}
        >
          <div
            className={`mt-2 w-full text-center text-lg md:mt-0 md:flex-1 ${
              isOpen ? "block" : "hidden"
            } md:block`}
          >
            <ul className="flex flex-col md:flex-1 md:flex-row md:justify-center md:space-x-4">
              <li>
                <NavLink to="/user">User</NavLink>
              </li>
              <li>
                <NavLink to="/course-view">CourseView</NavLink>
              </li>
              <li>
                <NavLink to="/page-not-found">PageNotFound</NavLink>
              </li>
              <li>
                <NavLink to="/no-access">NoAccess</NavLink>
              </li>
            </ul>
          </div>

          <div className="justify-center text-center text-lg md:flex md:justify-end">
            <ul>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/user">User</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
