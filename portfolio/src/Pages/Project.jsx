// pages/Projects.jsx
import React, { useEffect } from 'react';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';

// Images
import visitly from '../utils/Visitly.png';
import leetultra from '../utils/LeetProgress.png';
import weather from '../utils/Weather.png';
import calculator from '../utils/Calculator.png';

const Projects = () => {
  // useEffect(() => {
  //   const cursor = document.querySelector('.custom-cursor');
  //   const move = (e) => {
  //     cursor.style.left = `${e.clientX}px`;
  //     cursor.style.top = `${e.clientY}px`;
  //   };
  //   window.addEventListener('mousemove', move);
  //   return () => window.removeEventListener('mousemove', move);
  // }, []);

  const projects = [
    {
      title: 'Calculator App',
      description: 'Elegant calculator using HTML, CSS, JS. Deployed on Netlify.',
      link: 'https://aryan2629calculator.netlify.app/',
      github: 'https://github.com/Aryan-chaudhry/Calculator',
      image: calculator,
    },
    {
      title: 'Visitly',
      description: 'Travel info app with hotels, maps, Express backend.',
      link: 'https://working-projects.onrender.com/',
      github: 'https://github.com/Aryan-chaudhry/Visitly',
      image: visitly,
    },
    {
      title: 'Weather Forecast App',
      description: 'Weather app with tsunami, earthquake alerts using Open-Meteo & USGS APIs.',
      link: 'https://weather-forecast-aryan.netlify.app/',
      github: 'https://github.com/Aryan-chaudhry/Weather-Forecast',
      image: weather,
    },
    {
      title: 'LeetProgress Ultra',
      description: 'Track your LeetCode journey with GitHub data integration.',
      link: 'https://leetprogress.netlify.app/',
      github: 'https://github.com/Aryan-chaudhry/Master-JavaScript/tree/main/LeetProgress',
      image: leetultra,
    },
  ];

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-[#000000] via-[#050505] to-[#202020] text-white overflow-hidden font-sans">
      {/* Custom Cursor */}
      {/* <div className="custom-cursor w-6 h-6 border-2 border-white rounded-full fixed pointer-events-none z-[9999] transition-transform duration-75" /> */}

      <Header />

      <section className="px-6 py-20 max-w-7xl mx-auto">
        <h2 className="text-5xl font-extrabold text-center mb-14 text-transparent bg-clip-text bg-gradient-to-r from-white to-white animate-fadeInUp">
          My Projects
        </h2>

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
              github={project.github}
              image={project.image}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
