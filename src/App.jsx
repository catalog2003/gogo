import React from "react";

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Imagetotext from "./Pages/Imagetotext"; // Import your page component
import Jpgtotext from "./Pages/Jpgtotext"; // Import your page component
import Picturetotext from "./Pages/Picturetotext"; // Import your page component
import Privacypolicay from "./Pages/Privacypolicy"; // Import your page component
import Contact from "./Pages/Contact"; // Import your page component
import About from "./Pages/About"; // Import your page component
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n"; 
 

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/es" element={<Picturetotext/>} />
          <Route path="/hi" element={<Picturetotext/>} />
          <Route path="/pt" element={<Picturetotext/>} />
          <Route path="/ru" element={<Picturetotext/>} />
          <Route path="/id" element={<Picturetotext/>} />
          <Route path="/it" element={<Picturetotext/>} />
          <Route path="/de" element={<Picturetotext/>} />
          <Route path="/fr" element={<Picturetotext/>} />
          <Route path="/ko" element={<Picturetotext/>} />
          <Route path="/da" element={<Picturetotext/>} />
          <Route path="/cs" element={<Picturetotext/>} />
          <Route path="/sv" element={<Picturetotext/>} />
          <Route path="/pl" element={<Picturetotext/>} />
          <Route path="/nl" element={<Picturetotext/>} />
          <Route path="/ro" element={<Picturetotext/>} />
          <Route path="/th" element={<Picturetotext/>} />
          <Route path="/vi" element={<Picturetotext/>} />
          <Route path="/ar" element={<Picturetotext/>} />
          <Route path="/tr" element={<Picturetotext/>} />
          <Route path="/ja" element={<Picturetotext/>} />
          <Route path="/ka" element={<Picturetotext/>} />
          <Route path="/fi" element={<Picturetotext/>} />
          <Route path="/" element={<Picturetotext />} />
          <Route path="/picture-to-text" element={<Picturetotext />} />
          <Route path="/image-to-text" element={<Imagetotext />} />
          <Route path="/jpg-to-text" element={<Jpgtotext />} />
          <Route path="/privacy-policy" element={<Privacypolicay />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
         <Footer />
      </Router>
    </I18nextProvider>
  );
}

export default App;
