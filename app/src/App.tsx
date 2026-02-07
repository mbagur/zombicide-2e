import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Survivors from './pages/Survivors'

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survivors" element={<Survivors />} />
      </Routes>
    </div>
  )
}

export default App
