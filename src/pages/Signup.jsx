// React
import { useState } from "react";
import { Navigate, Link } from "react-router-dom";

// Firebase auth
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const Signup = ({ user }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential.user);
            })
            .catch((error) => {
                console.log(error.code, error.message);
            });
    };

    const handleEmailChange = (event) => setEmail(event.target.value);
    const handlePasswordChange = (event) => setPassword(event.target.value);

    if (user) {
        return <Navigate to="/private" />;
    }

    return (
        <section>
            <h2>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" onChange={handleEmailChange} />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={handlePasswordChange} />
                <button type="submit">Sign Up</button>
                <p>
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </form>
        </section>
    );
};
