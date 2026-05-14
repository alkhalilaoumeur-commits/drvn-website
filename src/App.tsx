import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';

import Startseite from './pages/Startseite';
import ServeFlow  from './pages/ServeFlow';
import Webseiten  from './pages/Webseiten';
import Ventures   from './pages/Ventures';
import News       from './pages/News';
import Kontakt    from './pages/Kontakt';
import Impressum  from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';

import { pageTransition } from './lib/animations';

// Page-Wrapper für sanfte Übergänge zwischen Routes
function PageWrap({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ minHeight: '60vh' }}
    >
      {children}
    </motion.main>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* ── Primäre Routes (Spec) ── */}
        <Route path="/"          element={<PageWrap><Startseite /></PageWrap>} />
        <Route path="/serveflow" element={<PageWrap><ServeFlow /></PageWrap>} />
        <Route path="/web"       element={<PageWrap><Webseiten /></PageWrap>} />
        <Route path="/ventures"  element={<PageWrap><Ventures /></PageWrap>} />
        <Route path="/news"      element={<PageWrap><News /></PageWrap>} />
        <Route path="/kontakt"   element={<PageWrap><Kontakt /></PageWrap>} />

        {/* ── Legacy-Aliase (SEO-Erhalt, indexed URLs) ── */}
        <Route path="/produkte/serveflow"   element={<PageWrap><ServeFlow /></PageWrap>} />
        <Route path="/leistungen/webseiten" element={<PageWrap><Webseiten /></PageWrap>} />
        <Route path="/leistungen"           element={<Navigate to="/web" replace />} />
        <Route path="/branchen"             element={<Navigate to="/" replace />} />
        <Route path="/ueber-uns"            element={<Navigate to="/" replace />} />
        <Route path="/beispiel/casa-lupo"   element={<Navigate to="/web" replace />} />

        {/* ── Legal ── */}
        <Route path="/impressum"   element={<PageWrap><Impressum /></PageWrap>} />
        <Route path="/datenschutz" element={<PageWrap><Datenschutz /></PageWrap>} />

        {/* ── Catch-all ── */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="grain-overlay" aria-hidden="true" />
      <ScrollToTop />
      <ScrollProgress />
      <Navbar />
      <AnimatedRoutes />
      <Footer />
      <FloatingButtons />
    </BrowserRouter>
  );
}
