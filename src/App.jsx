import Navbar from "./components/layout/Navbar.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import Footer from "./components/layout/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import { GithubProvider } from "./context/GithubContext.jsx";
import { AlertProvider } from "./context/alertContext/AlertContext.jsx";
import User from "./pages/User.jsx";

const App = () => {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col w-full justify-between h-screen text-gray-300">
            <Navbar />
            <main className=" w-full  mx-auto p-4  bg-gray-900">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/user/:login" element={<User />} />
                <Route path="/error" element={<ErrorPage />} />
                <Route path="/*" element={<ErrorPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
};
export default App;
