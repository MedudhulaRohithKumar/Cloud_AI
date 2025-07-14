import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Home from '@/pages/Home';
import Product from '@/pages/Product';
import Solutions from '@/pages/Solutions';
import Investors from '@/pages/Investors';
import Incubators from '@/pages/Incubators';
import Documentation from '@/pages/Documentation';
import Contact from '@/pages/Contact';
import About from '@/pages/About';
import Blog from '@/pages/Blog';
import BlogPost from '@/pages/BlogPost';
import EarlyAccess from '@/pages/EarlyAccess';
import PlaceholderPage from '@/pages/PlaceholderPage';
import { Toaster } from "@/components/ui/toaster";

function App() {
  const location = useLocation();

  return (
    <div className="bg-slate-900 min-h-screen flex flex-col text-slate-50">
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/investors" element={<Investors />} />
            <Route path="/incubators" element={<Incubators />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/early-access" element={<EarlyAccess />} />
            <Route path="/careers" element={<PlaceholderPage title="Careers" />} />
            <Route path="/privacy" element={<PlaceholderPage title="Privacy Policy" />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;