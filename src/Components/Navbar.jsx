import React, { useState, useEffect } from 'react';
import { CiHeart, CiUser, CiLogout } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom';
import { PiShoppingCartLight } from "react-icons/pi";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";
import AutheModal from './AutheModal';
import { MdArrowDropUp } from "react-icons/md";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useSelector } from 'react-redux';

const Navbar = () => {
    const { cartProducts } = useSelector((state) => state.cart);
    const { favoriteProducts } = useSelector((state) => state.favorite);

    const [showRoutes, setShowRoutes] = useState(false);
    const [showAuthModal, setShowAuthModal] = useState(false);
    const [showLogout, setShowLogout] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const navigate = useNavigate();
    const auth = getAuth();

    // Check if user is authenticated
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setIsAuthenticated(!!user);
        });

        return () => unsubscribe();
    }, []);

    // Handle Logout
    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/');
            setShowLogout(false);
            alert("Logout Successful!");
        } catch (error) {
            console.error("Logout Error:", error.message);
        }
    };

    // Protected Navigation Handler
    const handleProtectedNavigation = (path) => {
        if (isAuthenticated) {
            navigate(path);
        } else {
            setShowAuthModal(true);
        }
    };

    const publicRoutes = [
        { id: 1, title: "Home", url: '/' },
        { id: 2, title: "Products", url: '/Products' },
        { id: 3, title: "About", url: '/About' },
        { id: 4, title: "Contact", url: '/Contact' }
    ];

    return (
        <div className='flex justify-center items-center px-[50px] relative bg-white z-10'>
            <nav className='flex justify-center items-center lg:gap-46 md:gap-46 gap-15 py-2'>

                {/* Logo */}
                <div>
                    <h1 className='text-red-600 font-bold text-[25px] font-sarif'>QuickKart</h1>
                </div>

                {/* Public Routes */}
                <ul className='lg:flex justify-center items-center gap-10 hidden'>
                    {publicRoutes.map((item) => (
                        <li key={item.id} className='relative pb-1 after:rounded-full after:content-[""] after:absolute after:left-0 after:bottom-0 after:h-[4px] after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full hover:text-red-600'>
                            <Link to={item.url}>{item.title}</Link>
                        </li>
                    ))}
                </ul>

                {/* Protected Routes */}
                <ul className='flex justify-center items-center gap-2'>
                    {/* Favorite */}
                    <li onClick={() => handleProtectedNavigation("/Favorite")} className="cursor-pointer relative">
                        <span className='bg-red-600 px-[5px] text-[12px] text-white rounded-full absolute ml-[14px] mt-[-5px] text-center'>
                            {favoriteProducts.length}
                        </span>
                        <CiHeart size={25} />
                    </li>

                    {/* Add To Cart */}
                    <li onClick={() => handleProtectedNavigation("/AddToCart")} className="cursor-pointer relative">
                        <span className='bg-red-600 px-[5px] text-[12px] text-white rounded-full absolute ml-[14px] mt-[-5px] text-center'>
                            {cartProducts.length}
                        </span>
                        <PiShoppingCartLight size={25} />
                    </li>

                    {/* User Icon & Logout Button */}
                    <li className='relative flex items-center cursor-pointer lg:border lg:px-[0px] lg:rounded-full ml-[2px] '>
                        {/* User Icon */}
                        <CiUser size={25} onClick={() => setShowAuthModal(true)} />

                        {/* Logout Toggle Arrow */}
                        {isAuthenticated && (
                            <span onClick={() => setShowLogout((prev) => !prev)}>
                                <MdArrowDropUp size={20} className={`transition-transform duration-300 ${showLogout ? 'rotate-180' : ''}`} />
                            </span>
                        )}

                        {/* Logout Button with Animation */}
                        <AnimatePresence>
                            {showLogout && (
                                <motion.button
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute top-10 right-0 bg-white shadow-md px-4 py-2 rounded-md text-black flex items-center gap-2 z-10 cursor-pointer"
                                    onClick={handleLogout}
                                >
                                    <CiLogout />
                                    <span>Logout</span>
                                </motion.button>
                            )}
                        </AnimatePresence>
                    </li>

                    {/* Mobile Menu Icon */}
                    <li className='lg:hidden block' onClick={() => setShowRoutes(!showRoutes)}>
                        <RxHamburgerMenu size={25} />
                    </li>
                </ul>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {showRoutes && (
                    <motion.ul
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className='fixed top-0 right-0 w-[250px] h-full bg-white shadow-lg flex flex-col items-center justify-center gap-5 z-50'
                    >
                        <li className='absolute top-5 right-5 cursor-pointer hover:text-[#841414]' onClick={() => setShowRoutes(false)}>
                            <RxCross2 size={25} />
                        </li>
                        {publicRoutes.map((item) => (
                            <li key={item.id} className='text-black text-lg font-semibold relative pb-1 after:rounded-full after:content-[""] after:absolute after:left-0 after:bottom-0 after:h-[4px] after:bg-[#841414] after:transition-all after:duration-300 hover:after:w-full hover:text-[#841414]'>
                                <Link to={item.url} onClick={() => setShowRoutes(false)}>{item.title}</Link>
                            </li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>

            {/* Auth Modal */}
            <AutheModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
        </div>
    );
};

export default Navbar;
