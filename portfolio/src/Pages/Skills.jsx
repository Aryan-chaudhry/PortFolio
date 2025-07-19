// src/pages/Skills.jsx
import React, { useEffect } from 'react';
import Header from '../components/Header';
import { motion } from 'framer-motion';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiCplusplus,
  SiGithub,
  SiMysql,
  SiGit,

} from 'react-icons/si';

const skillInfo = [
  { name: "HTML", icon: SiHtml5, color: "#E44D26" },
  { name: "CSS", icon: SiCss3, color: "#264de4" },
  { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
  { name: "React.js", icon: SiReact, color: "#61dafb" },
  { name: "Node.js", icon: SiNodedotjs, color: "#3c873a" },
  { name: "Express.js", icon: SiExpress, color: "#ffffff" },
  { name: "MongoDB", icon: SiMongodb, color: "#4DB33D" },
  { name: "C++", icon: SiCplusplus, color: "#00599C" },
  { name: "Git", icon: SiGit, color: "#ff0000" },
  { name: "GitHub", icon: SiGithub, color: "#ffffff" },
  { name: "SQL", icon: SiMysql, color: "#00758F" },

];

const Skills = () => {
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
      {/* Custom Cursor */}
      <div className="custom-cursor w-6 h-6 border-2 border-white rounded-full fixed pointer-events-none z-[9999] transition-transform duration-75" />

      <Header />

      <section className="px-6 py-20 max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-white animate-fadeInUp mb-10">
          My Skills
        </h2>

        <motion.div
          className="flex flex-wrap justify-center gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {skillInfo.map(({ name, icon: Icon, color }, i) => (
            <motion.div
              key={i}
              className="px-6 py-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md shadow-md flex flex-col items-center gap-2 w-36 hover:scale-105 transition-transform"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Icon size={32} style={{ color }} />
              <span className="text-sm font-medium text-gray-200">{name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Codolio Profile Embed */}
        <div className="mt-20 mx-auto max-w-6xl animate-fadeInUp">
          <h3 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-white text-center">
            My Codolio Profile
          </h3>

          <div className="relative rounded-2xl overflow-hidden  shadow-2xl transition-shadow duration-300 h-300">
            <p className="absolute top-2 left-2 text-sm text-white bg-black/60 px-3 py-1 rounded-lg z-20">
              embedded preview
            </p>
            <iframe
               src="https://codolio.com/profile/Aryan_306"
                title="Codolio Profile"
                className="w-full h-full rounded-xl"
                frameBorder="0"
                sandbox="allow-same-origin allow-scripts"
                style={{
                  zoom: 0.8,
                  transform: 'scale(0.8)',
                  transformOrigin: 'top',
                  pointerEvents: 'auto',
                }}
            />

            {/* Transparent overlay to block clicks only */}
            {/* <div
              className="absolute top-0 left-0 w-full h-full z-10"
              style={{
                pointerEvents: 'auto',
                backgroundColor: 'transparent',
              }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
            /> */}
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Skills;
