import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Upload, X, Clipboard, Check } from "lucide-react"; // Icons
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const API_KEY = "13b3b9701e4542e0a3e3e64932ecdeb9";
const ENDPOINT = "https://imgapi.cognitiveservices.azure.com/";

const App = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [extractedTexts, setExtractedTexts] = useState({});
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [loading, setLoading] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    setSelectedImages((prev) => [...prev, ...acceptedFiles]);
  }, []);

  const removeImage = (index) => {
    setSelectedImages((prev) => prev.filter((_, i) => i !== index));
    setExtractedTexts((prev) => {
      const updatedTexts = { ...prev };
      delete updatedTexts[index];
      return updatedTexts;
    });
  };

  const extractText = async () => {
    if (selectedImages.length === 0) {
      alert("Please upload at least one image.");
      return;
    }

    setLoading(true);
    const newExtractedTexts = {};

    try {
      await Promise.all(
        selectedImages.map(async (image, index) => {
          const response = await fetch(`${ENDPOINT}vision/v3.2/ocr`, {
            method: "POST",
            headers: {
              "Ocp-Apim-Subscription-Key": API_KEY,
              "Content-Type": "application/octet-stream",
            },
            body: image,
          });

          const data = await response.json();
          const extractedText =
            data.regions
              ?.flatMap((region) =>
                region.lines.flatMap((line) =>
                  line.words.map((word) => word.text)
                )
              )
              .join(" ") || "No text found";

          newExtractedTexts[index] = extractedText;
        })
      );

      setExtractedTexts(newExtractedTexts);
      setSelectedImages([]); // **Remove images after conversion**
    } catch (error) {
      console.error("Error extracting text:", error);
      alert("Error extracting text.");
    }

    setLoading(false);
  };

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1500); // Reset after 1.5 seconds
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: true,
  });

  return (
    <div>
      <Navbar />

      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-600 to-indigo-700 p-6 pt-16">
        <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-5xl">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 leading-tight text-center">
            AI OCR - Extract Text from Images 🖼️ ➜ 📝
          </h1>

          <div className={`mt-6 flex flex-col md:flex-row gap-6`}>
            {/* Upload Area with Button & Drag/Drop */}
            <div
              {...getRootProps()}
              className="p-10 border-2 border-gray-300 border-dashed rounded-2xl flex flex-col items-center justify-center cursor-pointer bg-gray-50 hover:bg-gray-100 transition w-full"
            >
              <input {...getInputProps()} />
              <p className="text-gray-600 font-semibold text-lg text-center">
                {isDragActive ? "Drop images here..." : "Drag & drop or click to upload"}
              </p>

              {/* Upload Button */}
              <button className="mt-4 px-6 py-3 bg-blue-500 text-white font-bold rounded-xl flex items-center gap-2 shadow-lg hover:bg-blue-600 transition">
                <Upload size={20} /> Upload Image
              </button>
            </div>

            {/* Stack of Images & Convert Button */}
            {selectedImages.length > 0 && (
              <div className="flex flex-col w-full">
                <div className="flex flex-wrap gap-4 overflow-y-auto max-h-60 p-2 border rounded-xl shadow-inner bg-gray-100">
                  {selectedImages.map((image, index) => (
                    <div key={index} className="relative group w-16 h-16">
                      <img
                        src={URL.createObjectURL(image)}
                        alt={image.name}
                        className="w-full h-full rounded-lg shadow-md transition-transform transform group-hover:scale-105"
                      />
                      <button
                        className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition"
                        onClick={() => removeImage(index)}
                      >
                        <X size={14} />
                      </button>
                    </div>
                  ))}
                </div>

                <button
                  onClick={extractText}
                  disabled={loading}
                  className="mt-4 px-8 py-4 bg-green-500 text-white font-bold rounded-2xl shadow-lg hover:bg-green-600 transition disabled:opacity-50"
                >
                  {loading ? "Extracting Text..." : "🔄 Convert Now"}
                </button>
              </div>
            )}
          </div>

          {/* Extracted Text Output */}
          {Object.keys(extractedTexts).length > 0 && (
            <div className="mt-6">
              <h2 className="text-2xl font-semibold text-gray-800">Extracted Texts:</h2>
              <div className="space-y-6">
                {Object.keys(extractedTexts).map((index) => (
                  <div key={index} className="p-6 bg-gray-100 rounded-2xl shadow-lg">
                    <h3 className="text-lg font-semibold text-gray-700">
                      Extracted Text {parseInt(index) + 1}
                    </h3>

                    <p className="text-gray-600 text-lg whitespace-pre-wrap max-w-full overflow-x-auto mt-2">
                      {extractedTexts[index]}
                    </p>

                    {/* Download & Copy Buttons */}
                    <div className="flex gap-4 mt-4">
                      <button
                        className="px-6 py-3 bg-purple-600 text-white font-bold rounded-xl shadow-lg hover:bg-purple-700 transition"
                      >
                        📥 Download Text
                      </button>

                      <button
                        onClick={() => copyToClipboard(extractedTexts[index], index)}
                        className="px-4 py-3 bg-blue-500 text-white font-bold rounded-xl shadow-lg hover:bg-blue-600 transition flex items-center"
                      >
                        {copiedIndex === index ? <Check size={20} /> : <Clipboard size={20} />}
                        <span className="ml-2">{copiedIndex === index ? "Copied!" : "Copy"}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
