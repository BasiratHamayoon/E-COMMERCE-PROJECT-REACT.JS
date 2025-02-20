import React, { useEffect } from 'react';
import { fetchProducts } from '../Slices/ProductSlice';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion'; // Importing Framer Motion
import { PiShoppingCartLight } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { addToCart } from '../Slices/CartSlice';
import { toggleFavorite } from '../Slices/favoriteSlice';
import favIcon from '../assets/cart-favorite-icons/fav.gif'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Favorite = () => {
   const { products, isLoading, message } = useSelector((state) => state.products);
  const { favoriteProducts } = useSelector((state) => state.favorite); 
  const dispatch = useDispatch();

  const handleFavoriteProduct = (product) => {
    dispatch(toggleFavorite(product));
  };

  const handleCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`Product added to cart!`, {
      position: "bottom-right",
      autoClose: 2000,
    });
    console.log(product);
  };

  // Checking if the product already exists in the favorites page
  const isFavorite = (productId) => {
    return favoriteProducts.some((item) => item.id === productId);
  };

  if (favoriteProducts.length === 0) {
    return <div>
      <p className='text-center mt-[200px] text-[20px] text-gray-600'>No Favorite Product Found!</p>
      <span className='m-auto flex justify-center items-center'><img src={favIcon}  className='w-[28px] h-[28px]'/></span>
      </div>;
  }

  return (
       <div className="flex flex-col py-[50px] justify-center items-center">
            <h1 className="text-[28px] font-bold font-sans text-center py-[2px]">Favorite Products</h1>
            <span className="lg:w-[8%] w-[20%] bg-[#841414] h-[6px] rounded-md m-auto"></span>
      
            {/* Framer Motion to animate the grid on page load */}
            <motion.div
              className="grid lg:grid-cols-4 md:grid-cols-2 py-[70px] gap-20 lg:w-[70%] md:w-[80%] w-[90%] m-auto"
              initial={{ opacity: 0 }} // Start invisible
              animate={{ opacity: 1 }} // Fade in
              transition={{ duration: 0.8 }} // Smooth transition for grid fade-in
            >
              {favoriteProducts.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="flex flex-col justify-center items-center gap-4 relative"
                  whileHover={{ scale: 1.05 }} // Scale effect on hover
                  transition={{ duration: 0.3 }}
                  initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and position 50px below
                  animate={{ opacity: 1, y: 0 }} // Fade in and move to original position
                  transition={{
                    delay: index * 0.1, // Add delay for each item (0.1s between each)
                    duration: 0.5, // Duration of the animation
                  }}
                >
                  {/* Product Card with Overlay */}
                  <div className="flex justify-center items-center bg-gray-200 relative group">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-[230px] h-[200px] object-cover"
                    />
      
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-black/60 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 group-hover:cursor-pointer z-10">
                      {/* Icons inside the overlay */}
                      <div className="absolute inset-0 flex justify-center items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <motion.div
                          className=" cursor-pointer bg-white rounded-full px-[5px] py-[5px] mt-[130px] ml-[-0px]"
                          whileHover={{ scale: 1.2 }}
                        >
                          <PiShoppingCartLight size={24} onClick={() => handleCart(item)} /> {/* Cart Icon from React Icons */}
                        </motion.div>
                        <motion.div
                          className="cursor-pointer bg-white rounded-full px-[5px] py-[5px] mt-[-130px] ml-[60px]"
                          whileHover={{ scale: 1.2 }}
                          onClick={() => handleFavoriteProduct(item)}
                        >
                          {isFavorite(item.id) ? <FaHeart size={24} className='text-red-500' /> : <CiHeart size={24} />} {/* Heart Icon from React Icons */}
                        </motion.div>
                      </div>
                    </div>
                  </div>
                  
      
                  {/* Product Info */}
                  <Link to={`/ProductDetail/${item.id}`}>
                  <div className="flex flex-col justify-center items-center">
                    <h1 className="text-[15px] font-sans font-semibold">{item.title}</h1>
                    <h1 className="text-[14px] font-bold">Price ${item.price}</h1>
                  </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
  )
}

export default Favorite
