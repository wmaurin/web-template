import { Link } from "react-router-dom";

function Navbar() {

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/Link1', label: 'Link 1' },
    { path: '/Link2', label: 'Link 2' },
    { path: '/Link3', label: 'Link 3' },
  ];

  return (
    <nav className="flex justify-between items-center">
        <div>
            <Link to="/">Logo</Link>
        </div>
        <div className="flex gap-6">
          {navLinks.map((link) => (
            <Link to={link.path} key={link.path}>{link.label}</Link>
          ))}
        </div>
    </nav>
  );
}

export default Navbar;
