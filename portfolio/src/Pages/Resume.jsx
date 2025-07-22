// src/pages/Resume.jsx
import React, { useEffect, useRef } from 'react';
import Header from '../components/Header';
import { motion } from 'framer-motion';

const resumeData = {
  name: 'ARYAN',
  contact: {
    phone: '+91 8683848559',
    location: 'Karnal, Haryana, India',
    email: 'Aryanchaudhary2629@gmail.com',
    linkedin: 'https://www.linkedin.com/in/aryan-chaudhary-83571a252/',
    github: 'https://github.com/Aryan-chaudhry/',
    leetcode: 'https://leetcode.com/u/Aryan_306/',
    portfolio: '/',
  },
  skills: [
    'C++', 'Java (Intermediate)', 'Python', 'SQL', 'HTML', 'CSS', 'JavaScript',
    'Node.js', 'Express.js', 'React.js (MERN)', 'MongoDB', 'MySQL'
  ],
  core: [
    'DSA', 'OOPs', 'OS', 'Networking', 'DBMS', 'Teamwork', 'Problem Solving'
  ],
  tools: ['VS Code', 'Git', 'GitHub'],
  experience: [
    {
      title: 'Research Intern — IEEE Visitly Rental Platform',
      period: 'Dec 2024 - Apr 2025',
      org: 'Chandigarh University, Punjab',
      points: [
        'Implemented real-time listing uploads and OpenWeatherMap API integration using C/C++.',
        'Designed interactive map-based search and secure authentication.',
        'Improved user engagement by 40% during the internship.',
      ]
    }
  ],
  projects: [
    {
      name: 'ClimaVision 360',
      stack: 'React, Tailwind, react-globe.gl, OpenWeatherMap, OpenCage, USGS',
      highlights: [
        '3D globe-based real-time weather visualizer with radar alerts.',
        'Integrated geolocation and multiple APIs for rich insights.'
      ],
      links: {
        live: 'https://weather-forecast-aryan.netlify.app/',
        github: 'https://github.com/Aryan-chaudhry/Weather-Forecast'
      }
    },
    {
      name: 'Visitly',
      stack: 'Node.js, Express.js, Cloudinary, JWT, OAuth',
      highlights: [
        'Full-stack accommodation site with real-time property search and 360° tours.',
        'Distributed architecture for high scalability and reliability.'
      ],
      links: {
        live: 'https://visitly-live.onrender.com/listings',
        github: 'https://github.com/Aryan-chaudhry/Visitly'
      }
    }
  ],
  achievements: [
    '5⭐ in C++ on HackerRank',
    '53rd out of 1,115 in National DSA Coding Quiz',
    'Winner – Code Relay Competition 2024, Chandigarh University',
    '2nd place – Hack Track Competition, CU',
    'Solved 430+ LeetCode challenges'
  ],
  education: [
    'B.E. in CSE – Chandigarh University (Expected 2026) | CGPA: 7.5/10',
    'XII (CBSE) – Nishan Public School (2022) | 74.4%'
  ]
};

const Resume = () => {
  const cardRef = useRef(null);

  // useEffect(() => {
  //   const cursor = document.querySelector('.custom-cursor');
  //   const move = (e) => {
  //     cursor.style.left = `${e.clientX}px`;
  //     cursor.style.top = `${e.clientY}px`;
  //   };
  //   window.addEventListener('mousemove', move);
  //   return () => window.removeEventListener('mousemove', move);
  // }, []);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--x', `${x}px`);
    cardRef.current.style.setProperty('--y', `${y}px`);

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const deltaX = x - centerX;
    const deltaY = y - centerY;
    const rotateX = -(deltaY / 20);
    const rotateY = deltaX / 20;
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  };

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-[#000000] via-[#050505] to-[#202020] text-white font-sans overflow-x-hidden">
      {/* <div className="custom-cursor w-6 h-6 border-2 border-white rounded-full fixed pointer-events-none z-[9999] transition-transform duration-75" /> */}
      <Header />

      <section className="px-6 py-20 max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-white animate-fadeInUp mb-12">
          My Resume
        </h2>

        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="group relative bg-[#0f172a]/30 backdrop-blur-md border border-neutral-800 rounded-2xl overflow-hidden p-8 shadow-xl transition-transform duration-300 text-left"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background:
                  'radial-gradient(300px circle at var(--x, 50%) var(--y, 50%), rgba(144, 202, 249, 0.2), transparent)'
              }}
            />
          </div>

          <div className="relative z-10 space-y-8">
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-blue-400">{resumeData.name}</h3>
              <p className="text-gray-300 text-sm">{resumeData.contact.location} | {resumeData.contact.phone}</p>
              <p className="text-gray-300 text-sm">
                <a href={`mailto:${resumeData.contact.email}`} className="hover:underline">{resumeData.contact.email}</a>
              </p>
              <div className="space-x-3 text-sm">
                <a href={resumeData.contact.linkedin} className="text-blue-300 hover:underline">LinkedIn</a>
                <a href={resumeData.contact.github} className="text-blue-300 hover:underline">GitHub</a>
                <a href={resumeData.contact.leetcode} className="text-blue-300 hover:underline">LeetCode</a>
                <a href={resumeData.contact.portfolio} className="text-blue-300 hover:underline">Portfolio</a>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {[...resumeData.skills, ...resumeData.tools].map((skill, idx) => (
                <span key={idx} className="bg-white/10 border border-white/10 text-blue-300 px-3 py-1 rounded-full text-xs">{skill}</span>
              ))}
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-1">Experience</h4>
              {resumeData.experience.map((exp, i) => (
                <div key={i} className="mb-3">
                  <p className="text-blue-300 font-medium text-sm">{exp.title} | {exp.period}</p>
                  <p className="text-xs text-gray-400">{exp.org}</p>
                  <ul className="list-disc ml-5 text-xs text-gray-300 mt-1">
                    {exp.points.map((point, j) => <li key={j}>{point}</li>)}
                  </ul>
                </div>
              ))}
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-1">Projects</h4>
              {resumeData.projects.map((proj, i) => (
                <div key={i} className="mb-3">
                  <p className="text-blue-300 font-medium text-sm">{proj.name}</p>
                  <p className="text-xs text-gray-400">{proj.stack}</p>
                  <ul className="list-disc ml-5 text-xs text-gray-300">
                    {proj.highlights.map((line, j) => <li key={j}>{line}</li>)}
                  </ul>
                  <div className="text-xs mt-1 space-x-3">
                    <a href={proj.links.live} className="text-blue-400 hover:underline">Live</a>
                    <a href={proj.links.github} className="text-blue-400 hover:underline">GitHub</a>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-1">Achievements</h4>
              <ul className="list-disc ml-5 text-xs text-gray-300">
                {resumeData.achievements.map((a, i) => <li key={i}>{a}</li>)}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-1">Education</h4>
              <ul className="list-disc ml-5 text-xs text-gray-300">
                {resumeData.education.map((edu, i) => <li key={i}>{edu}</li>)}
              </ul>
            </div>
          </div>
        </motion.div>

        <div className="pt-12 text-center">
          <p className="text-sm text-gray-400 mb-2">Download Resume As:</p>
          <div className="flex justify-center gap-4">
            <a
              href="https://drive.google.com/file/d/1y4zX6WrdUg6SVGH8DDsw6226TOw4XZao/view?usp=sharing"
              target='_blank'
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md"
            >PDF</a>
            <a
              href="https://docs.google.com/document/d/1D3By6r0Y6THF481nF7atZC0R2AJRNfuk/edit?usp=sharing&ouid=115450180500080246835&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg shadow-md"
            >Word</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;
