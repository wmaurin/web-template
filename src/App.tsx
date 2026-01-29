import { Routes, Route } from 'react-router-dom';
import HTMLElementsPage from './HTMLElementsPage';

function App() {

  return (
    <Routes>
      <Route path="/" element={<><h1 className="text-3xl font-bold">Test</h1></>} />
      <Route path="/HTMLElements" element={<HTMLElementsPage />} />
    </Routes>
  )
}

export default App
