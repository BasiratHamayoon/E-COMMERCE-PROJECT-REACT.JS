import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../Slices/favoriteSlice';
import loader from "../assets/Products-Fetching-Loader/loader.gif";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { addToCart } from '../Slices/CartSlice';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { products, isLoading, message } = useSelector((state) => state.products);
  const favoriteProducts = useSelector((state) => state.favorite.favoriteProducts);
  const product = products.find((item) => item.id === parseInt(id));

  if (isLoading) {
    return (
      <div className="flex justify-center items-center mt-[200px]">
        <img src={loader} alt="Loading..." />
      </div>
    );
  }

  if (message) {
    return <p>Error: {message}</p>;
  }

  if (!product) {
    return <p className="text-center text-red-500">Product not found!</p>;
  }

  // Adding to cart function
  const handleCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`Product added to cart!`, {
      position: "bottom-right",
      autoClose: 2000,
    });
  };

  // Favorite handling
  const handleFavoriteProduct = (product) => {
    dispatch(toggleFavorite(product));
  };

  const isFavorite = (productId) => {
    return favoriteProducts.some((item) => item.id === productId);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
      className='flex flex-col justify-center items-center py-[50px]'
    >
      <h1 className="text-[28px] font-bold font-sans text-center py-[2px]">Product Detail</h1>
      <span className="lg:w-[8%] w-[20%] bg-red-600 h-[6px] rounded-md m-auto mb-[10px]"></span>
      
      <div className='lg:w-[60%] w-[85%] grid lg:grid-cols-2 justify-center items-center gap-8 shadow-lg'>
        <div className='flex justify-center items-center object-cover px-[20px] py-[20px]'>
          <img src={product?.image} alt={product.title} className='w-[220px] h-[260px]' />
        </div>
        
        <div className='flex flex-col justify-center py-[20px] gap-4 px-[10px]'>
          {/* Title & Favorite Button */}
          <div className='flex justify-between items-center w-full'>
            <h1 className='font-sans font-bold lg:text-[22px] text-[18px]'>{product?.title}</h1>
            <motion.button 
              whileHover={{ scale: 1.1 }} 
              onClick={() => handleFavoriteProduct(product)} 
              className='cursor-pointer bg-red-600 p-2 rounded-full text-white shadow-lg hover:opacity-80 transition'
            >
              {isFavorite(product.id) ? <FaHeart size={22} /> : <CiHeart size={22} />}
            </motion.button>
          </div>

          {/* Star Ratings */}
          <div className='flex gap-2 text-yellow-500'>
            {Array.from({ length: 5 }).map((_, index) => (
              <FaStar key={index} />
            ))}
          </div>

          {/* Description & Price */}
          <p className='text-gray-600 text-[14px]'>{product?.description}</p>
          <p className='text-[20px] font-bold text-red-600'>Price: ${product?.price}</p>

          {/* Add to Cart Button */}
          <button
            className='bg-red-600 text-white py-[7px] w-[60%] m-auto rounded-md transition-all hover:bg-black cursor-pointer shadow-lg'
            onClick={() => handleCart(product)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetail;
