import React, { useEffect } from 'react';
import Header from '../components/Header';
import { Typewriter } from 'react-simple-typewriter';
import profilePhoto from '../utils/ProfilePhoto.png';

const Home = () => {
  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor');
    const move = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-[#000000] via-[#050505] to-[#202020] text-white overflow-hidden font-sans">
      {/* Custom Cursor */}
      <div className="custom-cursor w-6 h-6 border-2 border-white rounded-full fixed pointer-events-none z-[9999] transition-transform duration-75" />

      <Header />

      <section className="flex flex-col justify-center items-center h-[85vh] text-center px-4">
        {/* Glowing Avatar Card */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-1000"></div>
          <div className="w-40 h-40 md:w-52 md:h-52 relative rounded-full overflow-hidden border-[3px] border-neutral-700 backdrop-blur-md shadow-2xl z-10">
            <img src={profilePhoto} alt="Aryan" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Name and Typewriter */}
        <h1 className="text-4xl md:text-6xl font-extrabold mt-6 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent drop-shadow-lg animate-fadeInUp">
          Hi, I’m Aryan
        </h1>

        <h2 className="text-xl md:text-2xl text-gray-300 font-medium mt-2 animate-fadeInUp delay-300">
          <Typewriter
            words={[
              'MERN Stack Developer',
              'Creative Coder',
              'Open Source Contributor',
              'Problem Solver',
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4 animate-fadeInUp delay-500">
          <a
            href="/contact"
            className="px-6 py-3 bg-white text-black hover:bg-gray-200 rounded-lg font-semibold shadow-xl transition-all duration-300 hover:scale-105"
          >
            Hire Me
          </a>
          <a
            href="/resume"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-white hover:bg-white hover:text-black text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            Download Resume
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
