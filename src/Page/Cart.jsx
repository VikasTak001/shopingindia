import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Context } from "../MainContext";
import { Link } from "react-router-dom";
export default function Cart() {
    const { cart, setCart } = useContext(Context);
    const [cartTotal, setCartTotal] = useState(0);
    useEffect(
        () => {
            let TotalAmnt = 0;
            cart.forEach(
                (element, index) => {
                    TotalAmnt += (element.price * element.quantity);
                    console.log(TotalAmnt);
                    setCartTotal(TotalAmnt);
                });
        }, [cart]
    )
    return (
        <div className="max-w-[1330px] mx-auto p-6 space-y-8 bg-[#ffffff] min-h-screen">
            <h2 className="text-3xl font-extrabold text-center mb-6">Your Cart</h2>

            {/* Flex container for items and checkout section */}
            <div className="flex flex-col md:flex-row gap-8">
                {/* Cart Items with Scroll */}
                <div className="flex-1 space-y-6">
                    {/* Cart Item */}
                    {cart.length === 0 ?
                        <h1 className="my-52 text-center text-2xl">No Item Founded</h1> :
                        cart.map(
                            (CartData, CartIndex) => {
                                return (
                                    <CartItem CartData={CartData} CartIndex={CartIndex} key={CartIndex} cart={cart} setCart={setCart} setCartTotal={setCartTotal} />
                                )
                            }
                        )
                    }
                </div>

                {/* Checkout Summary Section (Right Side) */}
                <div className="w-full md:w-1/3 space-y-6">
                    {/* Cart Summary */}
                    <div className="p-6 bg-white rounded-xl shadow-lg">
                        <div className="flex justify-between text-lg font-semibold text-gray-800">
                            <span>Subtotal</span>
                            <span className="text-green-600">${(cartTotal).toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between mt-4 text-lg font-semibold text-gray-800">
                            <span>Shipping</span>
                            <span className="text-green-600">{
                                cartTotal < 200 ?
                                    "$" + (cartTotal * 10 / 100).toFixed(2) :
                                    "Free"
                            }</span>
                        </div>
                        <div className="flex justify-between mt-4 text-xl font-bold text-gray-800 border-t pt-4">
                            <span>Total</span>
                            <span className="text-green-700">${
                                cartTotal < 200 ?
                                    (cartTotal + (cartTotal * 10 / 100)).toFixed(2) :
                                    (cartTotal).toFixed(2)
                            }</span>
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
    )
}

function CartItem({ CartData, CartIndex, cart, setCart ,setCartTotal}) {
    const RemoveItem = () => {
        const Data = [...cart];
        Data.splice(CartIndex, 1);
        setCart(Data);
        if(Data.length === 0){
            setCartTotal(0);
        }
    }
    const removeqty = (event, ind) => {
        const crtdata = [...cart];
        if (crtdata[ind].quantity > 1) {
            crtdata[ind].quantity = crtdata[ind].quantity - 1;
            setCart(crtdata);
        }
        console.log(cart[ind])
    }
    const addqty = (event, ind) => {
        const crtdata = [...cart];
        crtdata[ind].quantity = crtdata[ind].quantity + 1;
        setCart(crtdata);
        console.log(cart[ind])

    }

    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex flex-col border md:flex-row items-center gap-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all"
        >
            <Link to={`/productdetails/${CartData.id}`}>
                {/* Item Image */}
                <img
                    src={CartData.thumbnail}
                    alt="Nike Sneakers"
                    className="w-24 h-24 object-cover rounded-lg shadow-sm"
                />
            </Link>

            <div className="flex-1 mt-4 md:mt-0">
                <Link to={`/productdetails/${CartData.id}`}>
                    <h3 className="text-xl font-semibold text-gray-800">{CartData.title}</h3>
                    <p className="text-sm text-gray-500 mt-2">{CartData.brand}</p>
                </Link>
                {/* Quantity & Price */}
                <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-3">
                        <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition" onClick={() => removeqty(event, CartIndex)}>-</button>
                        <input type="number" min={1} className="w-[35px] ms-3 border-0 outline-none" disabled value={CartData.quantity} />
                        <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition" onClick={() => addqty(event, CartIndex)}>+</button>
                    </div>
                    <span className="text-lg font-semibold text-green-600">${CartData.price}</span>
                </div>
            </div>

            {/* Remove Button */}
            <button onClick={() => { RemoveItem(CartIndex) }} className="flex items-center gap-3 ml-4 mt-4 md:mt-0 border bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-3xl">
                Remove
            </button>
        </motion.div>
    )
}