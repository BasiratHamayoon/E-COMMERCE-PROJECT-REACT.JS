import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { FcGoogle } from "react-icons/fc";

const AuthModal = ({ isOpen, onClose }) => {
    const [isSignup, setIsSignup] = useState(false);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.3 }}
                className='fixed inset-0 flex justify-center items-center bg-white/10 backdrop-blur-md bg-opacity-50 z-50'
            >
                <div className='bg-white lg:w-[35%] md:w-[70%] w-[95%] flex flex-col justify-center items-center py-[20px] gap-10 shadow-lg shadow-black relative rounded-md'>
                    <button className='absolute top-4 right-4 text-gray-600 text-xl cursor-pointer' onClick={onClose}>&times;</button>
                    <h1 className='text-[23px]'>{isSignup ? "Sign Up" : "Login"}</h1>
                    <form className='flex flex-col gap-4 w-full px-[20px]'>
                        {isSignup && (
                            <label htmlFor="username">
                                <p className='text-[13px] text-gray-500 text-center'>Username</p>
                                <div className='w-[70%] border rounded-sm border-gray-200 px-[10px] m-auto py-[8px]'>
                                    <input type="text" className='focus:outline-none w-full' name='username' id='username' placeholder='Username' />
                                </div>
                            </label>
                        )}
                        <label htmlFor="email">
                            <p className='text-[13px] text-gray-500 text-center'>Email</p>
                            <div className='w-[70%] border rounded-sm border-gray-200 px-[10px] m-auto py-[8px]'>
                                <input type="email" className='focus:outline-none w-full' name='email' id='email' placeholder='Email' />
                            </div>
                        </label>
                        <label htmlFor="password">
                            <p className='text-[13px] text-gray-500 text-center'>Password</p>
                            <div className='w-[70%] border rounded-sm border-gray-200 px-[10px] m-auto py-[8px]'>
                                <input type="password" className='focus:outline-none w-full' name='password' id='password' placeholder='Password' />
                            </div>
                        </label>
                        <p className='text-gray-400 text-center'>OR</p>
                        <button className='flex justify-center items-center gap-2 w-[70%] m-auto border border-gray-300 py-2 rounded-md cursor-pointer'>
                            <FcGoogle size={20} />
                            <span>{isSignup ? "Sign Up" : "Login"} With Google</span>
                        </button>
                        <button type='submit' className='w-[70%] m-auto py-2 bg-[#841414] text-white rounded-md
                        hover:bg-black cursor-pointer'>
                            {isSignup ? "Sign Up" : "Login"}
                        </button>
                    </form>
                    <p className="text-gray-500 text-sm">
                        {isSignup ? "Already have an account?" : "Don't have an account?"}
                        <span className="text-[#841414] cursor-pointer ml-1" onClick={() => setIsSignup(!isSignup)}>
                            {isSignup ? "Login" : "Sign Up"}
                        </span>
                    </p>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default AuthModal;
