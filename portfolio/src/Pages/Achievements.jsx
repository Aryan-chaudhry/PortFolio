import React, { useEffect }  from 'react';
import Header from '../components/Header';
import { NavLink } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';


const achievements = [
  {
    title: "5⭐ in C++ - HackerRank",
    description: "Proved elite C++ skills with top-tier performance.",
    link: "https://www.hackerrank.com/profile/aryanchaudhary22",
    tag: "C++ Champion"
  },
  {
    title: "53rd/1,115 in National DSA Quiz",
    description: "Top 5% in a national-level data structure competition.",
    link: "https://www.naukri.com/campus/contests/techquezt-contest-data-structure-and-algorithm-quiz-naukri-campus-event-31819",
    tag: "Top Performer"
  },
  {
    title: "Winner – Code Relay 2024",
    description: "Led my team to victory at TechInvent CU.",
    link: "https://www.linkedin.com/posts/aryan-chaudhary-83571a252_thrilled-to-share-that-i-along-with-ashwani-activity-7259574944102023168-JYu0",
    tag: "1st Place"
  },
  {
    title: "2nd Place – Hack Track",
    description: "Runner-up in CU’s inter-university hackathon.",
    link: "https://drive.google.com/file/d/1R1prN2wMrr0zZ24HkmLRBCRTN3fN7XWD/view?usp=sharing",
    tag: "Finalist"
  },
  {
    title: "500+ LeetCode Problems",
    description: "Consistent problem solving across all DSA topics.",
    link: "https://leetcode.com/u/Aryan_306/",
    tag: "DSA Master"
  }
];

const Achievements = () => {

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
    <div className="relative w-full min-h-screen bg-gradient-to-br from-black via-[#0b0b0b] to-[#1a1a1a] text-white overflow-hidden font-sans">
      <div className="custom-cursor w-6 h-6 border-2 border-white rounded-full fixed pointer-events-none z-[9999] transition-transform duration-75" />

      <Header />

      <section className="pt-20 px-6 md:px-12 lg:px-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-14 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent animate-fadeInUp">
          ✨ My Glowing Achievements
        </h1>

        <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.35}
                glareColor="#ffffff"
                glarePosition="top"
                className="rounded-xl"
              >
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group block p-1 rounded-xl bg-gradient-to-br from-purple-700 via-indigo-600 to-blue-500 hover:from-pink-600 hover:to-yellow-500 transition-all duration-500 shadow-[0_0_25px_rgba(255,255,255,0.15)]"
                >
                  <div className="bg-black rounded-xl p-6 h-full flex flex-col justify-between backdrop-blur-md">
                    <span className="absolute top-2 right-3 text-xs px-3 py-1 bg-white/10 text-purple-300 border border-purple-500 rounded-full">
                      {item.tag}
                    </span>
                    <h2 className="text-xl font-semibold mb-2 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
                      {item.title}
                    </h2>
                    <p className="text-gray-300 mb-4">{item.description}</p>
                    <span className="text-sm text-indigo-400 group-hover:underline">
                      View Achievement →
                    </span>
                  </div>
                </a>
              </Tilt>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <NavLink
            to="/"
            className="inline-block px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-black font-semibold transition-all duration-300 hover:scale-105"
          >
            ← Back to Home
          </NavLink>
        </div>
      </section>
      <br /><br />
    </div>
  );
};

export default Achievements;
