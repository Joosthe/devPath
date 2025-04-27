import { Route, BrowserRouter as Router, Routes } from "react-router";
import Navbar from "./components/organism/Navbar/Navbar";

import User from "./pages/User/User";
import NoAccess from "./pages/NoAccess/NoAccess";
import PageNotFound from "./pages/NotFound/NotFound";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Courses from "./pages/Courses/CourseView";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
        <Route path="/course-view" element={<Courses />} />
        <Route path="/no-access" element={<NoAccess />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
