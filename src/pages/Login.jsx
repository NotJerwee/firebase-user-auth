// React 
import { useState } from "react";
import { Navigate, Link } from "react-router-dom";

// Firebase auth
import { auth, googleProvider } from "../firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

// Image
import googleLogoImage from '../assets/googleLogo.png';

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

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                console.log(result.user);
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
        <section className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
                <form onSubmit={handleSignIn} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input 
                            type="text" 
                            id="email" 
                            onChange={handleEmailChange} 
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            onChange={handlePasswordChange} 
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <button 
                            type="submit" 
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Login
                        </button>
                    </div>
                    <div className="relative flex py-5 items-center">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <span className="flex-shrink mx-4 text-gray-500">or</span>
                        <div className="flex-grow border-t border-gray-300"></div>
                    </div>
                    <div>
                        <button 
                            type="button" 
                            onClick={handleGoogleSignIn} 
                            className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-black bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                        >
                            <img src={googleLogoImage} alt="Google Logo" className="w-6 h-6 mr-2" />
                            Continue with Google
                        </button>
                    </div>
                    <p className="text-sm text-center">
                        Need an account? <Link to="/signup" className="text-blue-500 hover:underline">Sign Up</Link>
                    </p>
                </form>
            </div>
        </section>
    );
};
