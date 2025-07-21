import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // or use HeroIcons
import Logo from '../../public/Logo.png'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Contact', path: '/contact' },
    { name: 'Resume', path: '/resume' },
    { name: 'Terminal', path: '/terminal' },
  ];

  return (
    <header className="bg-dark-950 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        <NavLink  to="/"   className="flex items-center space-x-3 hover:opacity-80 transition duration-200">
          <img src={Logo} alt="Logo" className="h-8 w-8 object-contain" />
          <span   className="text-blue-400 text-4xl"   style={{ fontFamily: "'Dancing Script', cursive" }}>
          Aryan...
          </span>
        </NavLink>



        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-400 font-semibold border-b-2 border-blue-400 pb-1 transition-all duration-200'
                  : 'text-white hover:text-blue-400 transition pb-1'
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Nav Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-6 pb-4 space-y-3">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? 'block text-blue-400 font-semibold border-b border-blue-400 pb-1'
                  : 'block text-white hover:text-blue-400 transition pb-1'
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
