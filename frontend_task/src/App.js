import './App.css';
import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';

function App() {
  return <>
    <Navbar />
    <Routes>
      <Route path="/screen1" element={<h1>Home</h1>} />
      <Route path="/screen2" element={<h1>About</h1>} />
    </Routes>
  </>
}

export default App;
