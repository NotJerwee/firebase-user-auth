// React
import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Welcome user!</h1>
            <p>Homepage</p>
            <div>
                <Link to="/login">
                    <button style={{ margin: '10px', padding: '10px 20px' }}>Sign In</button>
                </Link>
                <Link to="/signup">
                    <button style={{ margin: '10px', padding: '10px 20px' }}>Sign Up</button>
                </Link>
            </div>
        </div>
    );
};
