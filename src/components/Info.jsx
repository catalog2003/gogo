import React from "react";
import { useTranslation } from "react-i18next";
import { 
  FaCheckCircle, FaUpload, FaDownload, FaLanguage, 
  FaHandHoldingUsd, FaFileImage, FaClipboard, FaLock, 
  FaRegLightbulb, FaClock, FaQuestionCircle, FaCalculator 
} from "react-icons/fa";

const Info = () => {
  const { t } = useTranslation();
  const wordToReplace = t("word"); // Dynamic word replacement (e.g., "Picture" or "Imagen")

  // Features List
  const features = [
    { icon: FaHandHoldingUsd, title: t("features.free"), description: t("features.free_desc") },
    { icon: FaCheckCircle, title: t("features.accuracy"), description: t("features.accuracy_desc") },
    { icon: FaLanguage, title: t("features.language"), description: t("features.language_desc") },
    { icon: FaFileImage, title: t("features.supported_formats", { word: wordToReplace }), description: t("features.supported_formats_desc") },
    { icon: FaClipboard, title: t("features.handwritten"), description: t("features.handwritten_desc") },
    { icon: FaUpload, title: t("features.batch_processing", { word: wordToReplace }), description: t("features.batch_processing_desc", { word: wordToReplace }) },
    { icon: FaClock, title: t("features.speed"), description: t("features.speed_desc") },
    { icon: FaLock, title: t("features.security", { word: wordToReplace }), description: t("features.security_desc" , { word: wordToReplace }) },
    { icon: FaRegLightbulb, title: t("features.smart_recognition"), description: t("features.smart_recognition_desc") },
    { icon: FaCalculator, title: t("features.math_support"), description: t("features.math_support_desc") }
  ];

  // Steps List
  const steps = [
    { icon: FaUpload, title: t("steps.upload", { word: wordToReplace }), description: t("steps.upload_desc", { word: wordToReplace }) },
    { icon: FaCheckCircle, title: t("steps.convert"), description: t("steps.convert_desc") },
    { icon: FaDownload, title: t("steps.download"), description: t("steps.download_desc") }
  ];

  // FAQs List
  const faqs = [
    { question: t("faqs.free"), answer: t("faqs.free_desc") },
    { question: t("faqs.handwritten", { word: wordToReplace }), answer: t("faqs.handwritten_desc") },
    { question: t("faqs.accuracy"), answer: t("faqs.accuracy_desc") },
    { question: t("faqs.batch", { word: wordToReplace }), answer: t("faqs.batch_desc") },
    { question: t("faqs.scanned", { word: wordToReplace }), answer: t("faqs.scanned_desc") },
    { question: t("faqs.data_safety", { word: wordToReplace }), answer: t("faqs.ata_safety_desc") },
    { question: t("faqs.mobile"), answer: t("faqs.mobile_desc") },
    { question: t("faqs.blurry", { word: wordToReplace }), answer: t("faqs.blurry_desc") },
    { question: t("faqs.math"), answer: t("faqs.math_desc") }
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 text-gray-800">
      {/* Header Section */}
      <header className="text-center mb-10">
        <h1 className="text-5xl font-bold text-blue-700 mb-4">
          {t("title", { word: wordToReplace })}
        </h1>
        <p className="text-lg text-gray-600">{t("description")}</p>
      </header>

      {/* Features Section */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="p-5 shadow-lg rounded-lg bg-white flex items-center border-l-4 border-blue-500 transition duration-300 hover:shadow-xl">
            <feature.icon className="text-blue-500 text-3xl mr-4" />
            <div>
              <h3 className="font-semibold text-lg">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </section>

      {/* How It Works Section */}
      <section className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">{t("steps.title", { word: wordToReplace })}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="p-6 bg-blue-100 rounded-lg shadow-md border border-blue-300 transition duration-300 hover:shadow-lg">
              <step.icon className="text-blue-600 text-4xl mx-auto mb-3" />
              <h3 className="font-semibold text-lg">{step.title}</h3>
              <p className="text-gray-700 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">{t("faqs.title")}</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="border-b py-4 cursor-pointer">
              <summary className="font-semibold text-lg text-blue-600 flex items-center">
                <FaQuestionCircle className="mr-2" /> {faq.question}
              </summary>
              <p className="text-gray-700 text-sm mt-2">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Info;
