import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="py-16 text-center max-w-3xl mx-auto">
      <h1 className="mb-6">Web Template</h1>
      <p className="lead text-lg mb-8">
        A template with base styles and reusable components. Built on semantic
        HTML, CSS variables, and Tailwind utilities.
      </p>
      <div className="flex gap-4 justify-center flex-wrap">
        <Link to="/basic">
          <button>View Base Styles</button>
        </Link>
        <Link to="/components">
          <button className="secondary">View Components</button>
        </Link>
      </div>
    </section>
  );
}

export default Home;
