import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Filter from './Filter';

export default function Products({ slug, FilterData }) {
  const [loading, setLoading] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(10);
  const [allProductsofApi, setAllProductsofApi] = useState();
  let apiUrl;
  if (slug !== undefined) {
    apiUrl = "https://dummyjson.com/products/category/" + slug;
  } else {
    apiUrl = `https://dummyjson.com/products?limit=${totalProducts}`;
  }
  axios.get(`https://dummyjson.com/products?limit=999`).then((succes) => {
    setAllProductsofApi(succes.data.products?.length);
  })
  const apiFatch = () => {
    axios.get(apiUrl).then((res) => {
      const finalData = res.data.products.filter(
        (product, index) => {
          if (product.rating >= FilterData.rating && FilterData.priceFrom <= product.price && FilterData.priceTo >= product.price) {
            return true;
          }
        }

      )
      setAllProducts(finalData);
    }).catch((err) => {
      console.log(err);
    })
  }
  const loadingtimeou = () => {
    setTimeout(
      () => {
        setLoading(true)
      }, 1500
    )
  }
  const loadmore = ()=>{
    setTotalProducts(totalProducts + 10) ;
    setLoading(!loading);
  }
  useEffect(() => {
    loadingtimeou();
  }, [loading])
  useEffect(() => {
    apiFatch();
  }, [slug, totalProducts, FilterData])
  return (
    <>
      <div className="xl:col-span-5 mx-2 md:col-span-4 col-span-6 my-[70px]">
        <div className='mx-2 text-2xl my-7'>Total Products : {allProducts.length}</div>
        <div className="grid xxl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-2 xl:gap-7">
          {
            allProducts.map((item, index) => {
              return (
                loading ? <ProductCard key={index} item={item} /> : <LoadingProduct key={index} />
              )
            })
          }
        </div>
        <div className="mx-auto w-max">
          <button
            className={`
              mt-8 px-6 py-3 
              bg-blue-500 border-2 border-[#ffffff42]
              text-white font-semibold text-lg
              rounded-xl 
              shadow-md hover:shadow-lg 
              transform transition-all duration-300 ease-in-out
              hover:scale-105 hover:-translate-y-1 active:scale-95
              hover:bg-blue-500 hover:border-[blue]
              focus:outline-none focus:ring-2 focus:ring-blue-500/50
              ${totalProducts <= allProductsofApi ? "block" : "hidden"}
            `} onClick={loadmore}>Load More
          </button>
        </div>
      </div>
    </>
  )
}
const ProductCard = ({ item }) => {
  return (

    <div className="bg-[#ffffff] overflow-hidden rounded-2xl p-4 border flex flex-col justify-between h-[max] shadow-xl transform transition-transform duration-300 hover:scale-[1.03] hover:shadow-[0_15px_30px_-5px_rgba(255,255,255,0.2)] hover:-translate-y-1">
      <Link to={`/productdetails/${item.id}`}>
        <div className="relative w-full h-[250px]">
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-[100%] h-[450px] absolute top-[-50%] sm:scale-x-90 md:scale-x-75 scale-y-50 xl:scale-x-75 mb-4 transition-transform duration-300 md:hover:scale-x-[.8] md:hover:scale-y-[.55]"
          />
        </div>
        <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
        <p className="mb-1 text-2xl">
          Price: <span className="text-white">${item.price}</span>
        </p>
        <p className=" mb-1">
          Rating: <span className="text-orange-500">{item.rating}/5</span>
        </p>
        <p className=" mb-1">
          Category: <span className="text-white">{item.category}</span>
        </p>
        <p className="">
          Brand: <span className="text-white">{item.brand}</span>
        </p>
      </Link>
      <button className="rounded-lg px-4 py-2 mt-4 shadow-lg bg-blue-500 transition-all text-white duration-300 hover:bg-blue-600 hover:shadow-xl hover:translate-y-[-2px] active:translate-y-0 active:shadow-md">
        Add Cart
      </button>
    </div>
  );
};
const LoadingProduct = () => {
  return (
    <div className="bg-[#ffffff] overflow-hidden text-white rounded-2xl p-4 border border-[#00000042] shadow-xl flex flex-col justify-between h-[max] animate-pulse">
      <div className="relative w-full h-[250px] bg-[#c4c4c4] rounded-xl mb-4">
        {/* Simulated image loading */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#c4c4c4] rounded-xl"></div>
      </div>

      {/* Title */}
      <div className="h-6 bg-[#c4c4c4] rounded w-3/4 mb-3"></div>

      {/* Price */}
      <div className="h-5 bg-[#c4c4c4] rounded w-1/2 mb-2"></div>

      {/* Rating */}
      <div className="h-5 bg-[#c4c4c4] rounded w-1/3 mb-2"></div>

      {/* Category */}
      <div className="h-5 bg-[#c4c4c4] rounded w-1/3 mb-2"></div>

      {/* Brand */}
      <div className="h-5 bg-[#c4c4c4] rounded w-1/3 mb-2"></div>

      {/* Button */}
      <div className="mt-4 h-10 bg-[#c4c4c4] rounded-lg w-full"></div>
    </div>
  )
}
