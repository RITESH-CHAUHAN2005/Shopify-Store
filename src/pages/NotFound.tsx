
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-slate-800">404</h1>
        <p className="text-xl text-slate-600 mb-6">This page doesn't exist</p>
        <Link to="/" className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded btn-transition inline-block">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
