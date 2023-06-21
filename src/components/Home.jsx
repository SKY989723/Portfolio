import React from 'react';
import HeroImage from "../assest/Herophoto.jpg";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
const Home = () => {
  return (

    <div name="home" className='h-screen w-full bg-gradient-to-b
    from-black via-black to-gray-800 '>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center
      h-full px-4 md:flex-row '>
        <div className='flex flex-col justify-center h-full mt-40'>
            <h2 className='text-4xl sm:text-7xl font-bold text-white'>Hi, I am Akash Vaishnav </h2>
            <p className='text-gray-500 py-4 max-w-md'>
           I am a software engineer and web developer with a passion for crafting efficient and user-friendly applications. Dedicated to continuous learning and delivering high-quality solutions. I love to work on web application using technologies like React, MongoDb, Express.js, Tailwind, Node JS, javascript, Html and CSS.
            </p>
            <div>
                <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3
                my-2 flex items-center rounded-md bg-gradient-to-r
                from-yellow-900 to-gray-700 cursor-pointer'>
                    Portfolio  
                    <span className=' group-hover:rotate-90 duration-300'>
                    <MdOutlineKeyboardDoubleArrowRight size={25}
                    className='ml-1' />
                    </span>
                </Link>
            </div>
        </div>
        <div >
          <img src={HeroImage} alt="my profile 
            " className=" rounded-2xl mx-auto w-1/2 md:w-96" />
        </div>
      </div>
    </div>
  )
};

export default Home;
