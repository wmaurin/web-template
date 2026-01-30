import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

function Navbar() {
  const navLinks = [
    { path: '/basic', label: 'Basic' },
    { path: '/components', label: 'Components' },
  ];

  return (
    <nav className="flex justify-between items-center">
      <div>
        <Link to="/">Logo</Link>
      </div>
      <div className="flex items-center gap-6">
        {navLinks.map((link) => (
          <Link to={link.path} key={link.path}>
            {link.label}
          </Link>
        ))}
        <ThemeToggle />
      </div>
    </nav>
  );
}

export default Navbar;
