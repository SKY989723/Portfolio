import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b
    from-gray-800 to-black text-white">
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
        <div className='pb-8 pt-44 md:pt-0'>

            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>

        </div>
        <p className='text-xl mt-8 '>
        My name is Akash Vaishnav, currently pursuing my B.Tech from KNIT Sultanpur. I am passionate about web development and C++. With a strong skill set in React.js, HTML, CSS (Tailwind), JavaScript, SQL, and MongoDB, Express.js, C++, data structures and algorithms.

        </p>
        <br />
        <p className='text-xl '> I enjoy creating visually appealing and efficient applications that provide seamless user experiences. I am constantly learning and honing my problem-solving abilities, and I strive to deliver high-quality projects that meet user requirements and exceed expectations.
        </p>
      </div>
    </div>
  )
}

export default About
