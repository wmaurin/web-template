import { Routes, Route } from 'react-router-dom';
import HTMLElementsPage from './HTMLElementsPage';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {

  return (
    <>
    <div className="max-w-7xl mx-auto p-6">
      <Navbar />
      <div className="mt-6">  
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/HTMLElements" element={<HTMLElementsPage />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
