import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Imagetotext from "./Pages/Imagetotext";
import Jpgtotext from "./Pages/Jpgtotext";
import Picturetotext from "./Pages/Picturetotext";
import Privacypolicay from "./Pages/Privacypolicy";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n"; 

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/es/imagen-al-texto" element={<Picturetotext/>} />
          <Route path="/hi/पाठ-के-लिए-चित्र" element={<Picturetotext/>} />
          <Route path="/pt/imagem-para-texto" element={<Picturetotext/>} />
          <Route path="/ru/изображение-на-текст" element={<Picturetotext/>} />
          <Route path="/id/gambar-ke-teks" element={<Picturetotext/>} />
          <Route path="/it/immagine-al-testo" element={<Picturetotext/>} />
          <Route path="/de/bild-zum-text" element={<Picturetotext/>} />
          <Route path="/fr/image-du-texte" element={<Picturetotext/>} />
          <Route path="/ko/문자-사진" element={<Picturetotext/>} />
          <Route path="/da/billede-til-tekst" element={<Picturetotext/>} />
          <Route path="/cs/obrázek-k-textu" element={<Picturetotext/>} />
          <Route path="/sv/bild-till-text" element={<Picturetotext/>} />
          <Route path="/pl/obraz-do-tekstu" element={<Picturetotext/>} />
          <Route path="/nl/foto-om-te-sms'en" element={<Picturetotext/>} />
          <Route path="/ro/imagine-la-text" element={<Picturetotext/>} />
          <Route path="/th/รูปภาพถึงข้อความ" element={<Picturetotext/>} />
          <Route path="/vi/hình-ảnh-để-nhắn-tin" element={<Picturetotext/>} />
          <Route path="/ar/صورة-للنص" element={<Picturetotext/>} />
          <Route path="/tr/metin-için-resim" element={<Picturetotext/>} />
          <Route path="/ja/テキストの写真" element={<Picturetotext/>} />
          <Route path="/ka/სურათი-ტექსტისთვის" element={<Picturetotext/>} />
          <Route path="/fi/kuvata-tekstiin" element={<Picturetotext/>} />
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
