import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <div className="xl:grid xl:grid-cols-2 flex flex-col justify-center max-w-[1320px] mx-auto p-4 overflow-x-hidden">
                <div className="xl:col-span-1 mt-[100px] xl:mt-0 w-max mx-auto flex flex-col justify-center max-w-full">
                    <h1 className='text-6xl font-bold my-5'>Welcome <br /> to Home Page</h1>
                    <p className="text-md max-w-[600px] text-justify text-bold text-[#303030]">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam labore esse officiis,
                        omnis consequatur earum perferendis vel aperiam rem amet a totam quis,
                        enim ad possimus necessitatibus distinctio voluptatum accusamus.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam labore esse officiis,
                        omnis consequatur earum perferendis vel aperiam rem amet a totam quis,
                        enim ad possimus necessitatibus distinctio voluptatum accusamus.
                    </p>
                    <Link to={'/shop'}>
                        <div className="my-5 btn-parent">
                            <div className="bg-white text-[20px] btn-child">
                                Shop Now
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='relative xl:col-span-1 mx-auto overflow-x-hidden z-[-50]'><spline-viewer className='xl:w-[900px] max-w-[900px] h-[700px] scale-[0.7] xl:translate-x-[-130px]' url="https://prod.spline.design/pEEKT-itCHh6SV9C/scene.splinecode"></spline-viewer></div>
            </div >
        </>
    )
}
