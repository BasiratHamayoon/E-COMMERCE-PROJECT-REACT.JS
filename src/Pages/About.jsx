import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import img from "../assets/About-images/img.jpg";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <div className="relative w-full h-[90vh] flex flex-col justify-center items-center text-center">
        {/* Background Image */}
        <motion.div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${img})` }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        ></motion.div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-center px-6">
          {/* Animated Heading */}
          <motion.h1
            className="text-[40px] text-white font-extrabold tracking-wide uppercase"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            About QuickCart
          </motion.h1>

          {/* Animated Paragraph */}
          <motion.p
            className="text-white max-w-[700px] text-lg leading-relaxed mt-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Welcome to{" "}
            <span className="font-bold text-red-500 text-[22px]">QuickCart</span
            >—your go-to online shopping destination! We offer a{" "}
            <strong>fast, secure, and hassle-free</strong> shopping experience
            with a wide selection of high-quality products at unbeatable prices.{" "}
            <strong>Shop smart, shop fast!</strong>
          </motion.p>

          {/* Animated Button */}
          <motion.button
            className="mt-6 px-6 py-3 bg-red-600 text-white text-lg font-semibold rounded-full shadow-md hover:bg-white hover:text-red-600 transition cursor-pointer"
            onClick={() => navigate("/")}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Start Shopping
          </motion.button>
        </div>
      </div>

      {/* Additional Sections (Now Visible) */}
      <div className="w-full py-12 px-6 md:px-16 lg:px-32 text-center bg-white">
        {/* Our Mission Section */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold ">Our Mission</h2>
          <p className="text-gray-600 mt-4">
            At <span className="font-bold ">QuickCart</span>, our
            goal is to make online shopping **fast, affordable, and reliable**.
            We strive to offer **top-quality products**, ensuring that every
            purchase is a seamless experience. **Your satisfaction is our
            priority!**
          </p>
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold">Why Choose Us?</h2>
          <div className="flex flex-col md:flex-row justify-center gap-6 mt-6">
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">
                Fast & Reliable Delivery
              </h3>
              <p className=" mt-2">
                Get your orders delivered quickly and on time.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">
                Secure Payments
              </h3>
              <p className=" mt-2">
                Your transactions are encrypted and completely safe.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold ">
                Wide Range of Products
              </h3>
              <p className="text-gray-600 mt-2">
                Choose from thousands of high-quality items at great prices.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold ">Get in Touch</h2>
          <p className="text-gray-600 mt-4">
            Have any questions? We're here to help! Contact us via email at{" "}
            <span className="font-bold text-red-600">support@quickcart.com</span>{" "}
            or call us at <span className="font-bold">+123 456 7890</span>.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
