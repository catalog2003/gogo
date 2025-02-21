import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Imagetotext from "./Pages/Imagetotext"; // Import your page component
import Jpgtotext from "./Pages/Jpgtotext"; // Import your page component
import Picturetotext from "./Pages/Picturetotext"; // Import your page component
import Privacypolicay from "./Pages/Privacypolicy"; // Import your page component
import Contact from "./Pages/Contact"; // Import your page component
import About from "./Pages/About"; // Import your page component

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Picturetotext />} />
     
      <Route path="/picture-to-text" element={<Picturetotext />} />
      <Route path="/image-to-text" element={<Imagetotext />} />
      <Route path="/jpg-to-text" element={<Jpgtotext />} />
      <Route path="/privacy-policy" element={<Privacypolicay />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
