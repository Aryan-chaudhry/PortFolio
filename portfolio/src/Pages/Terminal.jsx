import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const COMMANDS = [
  { command: 'help', description: 'List all available commands' },
  { command: 'about', description: 'Brief introduction about me' },
  { command: 'skills', description: 'Technical skills and tools I use' },
  { command: 'education', description: 'My academic background' },
  { command: 'projects', description: 'Overview of major projects' },
  { command: 'climavision', description: 'Open ClimaVision 360' },
  { command: 'visitly', description: 'Open Visitly rental platform' },
  { command: 'calculator', description: 'Open my calculator project' },
  { command: 'leetprogress', description: 'Open my LeetCode dashboard' },
  { command: 'achievements', description: 'Competitions, badges, and ranks' },
  { command: 'contact', description: 'How to reach me' },
  { command: 'slideshow', description: 'Auto-display all sections' },
  { command: 'clear', description: 'Clear the terminal screen' },
  { command: '.exit', description: 'Exit the terminal and go Home' },
];

const SLIDES = [
  {
    title: 'about',
    content: "👋 Hi, I'm Aryan Chaudhary. \n Problem solving on Coding platform \n💻 MERN Stack Developer passionate about building full-stack web applications and solving real-world problems with clean, scalable code.",
  },
  {
    title: 'skills',
    content:
      "🧠 Core: C++, Java, Python, SQL, JavaScript\n💻 Web: React.js, Node.js, Express.js, EJS, Tailwind CSS\n🛠️ Tools: Git, GitHub, VS Code, Postman, MongoDB, MySQL\n📚 Concepts: DSA, OOP, OS, DBMS",
  },
  {
    title: 'education',
    content:
      "🎓 B.E. in Computer Science - Chandigarh University (2022–2026)\n📈 CGPA: 7.5/10\n🏫 XII (CBSE) - Nishan Public School (2022)\n📄 Percentage: 74.4%",
  },
  {
    title: 'projects',
    content:
`🌐 ClimaVision 360
- Real-time Weather forecasting application with global weather, 3D globe, radar alerts, earthquick's and Tsunami alerts
🔗 Type: climavision

🏠 Visitly
- Rental site for Home, shops and showrooms and many more with with 360° tours, real-time listings, map integration
🔗 Type: visitly

🧮 Calculator
- Responsive, modern calculator app
🔗 Type: calculator

📊 LeetProgress
- Track your Leetcode profile to showcase it to recruiter, teach employees
🔗 Type: leetprogress`
  },
  {
    title: 'achievements',
    content:
      "🏆 5⭐ in C++ on HackerRank\n🥈 2nd Place - Hack Track @ CU\n🥇 Winner - Code Relay 2024\n👨‍💻 430+ LeetCode problems solved\n🔢 Ranked 53/1115 in national DSA coding quiz",
  },
  {
    title: 'contact',
    content:
      "📧 Email: aryanchaudhary2629@gmail.com\n🔗 LinkedIn: linkedin.com/in/aryan-chaudhary-83571a252\n🔗 GitHub: github.com/Aryan-chaudhry\n🌐 Portfolio: https://aryn-folio.netlify.app",
  },
];

const Terminal = () => {
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState('');
  const [slideshowIndex, setSlideshowIndex] = useState(0);
  const [slideshowRunning, setSlideshowRunning] = useState(false);
  const terminalEndRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  useEffect(() => {
    if (slideshowRunning && slideshowIndex < SLIDES.length) {
      const { title, content } = SLIDES[slideshowIndex];
      setTimeout(() => {
        setHistory((prev) => [...prev, `$ ${title}`, content]);
        setSlideshowIndex((prev) => prev + 1);
      }, 2000);
    } else if (slideshowIndex >= SLIDES.length) {
      setSlideshowRunning(false);
      setSlideshowIndex(0);
    }
  }, [slideshowRunning, slideshowIndex]);

  const handleCommand = (raw) => {
    const command = raw.trim().toLowerCase();

    switch (command) {
      case 'help':
        const helpText = COMMANDS.map(
          (c) => `  > ${c.command.padEnd(14)} — ${c.description}`
        ).join('\n');
        updateHistory(command, helpText);
        break;

      case 'clear':
        setHistory([]);
        break;

      case 'slideshow':
        updateHistory(command);
        setSlideshowRunning(true);
        break;

      case '.exit':
        updateHistory(command, 'Closing terminal...');
        setTimeout(() => navigate('/'), 1200);
        break;

      case 'visitly':
        updateHistory(command, '🔗 Opening Visitly...');
        window.open('https://visitly-live.onrender.com/listings', '_blank');
        break;

      case 'climavision':
        updateHistory(command, '🌍 Launching ClimaVision 360...');
        window.open('https://weather-forecast-aryan.netlify.app/', '_blank');
        break;

      case 'calculator':
        updateHistory(command, '🧮 Launching Calculator...');
        window.open('https://calculator-aryan.netlify.app/', '_blank'); // change URL if different
        break;

      case 'leetprogress':
        updateHistory(command, '📊 Opening LeetCode Dashboard...');
        window.open('https://leetprogress.netlify.app/', '_blank'); // change URL if different
        break;

      default:
        const slide = SLIDES.find((s) => s.title === command);
        if (slide) {
          updateHistory(command, slide.content);
        } else {
          updateHistory(
            command,
            '❌ Unknown command. Type `help` to list all available commands.'
          );
        }
    }
  };

  const updateHistory = (cmd, output = '') => {
    setHistory((prev) => [...prev, `$ ${cmd}`, ...(output ? [output] : [])]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    }
  };

  return (
    <div className="bg-black text-white h-screen w-full font-mono px-4 py-6 overflow-y-auto select-none">
      <div className="text-blue-400 text-sm mb-1">
        Aryan Terminal v1.0 — Welcome!
      </div>
      <div className="text-yellow-400 text-xs mb-4">
        Type <span className="text-green-400 font-semibold">help</span> to list commands. Type <span className="text-green-400 font-semibold">.exit</span> to leave.
      </div>

      <div className="text-sm space-y-2">
        {history.map((line, index) => (
          <pre
            key={index}
            className={`whitespace-pre-wrap ${
              line.startsWith('$') ? 'text-green-400' : 'text-gray-200'
            }`}
          >
            {line}
          </pre>
        ))}

        <div className="flex items-center">
          <span className="text-green-400 mr-2">$</span>
          <input
            type="text"
            className="bg-transparent outline-none w-full text-green-400 caret-white"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
            spellCheck={false}
          />
        </div>
        <div ref={terminalEndRef} />
      </div>
    </div>
  );
};

export default Terminal;
