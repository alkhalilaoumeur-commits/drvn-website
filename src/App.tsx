import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Startseite from './pages/Startseite';
import Leistungen from './pages/Leistungen';
import Branchen from './pages/Branchen';
import UeberUns from './pages/UeberUns';
import Kontakt from './pages/Kontakt';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-bg text-text">
        <Navbar />
        <Routes>
          <Route path="/" element={<Startseite />} />
          <Route path="/leistungen" element={<Leistungen />} />
          <Route path="/branchen" element={<Branchen />} />
          <Route path="/ueber-uns" element={<UeberUns />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
