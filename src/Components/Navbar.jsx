import React, { useState } from 'react'
import { CiHeart } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { PiShoppingCartLight } from "react-icons/pi";
import { CiUser } from "react-icons/ci";

const Navbar = () => {

    const [showRoutes, setShowRoutes] = useState(false);
    const [ activeLink, setActiveLink ] = useState(null);

    const publicRoutes = [
        { id: 1, title: "Home", url: '/'}, { id: 2, title: "Products", url: '/Products'},
        { id: 3, title: "About", url: '/About'}, { id: 4, title: "Contact", url: '/Contact'}
    ];

  return (
    <div className='flex justify-center items-center px-[50px]'>
            <nav className='flex justify-center items-center gap-46  py-2'> 

                {/* Logo */}
                <div className=''>
                    <h1 className='text-[#841414] font-bold text-[25px]
                    font-sarif'>QuickKart</h1>
                </div>

                {/* Public Routes */}
                <ul className='flex justify-center items-center gap-10'>
                    {publicRoutes.map((item, index) => (
                            <li key={index} onClick={() => setActiveLink(index)}
                            className={`relative pb-1 after:rounded-full after:conten-[''] after:absolute after:left-0 after:bottom-0 after:h-[4px] after:bg-[#841414] after:transition-all after:duration-300 ${ activeLink === index ? "after:w-full text-[#841414]" :
                                "after:w-0 text-black"} hover:after:w-full hover:text-[#841414]`}>
                                <Link to={item.url}
                                className=''>{item.title}
                                </Link>
                            </li>
                    ))}
                </ul>

                {/* Protected Routes */}
                <ul className='flex justify-center items-center gap-1'>   
                        <li className=''>
                            <Link to={"/Favorite"}>
                                <span className='bg-red-800 px-[5px] text-[12px] 
                                text-white rounded-full absolute ml-[14px] mt-[-5px] text-center'>0</span>
                                <CiHeart size={25} />
                            </Link></li>
                        <li className=''>    
                                <Link to={"/AddToCart"}>
                                    <span className='bg-red-800 px-[5px] text-[12px] 
                                    text-white rounded-full absolute ml-[14px] mt-[-5px] text-center'>0</span>
                                    <PiShoppingCartLight size={25} />
                                </Link></li>
                        <li className=''><CiUser size={25} /></li>
                </ul>
            </nav>
    </div>
  )
}

export default Navbar;
