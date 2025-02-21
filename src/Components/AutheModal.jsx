import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";
import { app } from "../firebase";
import { useNavigate } from "react-router-dom";

const AutheModal = ({ isOpen, onClose }) => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const inputRef = useRef(null);
    const navigate = useNavigate("");

    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState({
        userName: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);

        try {
            if (isSignup) {
                // 🔹 Create new user (Sign Up)
                await createUserWithEmailAndPassword(auth, formData.email, formData.password);
                alert("Sign-up successful ✅");
                navigate("/")
            } else {
                // 🔹 Sign in existing user (Login)
                await signInWithEmailAndPassword(auth, formData.email, formData.password);
                alert("Login successful ✅");
                navigate("/")
            }

            // ✅ Clear form fields after submission
            setFormData({ userName: "", email: "", password: "" });

            // Close the modal after successful submission
            onClose();
        } catch (error) {
            console.error("Authentication Error:", error.message);
            alert(error.message);
        }
    };

    // 🔹 Google Authentication Function
    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            console.log("Google Sign-In Successful ✅", result.user);
            alert(`Welcome, ${result.user.displayName}!`);
            onClose();
        } catch (error) {
            console.error("Google Sign-In Error:", error.message);
            alert(error.message);
        }
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 flex justify-center items-center bg-white/10 backdrop-blur-md bg-opacity-50 z-50"
            >
                <div className="bg-white lg:w-[35%] md:w-[70%] w-[95%] flex flex-col justify-center items-center py-6 gap-6 shadow-lg shadow-black relative rounded-md">
                    <button
                        className="absolute top-4 right-4 text-gray-600 text-xl cursor-pointer"
                        onClick={onClose}
                    >
                        &times;
                    </button>

                    <h1 className="text-xl font-semibold">{isSignup ? "Sign Up" : "Login"}</h1>

                    <form className="flex flex-col gap-4 w-full px-6" onSubmit={handleSubmit}>
                        {isSignup && (
                            <label htmlFor="userName" className="text-center">
                                <p className="text-sm text-gray-500">Username</p>
                                <div className="w-[70%] border rounded-sm border-gray-200 px-3 py-2 m-auto">
                                    <input
                                        type="text"
                                        className="focus:outline-none w-full"
                                        name="userName"
                                        id="userName"
                                        placeholder="Username"
                                        value={formData.userName}
                                        onChange={handleChange}
                                        ref={inputRef}
                                    />
                                </div>
                            </label>
                        )}

                        <label htmlFor="email" className="text-center">
                            <p className="text-sm text-gray-500">Email</p>
                            <div className="w-[70%] border rounded-sm border-gray-200 px-3 py-2 m-auto">
                                <input
                                    type="email"
                                    className="focus:outline-none w-full"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    ref={!isSignup ? inputRef : null}
                                />
                            </div>
                        </label>

                        <label htmlFor="password" className="text-center">
                            <p className="text-sm text-gray-500">Password</p>
                            <div className="w-[70%] border rounded-sm border-gray-200 px-3 py-2 m-auto">
                                <input
                                    type="password"
                                    className="focus:outline-none w-full"
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </div>
                        </label>

                        <p className="text-gray-400 text-center">OR</p>

                        <button
                            type="button"
                            className="flex justify-center items-center gap-2 w-[70%] m-auto border border-gray-300 py-2 rounded-md cursor-pointer"
                            onClick={handleGoogleSignIn} // 🔹 Trigger Google Sign-In
                        >
                            <FcGoogle size={20} />
                            <span>{isSignup ? "Sign Up" : "Login"} With Google</span>
                        </button>

                        <button
                            type="submit"
                            className="w-[70%] m-auto py-2 bg-[#841414] text-white rounded-md hover:bg-black cursor-pointer"
                        >
                            {isSignup ? "Sign Up" : "Login"}
                        </button>
                    </form>

                    <p className="text-gray-500 text-sm">
                        {isSignup ? "Already have an account?" : "Don't have an account?"}
                        <span
                            className="text-[#841414] cursor-pointer ml-1 font-semibold"
                            onClick={() => setIsSignup(!isSignup)}
                        >
                            {isSignup ? "Login" : "Sign Up"}
                        </span>
                    </p>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default AutheModal;
