import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Startseite from './pages/Startseite';
import Leistungen from './pages/Leistungen';
import Branchen from './pages/Branchen';
import UeberUns from './pages/UeberUns';
import Kontakt from './pages/Kontakt';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import ServeFlow from './pages/ServeFlow';
import Webseiten from './pages/Webseiten';

// Seiten die einen eigenen Footer mitbringen (CinematicFooter etc.) —
// auf diesen wird der globale Footer ausgeblendet, sonst doppelt unten.
const ROUTES_OHNE_GLOBAL_FOOTER = ['/produkte/serveflow'];

function ConditionalFooter() {
  const { pathname } = useLocation();
  if (ROUTES_OHNE_GLOBAL_FOOTER.includes(pathname)) return null;
  return <Footer />;
}

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
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/produkte/serveflow" element={<ServeFlow />} />
          <Route path="/leistungen/webseiten" element={<Webseiten />} />
        </Routes>
        <ConditionalFooter />
      </div>
    </BrowserRouter>
  );
}
