import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Products({ slug }) {
  const [allProducts, setAllProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(10);
  const [allProductsofApi,setAllProductsofApi] = useState();
  let apiUrl;
  if (slug !== undefined) {
    apiUrl = "https://dummyjson.com/products/category/" + slug;
  } else {
    apiUrl = `https://dummyjson.com/products?limit=${totalProducts}`;
  }
  axios.get(`https://dummyjson.com/products?limit=999`).then((succes)=>{
    setAllProductsofApi(succes.data.products?.length);
  })
  const apiFatch = () => {
    axios.get(apiUrl).then((res) => {
      setAllProducts(res.data.products);
    }).catch((err) => {
      console.log(err);
    })
  }
  useEffect(() => {
    apiFatch();
  }, [slug,totalProducts])
  return (
    <>
      <div className="xl:col-span-5 mx-2 md:col-span-4 col-span-6 my-[70px]">
        <div className='mx-2 text-2xl my-7'>Total Products : {allProducts.length}</div>
        <div className="grid xxl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-2 xl:gap-7">
          {
            allProducts.map((item, index) => {
              return (
                <ProductCard key={index} item={item} />
              )
            })
          }
        </div>
        <div className="mx-auto w-max">
        <button
          className={`
              mt-8 px-6 py-3 
              bg-[#000000] border-2 border-[#ffffff42]
              text-white font-semibold text-lg
              rounded-xl 
              shadow-md hover:shadow-lg 
              transform transition-all duration-300 ease-in-out
              hover:scale-105 hover:-translate-y-1 active:scale-95
              hover:bg-blue-500 hover:border-blue-500
              focus:outline-none focus:ring-2 focus:ring-blue-500/50
              ${totalProducts <=  allProductsofApi ? "block":"hidden"}
            `} onClick={() => setTotalProducts(totalProducts + 10)}>Load More
        </button>
        </div>
      </div>
    </>
  )
}
const ProductCard = ({ item }) => {
  return (
    <div className="bg-[black] text-white rounded-2xl p-4 border border-[#ffffff42] flex flex-col justify-between h-[540px] transform transition-transform duration-300 hover:scale-[1.03] hover:shadow-[0_15px_30px_-5px_rgba(255,255,255,0.2)] hover:-translate-y-1">
      <Link to={`/productdetails/${item.id}`}>
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-full h-[250px] object-cover rounded-xl mb-4 transition-transform duration-300 hover:scale-105"
        />
        <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
        <p className="text-gray-400 mb-1 text-2xl">
          Price: <span className="text-white">${item.price}</span>
        </p>
        <p className="text-gray-400 mb-1">
          Rating: <span className="text-orange-500">{item.rating}/5</span>
        </p>
        <p className="text-gray-400 mb-1">
          Category: <span className="text-white">{item.category}</span>
        </p>
        <p className="text-gray-400">
          Brand: <span className="text-white">{item.brand}</span>
        </p>
      </Link>
      <button className="rounded-lg px-4 py-2 mt-4 shadow-lg bg-blue-500 transition-all duration-300 hover:bg-blue-600 hover:shadow-xl hover:translate-y-[-2px] active:translate-y-0 active:shadow-md">
        Add Cart
      </button>
    </div>
  );
};
