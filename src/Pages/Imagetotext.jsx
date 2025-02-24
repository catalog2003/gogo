
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import New from "../components/New";
import Image from "../components/Image";

const Imagetotext = () => {
  return (
    <div>
     
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-700 to-indigo-800 p-6 pt-16">
      <h1 className="text-5xl font-bold text-white text-center mt-8 p-4">
        Image to Text 
       
        </h1>
      <New />
  
</div>
<Image/>
    
    </div>
  );
};

export default Imagetotext;
