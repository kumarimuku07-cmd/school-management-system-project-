import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';
import Home from './components/general/Home';
import StudentLogin from './components/student/StudentLogin';
import ApplyNow from './components/general/ApplyNow';
import AdminDashboard from './components/admin/AdminDashboard';
import AboutUs from './components/general/AboutUs';
import ContactUs from './components/general/ContactUs';
import Facilities from './components/general/Facilities';
import AdminLogin from './components/admin/AdminLogin';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/student/login" element={<StudentLogin />} />
            <Route path="/admission" element={<ApplyNow />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
