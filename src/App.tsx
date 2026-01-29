import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Basic from './pages/Basic';
import Components from './pages/Components';

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
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
