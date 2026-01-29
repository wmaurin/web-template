import { Routes, Route, Link } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Basic from './pages/Basic';
import Components from './pages/Components';

function NotFound() {
  return (
    <section className="text-center max-w-3xl mx-auto">
      <h1>404</h1>
      <p>Page not found</p>
    </section>
  );
}

function App() {
  return (
    <>
      <div className="max-w-7xl mx-auto p-6">
        <Navbar />
        <div className="mt-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/basic" element={<Basic />} />
            <Route path="/components" element={<Components />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
