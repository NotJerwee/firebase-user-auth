// React
import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
                <h1>Welcome user!</h1>
                <p>Homepage</p>
                <div>
                    <Link to="/login">
                        <button className="m-2 px-4 py-2 bg-blue-500 text-white rounded">Sign In</button>
                    </Link>
                    <Link to="/signup">
                        <button className="m-2 px-4 py-2 bg-blue-500 text-white rounded">Sign Up</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
