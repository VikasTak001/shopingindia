import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../MainContext';

export default function Header() {
  const { cart, setCart } = useContext(Context);
  const [toggle, setToggle] = useState(false);
  const tglChanger = () => {
    setToggle(!toggle);
    console.log(toggle);
  }
  const itemCount = 1;
  window.addEventListener(
    "scroll",
    () => {
      const header = document.querySelector("#header");
      if (window.scrollY > 60) {
        header.classList.add('bg-[#0000ff1f]');
      } else {
        header.classList.remove('bg-[#0000ff1f]');
      }
    }
  )
  return (
    <>
      <header className='sticky p-4 z-1  max-w-[1340px] items-center bg-blur mx-auto z-[20] transparent top-0 left-0 z-2'>
        <div className={`blur-bg fixed top-0 left-0 w-screen h-full transition duration-300`} id='header'></div>
        <div className='flex justify-between'>
          <Link to={'/'}>
            <div className="text-3xl font-semibold header-color-heading relative z-10">Shoping India</div>
          </Link>
          <div className="md:flex hidden gap-14 text-lg relative z-10">
            <Link to={'/'} className='header-color'>
              Home
            </Link>
            <Link to={'/shop'} className='header-color'>
              Shop
            </Link>
            <Link to={'/about'} className='header-color'>
              About us
            </Link>
            <Link to={'/contact'} className='header-color'>
              Contact
            </Link>
          </div>
          <div className="z-10 md:flex hidden gap-3">
            <Link to={"/cart"}>
              <button className="relative bg-blue-500 text-white font-semibold py-2 px-4 rounded-2xl shadow-md hover:bg-blue-600 hover:scale-105 transition-transform duration-200 ease-in-out flex items-center gap-2">
                <div className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7a1 1 0 00.9 1.5h12.2M16 17a1 1 0 11-2 0 1 1 0 012 0zm-6 0a1 1 0 11-2 0 1 1 0 012 0z"
                    />
                  </svg>

                  {cart.length > 0 && (
                    <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full shadow-sm">
                      {cart.length}
                    </span>
                  )}
                </div>
                Cart
              </button>
            </Link>
            <button
              className="relative bg-red-500 text-white font-semibold py-2 px-4 rounded-2xl shadow-md hover:bg-red-600 hover:scale-105 transition-transform duration-200 ease-in-out flex items-center gap-2"
              onClick={() => {
                setCart([]);
              }}
            >
              Clear Cart
            </button>
          </div>
          <div className="relative mt-[-10px] md:hidden block" >
            <label for="check" className='menu-label relative z-[999]' >
              <input type="checkbox" id="check" className='menu-input' onClick={tglChanger} />
              <span className='meni-span-1 menu-span'></span>
              <span className='meni-span-2 menu-span'></span>
              <span className='meni-span-3 menu-span'></span>
            </label>
            <div className={`blur-bg absolute w-[250px!important] top-[5px] right-0 bg-[#a7a7a715!important] rounded-2xl h-[250px!important] transition duration-500 z-[20!important]  ${toggle ? 'opacity-100 visible' : 'opacity-0 invisible'}`}></div>
            <div className={`md:hidden top-[5px] w-[250px!important] right-0 h-[250px] p-5 px-9 flex justify-between items-start flex-col gap-2 absolute z-30 transition duration-500  ${toggle ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
              <Link to={'/'} className='header-color'>
                Home
              </Link>
              <Link to={'/shop'} className='header-color'>
                Shop
              </Link>
              <Link to={'/about'} className='header-color'>
                About us
              </Link>
              <Link to={'/contact'} className='header-color'>
                Contact
              </Link>
              <Link to={"/cart"}>
                <button className="relative bg-blue-500 text-white font-semibold py-2 px-4 rounded-2xl shadow-md hover:bg-blue-600 hover:scale-105 transition-transform duration-200 ease-in-out flex items-center gap-2">
                  <div className="relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7a1 1 0 00.9 1.5h12.2M16 17a1 1 0 11-2 0 1 1 0 012 0zm-6 0a1 1 0 11-2 0 1 1 0 012 0z"
                      />
                    </svg>

                    {cart.length > 0 && (
                      <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full shadow-sm">
                        {cart.length}
                      </span>
                    )}
                  </div>
                  Cart
                </button>
              </Link>
              
            </div>

          </div>
        </div>
      </header></>
  )
}
