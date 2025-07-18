// src/components/ProjectCard.jsx
import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectCard = ({ title, description, link, github, image }) => {
  const cardRef = useRef(null);
  const descriptionRef = useRef(null);

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

    const borderThreshold = 40;
    const borderStyles = {
      top: y < borderThreshold,
      bottom: y > rect.height - borderThreshold,
      left: x < borderThreshold,
      right: x > rect.width - borderThreshold,
    };

    Object.entries(borderStyles).forEach(([side, show]) => {
      cardRef.current.style.setProperty(`--show-${side}`, show ? '1' : '0');
    });
  };

  const handleMouseLeave = () => {
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    ['top', 'bottom', 'left', 'right'].forEach((side) => {
      cardRef.current.style.setProperty(`--show-${side}`, '0');
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative bg-[#0f172a]/30 backdrop-blur-md border border-neutral-800 rounded-2xl overflow-hidden p-6 shadow-xl transition-transform duration-300"
      style={{
        '--show-top': 0,
        '--show-bottom': 0,
        '--show-left': 0,
        '--show-right': 0,
      }}
    >
      {/* Glow Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 rounded-2xl"
          style={{
            background:
              'radial-gradient(250px circle at var(--x, 50%) var(--y, 50%), rgba(144, 202, 249, 0.25), transparent)',
          }}
        />
      </div>

      {/* Dynamic Gradient Borders */}
      <div className="absolute inset-0 z-0 rounded-2xl pointer-events-none">
        {['top', 'bottom', 'left', 'right'].map((side) => (
          <div
            key={side}
            className={`absolute ${
              side === 'top'
                ? 'top-0 left-0 w-full h-[2px]'
                : side === 'bottom'
                ? 'bottom-0 left-0 w-full h-[2px]'
                : side === 'left'
                ? 'top-0 left-0 h-full w-[2px]'
                : 'top-0 right-0 h-full w-[2px]'
            }`}
            style={{
              background:
                side === 'top' || side === 'bottom'
                  ? 'linear-gradient(to right, #3b82f6, #8b5cf6)'
                  : 'linear-gradient(to bottom, #3b82f6, #8b5cf6)',
              opacity: `var(--show-${side})`,
              transition: 'opacity 0.4s ease-out',
              willChange: 'opacity',
            }}
          />
        ))}
      </div>

      {/* Main Card Content */}
      <div className="relative z-10">
        {image && (
          <img
            src={image}
            alt={title}
            className="w-full h-40 object-cover rounded-xl border border-white/10 mb-4"
          />
        )}
        <h3 className="text-2xl font-bold text-blue-400">{title}</h3>

        <AnimatePresence>
          <motion.p
            className="text-gray-300 mt-2 text-sm"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {description}
          </motion.p>
        </AnimatePresence>

        <div className="mt-5 flex gap-4">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Live
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-black transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
