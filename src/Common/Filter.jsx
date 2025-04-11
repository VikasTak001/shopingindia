import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Filter({ linkSlug, FilterData, setFilterData }) {
  const [cat, setCat] = useState([]);
  const [loading, setLoading] = useState(false);
  const apiFatch = () => {
    axios.get("https://dummyjson.com/products/categories").then(
      (res) => {
        setCat(res.data);
      }
    ).catch((err) => {
      console.log(err);
    })
  }
  const FpriceTo = (event) => {
    setFilterData({ ...FilterData, priceTo: event.target.value })
  }
  const FpriceFrom = (event) => {
    setFilterData({ ...FilterData, priceFrom: event.target.value })
  }
  useEffect(() => {
    apiFatch();
  }, [])
  return (
    <div className="p-5 xl:col-span-1 md:col-span-2 col-span-6">
      <div className="text-2xl py-4 border-t border-[#ffffff65]">Filter By Rating</div>
      <div className="my-5 flex flex-wrap gap-2 md:block">
        <div onClick={() => setFilterData({ ...FilterData, rating: 4 })} className={`py-3 rounded-lg px-5 border-2 cursor-pointer btn-changer md:my-4 w-max md:w-auto transition-all duration-300 ease-in-out ${FilterData.rating == 4 ? 'bg-blue-500 border-blue-500 shadow-md hover:shadow-lg hover:scale-105 active:scale-95' : 'bg-[#000000] border-[#ffffff42] hover:bg-[#111111] hover:border-white hover:scale-105 active:scale-95 hover:shadow-md'}`}>
          4 🌟 and Above
        </div>
        <div onClick={() => setFilterData({ ...FilterData, rating: 3 })} className={`py-3 rounded-lg px-5 border-2 cursor-pointer btn-changer md:my-4 w-max md:w-auto transition-all duration-300 ease-in-out ${FilterData.rating == 3 ? 'bg-blue-500 border-blue-500 shadow-md hover:shadow-lg hover:scale-105 active:scale-95' : 'bg-[#000000] border-[#ffffff42] hover:bg-[#111111] hover:border-white hover:scale-105 active:scale-95 hover:shadow-md'}`}>
          3 🌟 and Above
        </div>
        <div onClick={() => setFilterData({ ...FilterData, rating: 2 })} className={`py-3 rounded-lg px-5 border-2 cursor-pointer btn-changer md:my-4 w-max md:w-auto transition-all duration-300 ease-in-out ${FilterData.rating == 2 ? 'bg-blue-500 border-blue-500 shadow-md hover:shadow-lg hover:scale-105 active:scale-95' : 'bg-[#000000] border-[#ffffff42] hover:bg-[#111111] hover:border-white hover:scale-105 active:scale-95 hover:shadow-md'}`}>
          2 🌟 and Above
        </div>
        <div onClick={() => setFilterData({ ...FilterData, rating: 1 })} className={`py-3 rounded-lg px-5 border-2 cursor-pointer btn-changer md:my-4 w-max md:w-auto transition-all duration-300 ease-in-out ${FilterData.rating == 1 ? 'bg-blue-500 border-blue-500 shadow-md hover:shadow-lg hover:scale-105 active:scale-95' : 'bg-[#000000] border-[#ffffff42] hover:bg-[#111111] hover:border-white hover:scale-105 active:scale-95 hover:shadow-md'}`}>
          1 🌟 and Above
        </div>
      </div>
      <div className="text-2xl border-t mt-[30px] border-[#fafafa60] py-4">Filter By Price</div>
      <div className="border-b pb-[30px] border-[#fafafa60]">
        <div class="flex space-x-4">
          <div class="flex-1">
            <label class="block text-gray-300 text-sm mb-1" for="minPrice">Min Price</label>
            <input
              type="number"
              id="minPrice"
              placeholder="0"
              value={FilterData.priceFrom}
              onChange={FpriceFrom}
              class="w-full px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div class="flex-1">
            <label class="block text-gray-300 text-sm mb-1" for="maxPrice">Max Price</label>
            <input
              type="number"
              id="maxPrice"
              placeholder="1000"
              value={FilterData.priceTo}
              onChange={FpriceTo}
              class="w-full px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            /></div></div>
      </div>
      <div className="text-2xl py-4">Filter By Categories</div>
      <div className="my-5 flex flex-wrap gap-2 md:block border-b border-[#ffffff65]">
        <Link to={`/shop`}>
          <div className={`py-3 rounded-lg px-5 border-2 cursor-pointer btn-changer w-max md:w-auto md:my-4 transition-all duration-300 ease-in-out ${linkSlug === undefined ? 'bg-blue-500 border-blue-500 shadow-md hover:shadow-lg hover:scale-105 active:scale-95' : 'bg-[#000000] border-[#ffffff42] hover:bg-[#111111] hover:border-white hover:scale-105 active:scale-95 hover:shadow-md'}`}>
            All items
          </div>

        </Link>
        {cat.map((item, index) => {
          return (
            <Link to={`/shop/${item.slug}`} key={index}>
              <div className={`py-3 rounded-lg px-5 border-2 cursor-pointer btn-changer md:my-4 w-max md:w-auto transition-all duration-300 ease-in-out ${linkSlug === item.slug ? 'bg-blue-500 border-blue-500 shadow-md hover:shadow-lg hover:scale-105 active:scale-95' : 'bg-[#000000] border-[#ffffff42] hover:bg-[#111111] hover:border-white hover:scale-105 active:scale-95 hover:shadow-md'}`}>
                {item.name}
              </div>
            </Link>
          )
        })}
      </div>
    </div>

  )
}
