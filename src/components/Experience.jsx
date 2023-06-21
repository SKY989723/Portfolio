import React from 'react'
import html from "../assest/experience/html.png"
import css from "../assest/experience/css.png"
import javascript from "../assest/experience/javascript.png"
import react from "../assest/experience/react.png"
import nextjs from "../assest/experience/nextjs.png"
import cpp from "../assest/experience/C++.png"
import github from "../assest/experience/github.png"
import tailwind from "../assest/experience/tailwind.png"
import mongoDB from "../assest/experience/mongoDB.png"
import express from "../assest/experience/express.png"
import node from "../assest/experience/node.png"
const Experience = () => {
    const techs =[
        {
            id:1,
            src:html,
            title:'HTML',
            style:'shadow-orange-500'
        },
        {
            id:2,
            src:css,
            title:'CSS',
            style:'shadow-blue-500'
        },
        {
            id:3,
            src:javascript,
            title:'JavaScript',
            style:'shadow-yellow-500'
        },
        {
            id:4,
            src:react,
            title:'React',
            style:'shadow-blue-500'
        },
        {
            id:5,
            src:tailwind,
            title:'Tailwind',
            style:'shadow-sky-500'
        },
        {
            id:6,
            src:nextjs,
            title:'Next JS',
            style:'shadow-white'
        },
        {
            id:7,
            src:cpp,
            title:'C++',
            style:'shadow-blue-500'
        },
        {
            id:8,
            src:github,
            title:'GitHub',
            style:'shadow-gray-500'
        },
        {
            id:9,
            src:mongoDB,
            title:'MongoBD',
            style:'shadow-green-500'
        },
        {
            id:10,
            src:express,
            title:'Express.js',
            style:'shadow-gray-500'
        },
        {
            id:11,
            src:node,
            title:'node.js',
            style:'shadow-green-500'
        },
    ]
  return (
    <div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full h-screen ">
     <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div className='pt-72 md:pt-40'>
            <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
            <p className='py-6'>These are the technologies I've worked with</p>
        </div>
        <div className='w-full grid grid-cols-3 sm:grid-cols-4 gap-6 text-center py-0 px-12 sm:px-0'>
        {techs.map(({id,src,title,style})=>(
            
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                <img src={src} alt="" className='w-20 mx-auto' />
                <p className='mt-4'>{title}</p>
            </div>
        ))}
        </div>
     </div>
    </div>
  )
}

export default Experience
