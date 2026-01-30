import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import Sidebar from './Sidebar';

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/basic', label: 'Basic' },
    { path: '/components', label: 'Components' },
  ];

  const handleLinkClick = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <nav className="flex justify-between items-center">
        <div>
          <Link to="/">Logo</Link>
        </div>
        <div className="flex items-center gap-6">
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link to={link.path} key={link.path}>
                {link.label}
              </Link>
            ))}
          </div>
          <ThemeToggle />
          {/* Mobile menu button - only visible on mobile */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="menu-button"
            aria-label="Open menu"
            style={{ padding: '0.5rem' }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Sidebar for mobile navigation */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        position="right"
      >
        <nav className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              to={link.path}
              key={link.path}
              onClick={handleLinkClick}
              className={`text-lg ${
                location.pathname === link.path
                  ? 'font-semibold'
                  : 'text-muted-foreground'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </Sidebar>
    </>
  );
}

export default Navbar;
