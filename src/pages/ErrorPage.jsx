import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router";

//this is error page or not found page just react router Link use
const ErrorPage = () => {
    return (
        <div className="hero">
            <div className="text-center hero-content">
                <div className="max-w-lg">
                    <h1 className="text-6xl font-bold mb-8">Oops?</h1>
                    <p className="text-4xl mb-8">404 Page not found</p>
                    <Link to='/' className="btn btn-primary btn-lg">
                        <FaHome className="mr-2" />
                        Back To Home
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default ErrorPage;
