import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const tglChanger = () => {
    setToggle(!toggle);
    console.log(toggle);
  }
  return (
    <>
      <header className='sticky p-4 z-1  max-w-[1340px] items-center bg-blur mx-auto z-[20] transparent top-0 left-0 z-2'>
      <div className='blur-bg bg-[#e7e7e79c] fixed top-0 left-0 w-screen h-full'></div>
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
            <div className="relative mt-[-10px] md:hidden block">
              <label for="check" className='menu-label relative z-[999]' >
                <input type="checkbox" id="check" className='menu-input'/>
                <span className='meni-span-1 menu-span'  onClick={tglChanger}></span>
                <span className='meni-span-2 menu-span'  onClick={tglChanger}></span>
                <span className='meni-span-3 menu-span'  onClick={tglChanger}></span>
              </label> 
              <div className={`blur-bg absolute w-[250px!important] top-[5px] right-0 bg-[#a7a7a715!important] rounded-2xl h-[200px!important] transition duration-500  ${toggle ? 'opacity-100':'opacity-0'}`}></div>
              <div className={`md:hidden top-[5px] w-[250px!important] right-0 h-[200px] p-5 px-9 flex justify-between items-start flex-col gap-2 absolute z-30 transition duration-500  ${toggle ? 'opacity-100':'opacity-0'}`}>
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
            </div>
        </div>
      </header></>
  )
}
