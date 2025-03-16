import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import OurHistory from './pages/HistoryPage';
import MeetOurTeam from './pages/TeamPage';
import OurServices from './pages/ServicesPage';
import ContactUs from './pages/ContactPage';
import FAQ from './pages/FAQPage';
import Header from './components/Header';
import Footer from './components/Footer';

function AppRoutes() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/our-history" element={<OurHistory />} />
        <Route path="/meet-our-team" element={<MeetOurTeam />} />
        <Route path="/our-services" element={<OurServices />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default AppRoutes;
