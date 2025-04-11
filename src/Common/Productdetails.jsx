import axios from 'axios';
import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Productdetails() {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    axios.get(`https://dummyjson.com/products/${id}`).then((res) => {
        setProduct(res.data);
    }).catch((err) => {
        console.log(err);
    })
    const [image, setImage] = useState("");
    return (
        <>
            <div className="max-w-6xl my-2 md:my-10 mx-3 md:mx-auto bg-gray-800 p-8 rounded-2xl shadow-2xl transition-all duration-300 hover:shadow-black">
                <Link to={'/shop'}>
            <button
                    onClick={() => navigate(-1)}
                    className="mb-6 text-white bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg shadow hover:shadow-md transition"
                >
                    ← Back
                </button>
                </Link>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Image Section */}
                    <div>
                        <img
                            src={image ? image : product.thumbnail}
                            alt="Main Product"
                            className="w-full h-4/5 object-cover rounded-xl transform hover:scale-105 transition duration-300"
                        />
                        <div className="flex gap-4 mt-4">
                            {
                                product.images?.map((item, index) => {
                                    return (
                                        <img
                                            key={index}
                                            src={item}
                                            alt="thumb"
                                            onClick={()=>setImage(item)}
                                            className="w-20 h-20 object-cover rounded-lg border border-gray-600 cursor-pointer hover:scale-105 transition"
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                    {/* Details Section */}
                    <div>
                        <h1 className="text-4xl font-bold mb-3 text-white">
                            {product.title}
                        </h1>
                        <p className="text-2xl text-green-400 font-semibold mb-2">${product.price}</p>
                        <p className="text-sm text-gray-400 mb-4">
                            Rating: <span className="font-bold text-white">{product.rating}</span> / 5
                        </p>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            {product.description}
                        </p>
                        <button className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-xl text-white font-semibold shadow-lg hover:shadow-blue-500/50">
                            🛒 Add to Cart
                        </button>
                    </div>
                </div>
                {/* Ratings Summary */}
                <div className="mt-12 border-t border-gray-700 pt-8">
                    <h2 className="text-2xl font-bold mb-4 text-white">Customer Ratings</h2>
                    <div className="flex items-center gap-6">
                        <div className="text-center">
                            <div className="text-5xl font-bold text-yellow-400">{product.rating}</div>
                            <div className="text-sm text-gray-400">Average Rating</div>
                        </div>
                        <div>
                            <div className="text-sm text-gray-400">Based on {product.reviews?.length} reviews</div>
                            {/* Optional: Add bar breakdown here later if needed */}
                        </div>
                    </div>
                </div>
                {/* Reviews */}
                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4 text-white">Customer Reviews</h2>
                    <div className="space-y-4">
                        {/* Review 1 */}
                        {
                            product.reviews?.map((item, index) => {
                                return (
                                    <div key={index} className="bg-gray-700 p-4 rounded-lg shadow-inner hover:bg-gray-600 transition">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="font-semibold text-white">🧑 {item.reviewerName}</span>
                                            <span className="text-yellow-400 font-bold">⭐ {item.rating}/5</span>
                                        </div>
                                        <p className="text-sm text-gray-200">
                                            {item.comment}
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        </>
    )
}
