import { Link } from "react-router";

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="flex items-center justify-between">
        <div className="text-lg font-bold">My App</div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/login" className="hover:text-gray-300">
              Login
            </Link>
          </li>
          <li>
            <Link to="/courses" className="hover:text-gray-300">
              Courses
            </Link>
          </li>
          <li>
            <Link to="/notfound" className="hover:text-gray-300">
              NotFound
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
