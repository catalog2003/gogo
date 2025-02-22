import React from "react";
import { 
  FaCheckCircle, FaUpload, FaDownload, FaLanguage, 
  FaHandHoldingUsd, FaFileImage, FaClipboard, FaLock, 
  FaRegLightbulb, FaClock, FaQuestionCircle, FaCalculator 
} from "react-icons/fa";

const wordToReplace = "Picture"; // Change this word to replace "image" everywhere

const Info = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 text-gray-800">
      {/* Header Section */}
      <header className="text-center mb-10">
        <h1 className="text-5xl font-bold text-blue-700 mb-4">
          Convert {wordToReplace} to Text Instantly with 100% Accuracy
        </h1>
        <p className="text-lg text-gray-600">
        Effortlessly extract text from images, scanned documents, and handwritten notes using our advanced AI-powered Optical Character Recognition (OCR) tool. Whether you need to digitize documents, extract important information from an image, or process multiple files in bulk, our tool is designed to provide you with the most accurate results in the shortest time possible.
        
        </p>
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
        <h2 className="text-3xl font-bold text-blue-700 mb-6">How to Convert {wordToReplace} to Text in 3 Easy Steps</h2>
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
        <h2 className="text-3xl font-bold text-blue-700 mb-6">Frequently Asked Questions (FAQs)</h2>
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

// Features List
const features = [
  { icon: FaHandHoldingUsd, title: "Free & Easy to Use", description: "No sign-ups, no fees, just instant text extraction." },
  { icon: FaCheckCircle, title: "AI-Powered Accuracy", description: "Uses advanced OCR technology for 100% accurate results." },
  { icon: FaLanguage, title: "Multi-Language Support", description: "Extracts text in 20+ languages, including Spanish, French, and Italian." },
  { icon: FaFileImage, title: `Supports All ${wordToReplace} Formats`, description: `Works with JPG, PNG, GIF, TIFF, BMP, and WEBP formats.` },
  { icon: FaClipboard, title: "Handwritten Text Recognition", description: "Digitize handwritten notes, letters, and forms." },
  { icon: FaUpload, title: "Batch Processing", description: `Convert multiple ${wordToReplace}s at once for efficiency.` },
  { icon: FaClock, title: "Fast Processing", description: "Extracts text in seconds with minimal processing time." },
  { icon: FaLock, title: "Secure & Private", description: `Your ${wordToReplace}s and extracted text are never stored or shared.` },
  { icon: FaRegLightbulb, title: "Smart Text Recognition", description: "Detects printed and handwritten text with high precision." },
  { icon: FaCalculator, title: "Mathematical Notation Support", description: "Extracts complex mathematical equations and symbols." }
];

// Steps List
const steps = [
  { icon: FaUpload, title: `Upload Your ${wordToReplace}`, description: `Drag and drop your file or paste the ${wordToReplace} URL.` },
  { icon: FaCheckCircle, title: "Click Convert", description: "Our AI-powered tool will extract text in seconds." },
  { icon: FaDownload, title: "Download or Copy", description: "Save the text as a file or copy it to your clipboard." }
];

// FAQs List
const faqs = [
  { question: "Is this tool free?", answer: "Yes! Our tool is 100% free with no registration required." },
  { question: `Can it extract handwritten text from a ${wordToReplace}?`, answer: "Yes! Our AI can recognize and extract handwritten notes." },
  { question: "How accurate is the text extraction?", answer: "Our advanced OCR ensures 100% accurate results for most images." },
  { question: `Can I convert multiple ${wordToReplace}s at once?`, answer: `Yes, our batch processing feature allows you to upload multiple ${wordToReplace}s.` },
  { question: `Does it work with scanned ${wordToReplace}s?`, answer: "Yes, you can extract text from scanned documents, invoices, and forms." },
  { question: "Is my data safe?", answer: `Yes, we don’t store or share your ${wordToReplace}s or extracted text.` },
  { question: "Can I use this on mobile?", answer: "Yes! Our tool is optimized for both desktop and mobile devices." },
  { question: `Does it work with blurry ${wordToReplace}s?`, answer: `Our AI-powered OCR can extract text even from low-resolution ${wordToReplace}s.` },
  { question: "Can it recognize mathematical symbols?", answer: "Yes, it can extract complex equations and symbols accurately." }
];

export default Info;
