import React, { useEffect } from "react";
import { fetchProducts } from "../Slices/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import loader from "../assets/Products-Fetching-Loader/loader.gif";
import { motion } from "framer-motion";
import { PiShoppingCartLight } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { addToCart } from "../Slices/CartSlice";
import { toggleFavorite } from "../Slices/favoriteSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Products = () => {
  const dispatch = useDispatch();
  const { products, isLoading, message } = useSelector((state) => state.products);
  const favoriteProducts = useSelector((state) => state.favorite.favoriteProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

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
    <div className="flex flex-col py-[50px] justify-center items-center">
      <h1 className="text-[28px] font-bold font-sans text-center py-[2px]">All Products</h1>
      <span className="lg:w-[8%] w-[20%] bg-red-600 h-[6px] rounded-md m-auto"></span>

      {/* Product Grid with Framer Motion */}
      <motion.div
        className="grid lg:grid-cols-4 md:grid-cols-2 py-[70px] gap-20 lg:w-[70%] md:w-[80%] w-[90%] m-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {products.map((item, index) => (
          <motion.div
            key={item.id}
            className="flex flex-col justify-center items-center gap-4 relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.1,
              duration: 0.5,
            }}
          >
            {/* Product Card */}
            <div className="relative group bg-gray-200 rounded-lg overflow-hidden">
              <img src={item.image} alt={item.title} className="w-[230px] h-[200px] object-cover rounded-lg" />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                {/* Cart Button */}
                <motion.button
                  className="bg-red-600 text-white p-2 rounded-full shadow-lg hover:opacity-80 transition"
                  whileHover={{ scale: 1.1 }}
                  onClick={() => handleCart(item)}
                >
                  <PiShoppingCartLight size={22} />
                </motion.button>

                {/* Favorite Button */}
                <motion.button
                  className="bg-red-600 text-white p-2 rounded-full shadow-lg hover:opacity-80 transition"
                  whileHover={{ scale: 1.1 }}
                  onClick={() => handleFavoriteProduct(item)}
                >
                  {isFavorite(item.id) ? <FaHeart size={22} /> : <CiHeart size={22} />}
                </motion.button>
              </div>
            </div>

            {/* Product Info */}
            <Link to={`/ProductDetail/${item.id}`} className="text-center">
              <h1 className="text-[15px] font-sans font-semibold">{item.title}</h1>
              <h1 className="text-[14px] font-bold">Price ${item.price}</h1>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Products;
