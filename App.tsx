import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar, Footer } from './components/Layout';
import { OceanCanvas } from './components/Visuals';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Story from './pages/Story';
import Gallery from './pages/Gallery';
import Manifesto from './pages/Manifesto';
import Reservations from './pages/Reservations';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans text-gray-100 selection:bg-oceane-gold selection:text-oceane-dark">
        <OceanCanvas />
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/story" element={<Story />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/manifesto" element={<Manifesto />} />
            <Route path="/reservations" element={<Reservations />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;