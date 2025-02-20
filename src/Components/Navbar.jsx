import React, { useState } from 'react';
import { CiHeart } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { PiShoppingCartLight } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";
import AuthModal from './AuthModal';

const Navbar = () => {
    const [showRoutes, setShowRoutes] = useState(false);
    const [showAuthModal, setShowAuthModal] = useState(false);

    const publicRoutes = [
        { id: 1, title: "Home", url: '/' }, { id: 2, title: "Products", url: '/Products' },
        { id: 3, title: "About", url: '/About' }, { id: 4, title: "Contact", url: '/Contact' }
    ];

    return (
        <div className='flex justify-center items-center px-[50px]'>
            <nav className='flex justify-center items-center lg:gap-46 md:gap-46 gap-30 py-2'>

                {/* Logo */}
                <div className=''>
                    <h1 className='text-[#841414] font-bold text-[25px] font-sarif'>QuickKart</h1>
                </div>

                {/* Public Routes */}
                <ul className='lg:flex justify-center items-center gap-10 hidden'>
                    {publicRoutes.map((item) => (
                        <li key={item.id} className='relative pb-1 after:rounded-full after:conten-[""] after:absolute after:left-0 after:bottom-0 after:h-[4px] after:bg-[#841414] after:transition-all after:duration-300 hover:after:w-full hover:text-[#841414]'>
                            <Link to={item.url}>{item.title}</Link>
                        </li>
                    ))}
                </ul>

                {/* Protected Routes */}
                <ul className='flex justify-center items-center gap-1'>
                    <li>
                        <Link to={"/Favorite"}>
                            <span className='bg-red-800 px-[5px] text-[12px] text-white rounded-full absolute ml-[14px] mt-[-5px] text-center'>0</span>
                            <CiHeart size={25} />
                        </Link>
                    </li>
                    <li>
                        <Link to={"/AddToCart"}>
                            <span className='bg-red-800 px-[5px] text-[12px] text-white rounded-full absolute ml-[14px] mt-[-5px] text-center'>0</span>
                            <PiShoppingCartLight size={25} />
                        </Link>
                    </li>
                    <li className='cursor-pointer' onClick={() => setShowAuthModal(true)}><CiUser size={25} /></li>
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
                            <li key={item.id} className='text-black text-lg font-semibold relative pb-1 after:rounded-full after:conten-[" "] after:absolute after:left-0 after:bottom-0 after:h-[4px] after:bg-[#841414] after:transition-all after:duration-300 hover:after:w-full hover:text-[#841414]'>
                                <Link to={item.url} onClick={() => setShowRoutes(false)}>{item.title}</Link>
                            </li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>

            {/* Auth Modal */}
            <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
        </div>
    );
};

export default Navbar;
