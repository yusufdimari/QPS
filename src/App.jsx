import { Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Teams from "./components/Teams";
import Community from "./components/Community";
import Testimonial from "./components/Testimonial";
import Mentorship from "./components/Mentorship";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// ✅ FIXED Community Page Import
import Community2 from './components/Community2/community2';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <About />
              <Services />
              <Teams />
              <Community />
              <Testimonial />
              <Mentorship />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/Community2" element={<Community2 />} />
      </Routes>
    </>
  );
}

export default App;
