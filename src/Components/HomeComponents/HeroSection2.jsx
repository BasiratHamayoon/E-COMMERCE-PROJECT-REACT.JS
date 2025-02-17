import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import img1 from '../../assets/Hero2-imgs/img1.jpg';
import img2 from '../../assets/Hero2-imgs/img2.jpg';
import img3 from '../../assets/Hero2-imgs/img3.jpg';

const HeroSection2 = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { threshold: 0.8 }); // Triggers when 60% visible

    const heroItems = [
        { id: 1, img: img1, title: "Let The Breeze In", description: " Bring freshness into your space with our elegantly designed product" },
        { id: 2, img: img2, title: "Introducing Track", description: "Shop now and experience the perfect blend of elegance." },
        { id: 3, img: img3, title: "The Curvy 90's Cheeky Jean", description: " Elevate your lifestyle with cutting-edge features." }
    ];

    return (
        <div className='flex justify-center items-center'>
            <motion.div 
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className='grid lg:grid-cols-3 grid-cols-1 justify-center items-center lg:w-[60%] w-[80%] my-[70px] m-auto'
            >
                {heroItems.map((item) => (
                    <motion.div 
                        key={item.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: item.id * 0.2 }}
                        className="w-[260px] h-[470px] flex flex-col relative group transition-all duration-500 hover:scale-105 m-auto"
                    >
                        <img src={item.img} className='w-[250px] h-[430px] m-auto' />
                        
                        {/* Gradient Overlay on Hover */}
                        <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 cursor-pointer"></div>

                        <h1 className='text-[18px] font-sans text-gray-600 text-center font-semibold relative z-10'>
                            {item.title}
                        </h1>
                        <p className='text-[14px] text-center font-sans text-gray-600 relative z-10'>
                            {item.description}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default HeroSection2;
