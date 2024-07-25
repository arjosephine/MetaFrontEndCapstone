import React from 'react';
import { HashRouter as Router,  Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Menu from './components/Menu/Menu';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';
import Banner from './components/Banner/Banner';
import ReservationPage from "./components/ReservationPage/ReservationPage";
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
          <Header />
          <Banner />
          <Routes>
              <Route path="/" element={<Navigate to="/about" />} />
              <Route path="/about" element={<About />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/reservation" element={<ReservationPage />} />
          </Routes>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
