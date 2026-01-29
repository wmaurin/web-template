import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Basic from './pages/Basic';

function App() {
  return (
    <>
      <div className="max-w-7xl mx-auto p-6">
        <Navbar />
        <div className="mt-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Basic" element={<Basic />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
