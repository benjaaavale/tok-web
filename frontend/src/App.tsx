import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header1 } from '@/components/ui/header';
import { FooterTaped } from '@/components/ui/footer-taped-design';
import Home from '@/pages/Home';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import TermsOfUse from '@/pages/TermsOfUse';
import DataTreatment from '@/pages/DataTreatment';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen text-black dark:text-white font-sans selection:bg-blue-500/30 relative flex flex-col">
        <Header1 />
        
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            <Route path="/data-treatment" element={<DataTreatment />} />
          </Routes>
        </div>

        {/* Footer (Transparent over background paths) */}
        <div className="relative z-10">
          <FooterTaped />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
