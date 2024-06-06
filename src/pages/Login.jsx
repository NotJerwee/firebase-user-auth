// React 
import { useState } from "react";
import { Navigate, Link } from "react-router-dom";

// Firebase auth
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export const Login = ({ user }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignIn = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
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
            <h2>Login</h2>
            <form onSubmit={handleSignIn}>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" onChange={handleEmailChange} />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={handlePasswordChange} />
                <button type="submit">Sign In</button>
                <p>
                    Need an account? <Link to="/signup">Sign Up</Link>
                </p>
            </form>
        </section>
    );
};
