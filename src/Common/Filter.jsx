import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Filter({ linkSlug }) {
  const [cat, setCat] = useState([]);
  const apiFatch = () => {
    axios.get("https://dummyjson.com/products/categories").then(
      (res) => {
        setCat(res.data);
      }
    ).catch((err) => {
      console.log(err);
    })
  }
  useEffect(() => {
    apiFatch();
  }, [])
  return (
    <div className="p-5 xl:col-span-1 md:col-span-2 col-span-6">
      <div className="text-2xl border-b border-[#ffffff] py-4">Categories</div>
      <div className="my-5 flex flex-wrap gap-2 md:block">
        <Link to={`/shop`}>
          <div className={`py-3 rounded-lg px-5 border-2 cursor-pointer btn-changer w-max md:w-auto md:my-4 transition-all duration-300 ease-in-out ${linkSlug === undefined ? 'bg-blue-500 border-blue-500 shadow-md hover:shadow-lg hover:scale-105 active:scale-95':'bg-[#000000] border-[#ffffff42] hover:bg-[#111111] hover:border-white hover:scale-105 active:scale-95 hover:shadow-md'}`}>
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
