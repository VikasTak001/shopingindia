import axios from 'axios';
import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Productdetails() {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);
    axios.get(`https://dummyjson.com/products/${id}`).then((res) => {
        setProduct(res.data);
    }).catch((err) => {
        console.log(err);
    })
    const [image, setImage] = useState("");
    setTimeout(
        ()=>{
          setLoading(true)
        },1500
      )
    return (
        loading ? <Card product={product} image={image} setImage={setImage} /> : <LoadingCard/>
    )
}
const Card = ({ product, image, setImage }) => {
    return (
        <>
            <div className="max-w-6xl my-2 md:my-10 mx-3 md:mx-auto bg-gray-800 p-8 rounded-2xl shadow-2xl transition-all duration-300 hover:shadow-black">
                <Link to={'/shop'}>
                    <button
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
                            className="w-full h-[500px] object-cover rounded-xl transform hover:scale-105 transition duration-300"
                        />
                        <div className="flex gap-4 mt-4">
                            {
                                product.images?.map((item, index) => {
                                    return (
                                        <img
                                            key={index}
                                            src={item}
                                            alt="thumb"
                                            onClick={() => setImage(item)}
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
const LoadingCard = () => {
    return(
    <>
        <div className="max-w-6xl my-2 md:my-10 mx-3 md:mx-auto bg-gray-800 p-8 rounded-2xl shadow-2xl animate-pulse">

            {/* Back Button */}
            <div className="mb-6 w-24 h-10 bg-gray-700 rounded-lg"></div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                {/* Image Skeleton */}
                <div>
                    <div className="w-full h-[400px] bg-gray-700 rounded-xl mb-4"></div>
                    <div className="flex gap-4 mt-4">
                        {[1, 2, 3, 4].map((_, i) => (
                            <div key={i} className="w-20 h-20 bg-gray-700 rounded-lg"></div>
                        ))}
                    </div>
                </div>

                {/* Details Skeleton */}
                <div>
                    <div className="h-10 bg-gray-700 rounded w-3/4 mb-4"></div>
                    <div className="h-8 bg-gray-700 rounded w-1/4 mb-2"></div>
                    <div className="h-4 bg-gray-700 rounded w-1/3 mb-4"></div>
                    <div className="h-20 bg-gray-700 rounded w-full mb-6"></div>
                    <div className="h-12 bg-gray-700 rounded-xl w-1/2"></div>
                </div>
            </div>

            {/* Ratings Summary */}
            <div className="mt-12 border-t border-gray-700 pt-8">
                <div className="h-8 bg-gray-700 rounded w-1/3 mb-4"></div>
                <div className="flex items-center gap-6">
                    <div className="text-center">
                        <div className="w-16 h-12 bg-gray-700 rounded mb-2 mx-auto"></div>
                        <div className="w-24 h-4 bg-gray-700 rounded mx-auto"></div>
                    </div>
                    <div>
                        <div className="w-48 h-4 bg-gray-700 rounded mb-2"></div>
                    </div>
                </div>
            </div>

            {/* Reviews */}
            <div className="mt-8">
                <div className="h-8 bg-gray-700 rounded w-1/3 mb-4"></div>
                <div className="space-y-4">
                    {[1, 2].map((_, i) => (
                        <div key={i} className="bg-gray-700 p-4 rounded-lg">
                            <div className="flex justify-between items-center mb-2">
                                <div className="w-32 h-4 bg-gray-600 rounded"></div>
                                <div className="w-16 h-4 bg-gray-600 rounded"></div>
                            </div>
                            <div className="w-full h-10 bg-gray-600 rounded"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>)

}