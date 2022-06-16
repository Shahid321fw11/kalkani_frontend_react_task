import './App.css';
import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Screen1 from './Components/Screen1';
import Screen2 from './Components/Screen2';

function App() {
  return <>
    <Navbar />
    <Routes>
      <Route path="/screen1" element={<Screen1 />} />
      <Route path="/screen2" element={<Screen2 />} />
    </Routes>
  </>
}

export default App;
