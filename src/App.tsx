import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Nav from './components/Nav'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import { pageFade } from './lib/motion'

import Home                 from './pages/Home'
import Serveflow            from './pages/Serveflow'
import Automatisierungen    from './pages/Automatisierungen'
import Bookbase             from './pages/Bookbase'
import Web                  from './pages/Web'
import IndividuelleProjekte from './pages/IndividuelleProjekte'
import Journal              from './pages/Journal'
import Kontakt              from './pages/Kontakt'
import Impressum            from './pages/Impressum'
import Datenschutz          from './pages/Datenschutz'
import KanzleiVorschau      from './pages/beispiel/Kanzlei'
import Card                 from './pages/Card'

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
          <Route path="/"                       element={<Home />} />
          <Route path="/serveflow"              element={<Serveflow />} />
          <Route path="/automatisierungen"      element={<Automatisierungen />} />
          <Route path="/bookbase"               element={<Bookbase />} />
          <Route path="/web"                    element={<Web />} />
          <Route path="/individuelle-projekte"  element={<IndividuelleProjekte />} />
          <Route path="/journal"                element={<Journal />} />
          <Route path="/kontakt"                element={<Kontakt />} />

          <Route path="/beispiel/kanzlei"       element={<KanzleiVorschau />} />
          <Route path="/card"                   element={<Card />} />

          <Route path="/impressum"   element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />

          <Route path="/produkte/serveflow"   element={<Serveflow />} />
          <Route path="/ventures"             element={<Navigate to="/individuelle-projekte" replace />} />
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

function Chrome({ children }: { children: React.ReactNode }) {
  const location = useLocation()
  const hideChrome = location.pathname.startsWith('/beispiel/') || location.pathname === '/card'

  if (hideChrome) {
    return <div className="min-h-screen flex flex-col"><div className="flex-1">{children}</div></div>
  }

  return (
    <div className="min-h-screen bg-paper flex flex-col">
      <Nav />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Chrome>
        <AnimatedRoutes />
      </Chrome>
    </BrowserRouter>
  )
}
