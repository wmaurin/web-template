import { Link } from 'react-router-dom';

function Navbar() {
  const navLinks = [{ path: '/Basic', label: 'Basic' }];

  return (
    <nav className="flex justify-between items-center">
      <div>
        <Link to="/">Logo</Link>
      </div>
      <div className="flex gap-6">
        {navLinks.map((link) => (
          <Link to={link.path} key={link.path}>
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
