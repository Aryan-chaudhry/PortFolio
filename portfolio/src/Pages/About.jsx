import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../components/Header';

const About = () => {
  // useEffect(() => {
  //   const cursor = document.querySelector('.custom-cursor');
  //   const move = (e) => {
  //     cursor.style.left = `${e.clientX}px`;
  //     cursor.style.top = `${e.clientY}px`;
  //   };
  //   window.addEventListener('mousemove', move);
  //   return () => window.removeEventListener('mousemove', move);
  // }, []);

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-[#000000] via-[#050505] to-[#202020] text-white overflow-hidden font-sans">
      <div className="custom-cursor w-6 h-6 border-2 border-white rounded-full fixed pointer-events-none z-[9999] transition-transform duration-75" />
      <Header />

      <section className="px-6 py-24 max-w-6xl mx-auto">
        <h2 className="text-5xl text-center font-extrabold bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent drop-shadow-xl animate-fadeInUp">
          About Me
        </h2>

        <p className="mt-8 text-center text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto animate-fadeInUp delay-200">
          I'm Aryan Chaudhary, a full-stack MERN developer passionate about clean code, building scalable web applications, and solving real-world problems through development. I also enjoy contributing to open-source and growing through competitive coding.
        </p>

        <div className="mt-10 flex justify-center gap-6 animate-fadeInUp delay-600">
          <NavLink
          to="/resume"
          className="px-6 py-3 border border-white hover:bg-white hover:text-black text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105"
          >
          View Resume
        </NavLink>
          <NavLink
            to="/contact"
            className="px-6 py-3 border border-white hover:bg-white hover:text-black text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
            Contact
            </NavLink>
        </div>

        {/* Education Section */}
        <div className="mt-16 animate-fadeInUp delay-300 bg-white/5 p-6 rounded-2xl shadow-lg backdrop-blur-lg">
          <h3 className="text-3xl font-bold text-indigo-400 mb-4 text-center">🎓 Education Journey</h3>
          <div className="text-center text-gray-300 space-y-2 text-lg">
            <p className="font-semibold text-white">Bachelor of Engineering (B.E.) - Computer Science</p>
            <p>Chandigarh University, Mohali, Punjab</p>
            <p>2022 – 2026</p>
          </div>
        </div>

        {/* GitHub + LeetCode Section in Flex */}
        <div className="mt-16 flex flex-col md:flex-row gap-10 animate-fadeInUp delay-400">
          {/* GitHub Journey */}
          <div className="flex-1 bg-white/5 p-6 rounded-2xl shadow-lg backdrop-blur-lg flex flex-col justify-between">
            <h3 className="text-3xl font-bold text-indigo-400 mb-4 text-center">💻 GitHub Journey</h3>
            <p className="text-center text-gray-300 mb-6">Here’s a glance at my GitHub contributions, public repositories, and daily streaks that reflect my passion for open-source and constant learning.</p>
            <div >
              <iframe
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=Aryan-chaudhry&layout=compact&theme=github_dark"
                frameBorder="0"
                className="w-full h-[300px] rounded-[20px] hover:scale-105 transition-transform duration-300"
                title="GitHub Profile"
                style={{ backgroundColor: 'transparent' }}
              ></iframe>
              <iframe src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=Aryan-chaudhry&theme=github_dark" 
              frameborder="0"
               className="w-full h-[300px] rounded-[20px] hover:scale-105 transition-transform duration-300"
               style={{ backgroundColor: 'transparent' }}
               ></iframe>
               <button className='text-white bg-gradient-to-br from-blue-400 to-pink-600 hover:bg-gradient-to-bl  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer'><a href="https://github.com/Aryan-chaudhry/" target='_blank'>View Github</a></button>
            </div>
            
              
           
          </div>

          {/* LeetCode Journey */}
          <div className="flex-1 bg-white/5 p-6 rounded-2xl shadow-lg backdrop-blur-lg">
            <h3 className="text-3xl font-bold text-yellow-400 mb-4 text-center">🔥 LeetCode Journey</h3>
            <p className="text-center text-gray-300 mb-6">My problem-solving profile on LeetCode showcases my dedication to Data Structures, Algorithms, and consistency through contests and challenges.</p>
            <div className="relative overflow-hidden rounded-[20px] ">
                <br /><br />
              <iframe
                src="https://leetcard.jacoblin.cool/Aryan_306?theme=dark&font=baloo&ext=contest"
                frameBorder="0"
                className="w-full h-[400px] rounded-[20px] hover:scale-105 transition-transform duration-300"
                title="LeetCode Stats"
                style={{ backgroundColor: 'tran' }}
              ></iframe>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <button className='text-white bg-gradient-to-br from-yellow-400 to-orange-600 hover:bg-gradient-to-bl  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer'><a href="https://leetcode.com/u/Aryan_306/" target='_blank'>View Leetcode</a></button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
