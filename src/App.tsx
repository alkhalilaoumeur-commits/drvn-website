import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Nav from './components/Nav'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import { pageFade } from './lib/motion'

import Home       from './pages/Home'
import Serveflow  from './pages/Serveflow'
import Web        from './pages/Web'
import Ventures   from './pages/Ventures'
import Journal    from './pages/Journal'
import Kontakt    from './pages/Kontakt'
import Impressum  from './pages/Impressum'
import Datenschutz from './pages/Datenschutz'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageFade}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Routes location={location}>
          {/* Primäre Routes */}
          <Route path="/"            element={<Home />} />
          <Route path="/serveflow"   element={<Serveflow />} />
          <Route path="/web"         element={<Web />} />
          <Route path="/ventures"    element={<Ventures />} />
          <Route path="/journal"     element={<Journal />} />
          <Route path="/kontakt"     element={<Kontakt />} />

          {/* Legal */}
          <Route path="/impressum"   element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />

          {/* Legacy-Aliase (SEO) */}
          <Route path="/produkte/serveflow"   element={<Serveflow />} />
          <Route path="/leistungen/webseiten" element={<Web />} />
          <Route path="/leistungen"           element={<Navigate to="/web" replace />} />
          <Route path="/branchen"             element={<Navigate to="/" replace />} />
          <Route path="/ueber-uns"            element={<Navigate to="/" replace />} />
          <Route path="/news"                 element={<Navigate to="/journal" replace />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-paper flex flex-col">
        <Nav />
        <div className="flex-1">
          <AnimatedRoutes />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
