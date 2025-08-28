import './App.css'
import Rfx from './components/Rfx';
import A1 from './pages/A1';
import A2 from './pages/A2';
import A3 from './pages/A3'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<A1 />} />
      <Route path="/a2" element={<A2 />} />
      <Route path="/a3" element={<A3 />} />
      <Route path="*" element={<A1 />} />
    </Routes>
    <Rfx></Rfx>
  </BrowserRouter>
}

export default App
