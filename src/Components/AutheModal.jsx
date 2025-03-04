import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";
import { app } from "../firebaseConfig.js";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AutheModal = ({ isOpen, onClose }) => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const inputRef = useRef(null);
    const navigate = useNavigate();

    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState({ userName: "", email: "", password: "" });

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 200);
        }
    }, [isOpen, isSignup]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value.trim() });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);

        try {
            if (isSignup) {
                await createUserWithEmailAndPassword(auth, formData.email, formData.password);
                toast.success("Sign-up successful ✅");
            } else {
                await signInWithEmailAndPassword(auth, formData.email, formData.password);
                toast.success("Login successful ✅");
            }

            setFormData({ userName: "", email: "", password: "" });
            onClose();
            navigate("/");
        } catch (error) {
            console.error("Authentication Error:", error.message);
            toast.error(error.message);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            toast.success(`Welcome, ${result.user.displayName}!`);
            onClose();
        } catch (error) {
            console.error("Google Sign-In Error:", error.message);
            toast.error(error.message);
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
                            className="flex justify-center items-center gap-2 w-[70%] m-auto border border-gray-300 py-2 rounded-md cursor-pointer transition hover:bg-gray-100"
                            onClick={handleGoogleSignIn}
                        >
                            <FcGoogle size={20} />
                            <span>{isSignup ? "Sign Up" : "Login"} With Google</span>
                        </button>

                        <button
                            type="submit"
                            className="w-[70%] m-auto py-2 bg-red-600 text-white rounded-md transition-all hover:bg-black cursor-pointer shadow-md"
                        >
                            {isSignup ? "Sign Up" : "Login"}
                        </button>
                    </form>

                    <p className="text-gray-500 text-sm">
                        {isSignup ? "Already have an account?" : "Don't have an account?"}
                        <span
                            className="text-red-600 cursor-pointer ml-1 font-semibold transition hover:text-black"
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
