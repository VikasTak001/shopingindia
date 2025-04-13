import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const Cart = () => (
  <div className="max-w-[1330px] mx-auto p-6 space-y-8 bg-[#ffffff] min-h-screen">
    <h2 className="text-3xl font-extrabold text-center mb-6">Your Cart</h2>

    {/* Flex container for items and checkout section */}
    <div className="flex flex-col md:flex-row gap-8">
      {/* Cart Items with Scroll */}
      <div className="flex-1 space-y-6">
        {/* Cart Item */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="flex flex-col border md:flex-row items-center gap-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all"
        >
          {/* Item Image */}
          <img
            src="https://via.placeholder.com/150"
            alt="Nike Sneakers"
            className="w-24 h-24 object-cover rounded-lg shadow-sm"
          />
          
          <div className="flex-1 mt-4 md:mt-0">
            <h3 className="text-xl font-semibold text-gray-800">Nike Sneakers</h3>
            <p className="text-sm text-gray-500 mt-2">Stylish and comfortable sneakers for everyday wear.</p>
            
            {/* Quantity & Price */}
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-3">
                <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">-</button>
                <span className="text-lg font-semibold">1</span>
                <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">+</button>
              </div>
              <span className="text-lg font-semibold text-green-600">$89.99</span>
            </div>
          </div>

          {/* Remove Button */}
          <button className="text-red-500 hover:text-red-700 ml-4 mt-4 md:mt-0">
            <X />
          </button>
        </motion.div>
      </div>

      {/* Checkout Summary Section (Right Side) */}
      <div className="w-full md:w-1/3 space-y-6">
        {/* Cart Summary */}
        <div className="p-6 bg-white rounded-xl shadow-lg">
          <div className="flex justify-between text-lg font-semibold text-gray-800">
            <span>Subtotal</span>
            <span className="text-green-600">$199.98</span>
          </div>
          <div className="flex justify-between mt-4 text-lg font-semibold text-gray-800">
            <span>Shipping</span>
            <span className="text-green-600">Free</span>
          </div>
          <div className="flex justify-between mt-4 text-xl font-bold text-gray-800 border-t pt-4">
            <span>Total</span>
            <span className="text-green-700">$199.98</span>
          </div>
        </div>

        {/* Checkout Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.02 }}
          className="w-full py-4 bg-green-600 text-white rounded-xl text-xl font-semibold hover:bg-green-700 shadow-xl transition"
        >
          Proceed to Checkout
        </motion.button>
      </div>
    </div>
  </div>
);

export default Cart;
