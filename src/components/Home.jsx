import React from 'react'
import myImg from "../assets/myImg2.jpg";
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-scroll';
import { BsFillPersonLinesFill } from "react-icons/bs";

const Home = () => {
    return (
        <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white"
    >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-2  md:flex-row">
                <div className="flex flex-col justify-center h-full">
                <h2 className="text-4xl sm:text-4xl font-bold text-white">Hello I am Piyush Sahoo, Aspiring software developer</h2>
                <p className="text-gray-500 py-4 max-w-md">

                        I have a passion for creating innovative and user friendly applications using the latest technologies such as React, JavaScript, NodeJS, Express and MongoDB.

                    </p>
                    <div className='flex'>
                        <Link to = "portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                            Portfolio
                            <span className = " group-hover:rotate-90 duration-300">

                                <FaArrowRight  className = "ml-1"/>

                            </span>

                        </Link>
                        <button  smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 mx-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                            Resume
                            <span>

                                <BsFillPersonLinesFill  className = "ml-1"/>

                            </span>

                        </button>
                    </div>
                </div>


                <div className = "border-amber-700">
                    <img src={myImg}  alt="my profile"  className="rounded-2xl mx-auto w-2/3 md:w-1/3" />
                </div>
            </div>

        </div>
    )
}

export default Home
