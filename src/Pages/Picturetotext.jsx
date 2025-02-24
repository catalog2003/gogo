
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import New from "../components/New";
import Info from "../components/Info";
import { useTranslation } from "react-i18next";


const Picturetotext = () => {
  const { t } = useTranslation();
return (
    <div>
     

      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-700 to-indigo-800 p-6 pt-16">
      <h1 className="text-5xl font-bold text-white text-center mt-8 p-4">
      {t("Page Title" )}
        </h1>
      <New />
      
     
</div>
<Info/>
    </div>
  );
};

export default Picturetotext;
